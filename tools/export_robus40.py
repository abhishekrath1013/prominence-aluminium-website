"""
Export the Robus 40 window + its nine showcase components for the website.

Run (Blender 4.2+ / 5.x):
  blender -b Robus40_Website_Transparent_Components_11.blend --python tools/export_robus40.py -- public/models/robus40

Outputs (all Draco-compressed GLB, glTF Y-up):
  frame.glb          the whole window assembly, hardware decimated; every node is named "<family>__<n>"
  c1-stay.glb ...    one file per showcase component, full detail, as installed in the window
  manifest.json      per-component bounds / focus region in glTF coordinates (metres)

The .blend is never saved; everything below mutates the in-memory copy only.
"""
import bpy, bmesh, json, os, re, sys
from mathutils import Vector

OUT = sys.argv[sys.argv.index("--") + 1] if "--" in sys.argv else "public/models/robus40"
os.makedirs(OUT, exist_ok=True)

SCENE = "WEBSITE MASTER"
sc = bpy.data.scenes[SCENE]
wm = bpy.context.window_manager
if wm.windows:
    wm.windows[0].scene = sc
assert bpy.context.scene.name == SCENE, bpy.context.scene.name
vl = bpy.context.view_layer


def all_cols(c):
    yield c
    for ch in c.children:
        yield from all_cols(ch)


cols = {c.name: c for c in all_cols(sc.collection)}

# make sure every layer collection / object is addressable
def unhide(lc):
    lc.exclude = False
    lc.hide_viewport = False
    for ch in lc.children:
        unhide(ch)


unhide(vl.layer_collection)

WIN = [
    "00 Frame and sash", "02 Locking receiver", "03 Corner cleats", "04 Corner alignment",
    "05 Gaskets", "07 Frame and sash raiser", "09 Drainage parts - VERIFY", "10 Other fittings",
]
# showcase order = the order of the Highlights_Components collections in the file
HL = [
    ("01 Friction_Stay", "stay", "c1-stay"),
    ("02 Non return valve", "valve", "c2-valve"),
    ("03 Handles", "handle", "c3-handle"),
    ("04 Locking_Reciever", "receiver", "c4-receiver"),
    ("05 Corner_Alignment", "alignment", "c5-alignment"),
    ("06 Frame_SashRaiser", "raiser", "c6-raiser"),
    ("07Corner_Cleats", "cleats", "c7-cleats"),
    ("08 Safety_Catch", "safety", "c8-safety"),
    ("09 Gasket", "gasket", "c9-gasket"),
]

PREFIX_FAMILY = {
    "Frame and sash": "frame",
    "Locking receiver": "receiver",
    "Corner cleats": "cleats",
    "Corner alignment": "alignment",
    "Gaskets": "seal",
    "Frame and sash raiser": "raiser",
    "Handles and locks": "handle",
    "Drainage parts - VERIFY": "valve",
    "Other fittings": "misc",
}


def gl(v):
    """Blender (x,y,z) -> glTF (x,z,-y)"""
    return [round(v[0], 5), round(v[2], 5), round(-v[1], 5)]


def role_of(matname, fam):
    n = matname.lower()
    if "glass" in n:
        return "glass"
    if "frame control" in n or "sash control" in n:
        return "profile"
    if "seal" in n or "rubber" in n:
        return "rubber"
    if "wire" in n or "steel" in n:
        return "steel"
    if "worn_black" in n or "black metal" in n or "locks" in n:
        return "black"
    if "plastic" in n:
        return "plastic"
    if "powder" in n:
        return "powder"
    if "orange components" in n or "alumin" in n or "cast" in n or "matte" in n or "brushed" in n:
        return "alu"
    return "alu"


ROLE_COLOR = {
    "profile": (0.10, 0.11, 0.13), "glass": (0.80, 0.9, 0.95), "rubber": (0.02, 0.02, 0.02),
    "steel": (0.7, 0.72, 0.76), "black": (0.12, 0.13, 0.15), "plastic": (0.05, 0.05, 0.06),
    "powder": (0.2, 0.21, 0.24), "alu": (0.75, 0.77, 0.80),
}
role_mats = {}


def role_material(role):
    if role not in role_mats:
        m = bpy.data.materials.new(f"rx_{role}")
        m.use_nodes = True
        b = m.node_tree.nodes.get("Principled BSDF")
        c = ROLE_COLOR[role]
        b.inputs["Base Color"].default_value = (c[0], c[1], c[2], 1)
        b.inputs["Metallic"].default_value = 0.0 if role in ("rubber", "plastic", "glass") else 1.0
        b.inputs["Roughness"].default_value = 0.4
        role_mats[role] = m
    return role_mats[role]


def family_of(o, coll_name):
    for cn, fam, _ in HL:
        if cn == coll_name:
            return fam
    pre = o.name.split(" | ")[0]
    return PREFIX_FAMILY.get(pre, "misc")


def world_bbox(objs):
    mn = Vector((1e9,) * 3)
    mx = Vector((-1e9,) * 3)
    for o in objs:
        if o.type != "MESH":
            continue
        mw = o.matrix_world
        # real vertices (not o.bound_box, which is cached and stale after the bmesh edit below)
        for v in o.data.vertices:
            w = mw @ v.co
            for i in range(3):
                if w[i] < mn[i]:
                    mn[i] = w[i]
                if w[i] > mx[i]:
                    mx[i] = w[i]
    return mn, mx


dg = bpy.context.evaluated_depsgraph_get()


def eval_verts(o):
    if o.type != "MESH":
        return 0
    e = o.evaluated_get(dg)
    m = e.to_mesh()
    n = len(m.vertices)
    e.to_mesh_clear()
    return n


def decimate(o, cap):
    if o.type != "MESH":
        return
    n = eval_verts(o)
    if n <= cap:
        return
    mod = o.modifiers.new("web_decimate", "DECIMATE")
    mod.decimate_type = "COLLAPSE"
    mod.ratio = max(0.02, cap / n)


def retarget_materials(o, fam):
    """Replace the file's complex node materials with one simple, named role material."""
    if o.type not in ("MESH", "CURVE"):
        return
    names = [s.material.name for s in o.material_slots if s.material] or ["alu"]
    roles = [role_of(n, fam) for n in names]
    data = o.data
    data.materials.clear()
    for r in dict.fromkeys(roles):
        data.materials.append(role_material(r))


def gltf_export(objs, filename, draco=True):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.hide_set(False)
        o.hide_viewport = False
        o.select_set(True)
    vl.objects.active = objs[0]
    kw = dict(
        filepath=os.path.join(OUT, filename),
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_yup=True,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
        export_animations=False,
        export_extras=False,
        export_texcoords=False,
        export_tangents=False,
        export_vertex_color="NONE",
        export_draco_mesh_compression_enable=draco,
        export_draco_mesh_compression_level=7,
        export_draco_position_quantization=22,
        export_draco_normal_quantization=12,
    )
    bpy.ops.export_scene.gltf(**kw)
    size = os.path.getsize(os.path.join(OUT, filename))
    print(f"[export] {filename}: {len(objs)} nodes, {size/1024:.0f} KB")
    return size


# ------------------------------------------------------------------ collect
members = []  # (object, family, collection name, is_highlight_group)
for cn in WIN:
    for o in cols[cn].objects:
        members.append((o, family_of(o, cn), cn, False))
for cn, fam, _ in HL:
    for o in cols[cn].objects:
        members.append((o, fam, cn, True))

# The one gasket the notes call "the highlighted seal" is Mesh_53.005 (inside the 09 Gasket group)

# ------------------------------------------------------------------ 1) whole window
FOCUS_CAP = 1800   # parts of the nine showcase families keep a bit more detail in the window
OTHER_CAP = 500    # everything else (screws, rollers ...) is small on screen
counter = {}
frame_objs = []
for o, fam, cn, hl in members:
    if o.type not in ("MESH", "CURVE", "EMPTY"):
        continue
    if o.type != "EMPTY":
        retarget_materials(o, fam)
        if fam not in ("frame", "seal", "gasket"):
            decimate(o, FOCUS_CAP if hl or fam not in ("misc",) else OTHER_CAP)
    counter[fam] = counter.get(fam, 0) + 1
    o["_fam"] = fam
    frame_objs.append((o, fam))

# unique, readable node names. Parent empties stay empties; keep them in the family of their children.
for o, fam in frame_objs:
    i = counter.get(("n", fam), 0) + 1
    counter[("n", fam)] = i
    o.name = f"{fam}__{i:03d}"

# fix materials of curve objects (wire) – they can't take Decimate but still export
gltf_export([o for o, _ in frame_objs], "frame.glb")

# ------------------------------------------------------------------ 2) each showcase component
manifest = {"units": "metres", "up": "Y", "front": "-Z", "components": []}
fmn, fmx = world_bbox([o for o, f in frame_objs if f == "frame"])
manifest["window"] = {"min": gl(fmn), "max": gl(fmx), "center": gl((fmn + fmx) / 2)}

# Re-open the source so the component files are exported from untouched geometry
bpy.ops.wm.open_mainfile(filepath=bpy.data.filepath)
sc = bpy.data.scenes[SCENE]
if bpy.context.window_manager.windows:
    bpy.context.window_manager.windows[0].scene = sc
vl = bpy.context.view_layer
unhide(vl.layer_collection)
cols = {c.name: c for c in all_cols(sc.collection)}
dg = bpy.context.evaluated_depsgraph_get()
role_mats = {}  # datablocks from before the reload are gone

COMP_CAP = 6000
for idx, (cn, fam, fname) in enumerate(HL, start=1):
    objs = [o for o in cols[cn].objects if o.type in ("MESH", "CURVE", "EMPTY")]
    if fam == "stay":
        # the file models both the top and the bottom stay inside the same meshes; show one (bottom)
        for o in objs:
            if o.type != "MESH":
                continue
            bm = bmesh.new()
            bm.from_mesh(o.data)
            mw = o.matrix_world
            kill = [v for v in bm.verts if (mw @ v.co).z > 1.3]
            if kill:
                bmesh.ops.delete(bm, geom=kill, context="VERTS")
            bm.to_mesh(o.data)
            bm.free()
        objs = [o for o in objs if o.type != "MESH" or len(o.data.vertices) > 0]
    n_parts = 0
    for o in objs:
        retarget_materials(o, fam)
        if o.type == "MESH":
            n_parts += 1
            decimate(o, COMP_CAP)
    # --- where the component sits in the window (drives the glass reveal + camera) ---
    mn, mx = world_bbox([o for o in objs if o.type == "MESH"])
    c = (mn + mx) / 2
    ext = mx - mn
    # long, thin parts get a focus *segment* along their long axis so the glass reveal follows them
    axis = max(range(3), key=lambda i: ext[i])
    A, B = c.copy(), c.copy()
    if ext[axis] > 0.25:
        A[axis] = mn[axis] + 0.02
        B[axis] = mx[axis] - 0.02
    in_window = {"min": gl(mn), "max": gl(mx), "center": gl(c),
                 "extent": [round(ext[0], 4), round(ext[2], 4), round(ext[1], 4)]}

    # --- the gasket is a 1.73 m ribbon: show a short capped section of it in the showcase ---
    section = False
    if fam == "gasket":
        section = True
        for o in objs:
            if o.type != "MESH":
                continue
            bm = bmesh.new()
            bm.from_mesh(o.data)
            inv = o.matrix_world.inverted()
            for z, clear_inner in ((1.20, True), (1.28, False)):
                co = inv @ Vector((0, 0, z))
                no = (inv.to_3x3() @ Vector((0, 0, 1))).normalized()
                geom = bm.verts[:] + bm.edges[:] + bm.faces[:]
                r = bmesh.ops.bisect_plane(bm, geom=geom, plane_co=co, plane_no=no,
                                           clear_inner=clear_inner, clear_outer=not clear_inner)
                cut = [g for g in r["geom_cut"] if isinstance(g, bmesh.types.BMEdge) and g.is_valid]
                bmesh.ops.holes_fill(bm, edges=[e for e in cut if e.is_boundary], sides=0)
            bmesh.ops.triangulate(bm, faces=bm.faces[:])
            bm.to_mesh(o.data)
            bm.free()
        smn, smx = world_bbox([o for o in objs if o.type == "MESH"])
        sext = smx - smn
        disp = {"min": gl(smn), "max": gl(smx), "center": gl((smn + smx) / 2),
                "extent": [round(sext[0], 4), round(sext[2], 4), round(sext[1], 4)]}
    else:
        disp = in_window
    gltf_export(objs, fname + ".glb")
    manifest["components"].append({
        "id": fam, "index": idx, "file": fname + ".glb", "parts": n_parts, "section": section,
        "inWindow": in_window, "display": disp,
        "focusA": gl(A), "focusB": gl(B),
    })

with open(os.path.join(OUT, "manifest.json"), "w") as f:
    json.dump(manifest, f, indent=1)
print("[export] manifest written")
