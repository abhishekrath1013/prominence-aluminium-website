/* ==========================================================================
   Robus 40 — "Inside the frame" showcase.

   Source: Robus40_Website_Transparent_Components_11.blend (scene WEBSITE MASTER).
   Geometry is exported by tools/export_robus40.py into /public/models/robus40.
   Names and descriptions come from the Prominance "Engineered Heroes" brochure graphic.
   ========================================================================== */

export interface RobusComponent {
  /** matches the node family in frame.glb and the id in manifest.json */
  id: string;
  /** showcase file in /models/robus40 */
  file: string;
  name: string;
  kicker: string;
  /** one-line description, as in the brochure */
  description: string;
  /** camera on the window: region (metres) to fit on the left, plus the angle it is seen from */
  view: [number, number];
  yaw: number;
  pitch: number;
  /** roll of the part in the 3D stage (radians) so long, thin parts use the space well */
  tilt: number;
}

export const robusComponents: RobusComponent[] = [
  {
    id: "stay",
    file: "c1-stay.glb",
    name: "Easy clean friction stay",
    kicker: "Openable sash",
    description: "Smooth and effortless operation.",
    view: [0.86, 0.42],
    yaw: -0.24,
    pitch: 0.2,
    tilt: 0.16,
  },
  {
    id: "valve",
    file: "c2-valve.glb",
    name: "Ball non-return valve",
    kicker: "Drainage",
    description: "Blocks wind and insects from coming in, lets collected water flow out.",
    view: [0.36, 0.32],
    yaw: 0.5,
    pitch: 0.3,
    tilt: 0,
  },
  {
    id: "handle",
    file: "c3-handle.glb",
    name: "Handles / locks",
    kicker: "Touch point",
    description: "Robust quality security with single / multi-point locking systems.",
    view: [0.36, 0.42],
    yaw: -0.72,
    pitch: 0.16,
    tilt: 0,
  },
  {
    id: "receiver",
    file: "c4-receiver.glb",
    name: "Locking receiver",
    kicker: "Frame side",
    description: "Ensures security and peace of mind.",
    view: [0.3, 0.34],
    yaw: 0.6,
    pitch: 0.18,
    tilt: 0,
  },
  {
    id: "alignment",
    file: "c5-alignment.glb",
    name: "Corner alignment",
    kicker: "Fabrication",
    description: "Aligns frame, supports corners, boosts stability and strength.",
    view: [0.24, 0.24],
    yaw: 0.35,
    pitch: 0.2,
    tilt: 0.1,
  },
  {
    id: "raiser",
    file: "c6-raiser.glb",
    name: "Frame & sash raiser",
    kicker: "Fit",
    description: "Exact fit, stable grip to avoid overtime sagging.",
    view: [0.24, 0.22],
    yaw: -0.4,
    pitch: 0.28,
    tilt: 0,
  },
  {
    id: "cleats",
    file: "c7-cleats.glb",
    name: "Corner cleats",
    kicker: "Fabrication",
    description: "Enhances the overall durability and structural integrity.",
    view: [0.36, 0.34],
    yaw: 0.45,
    pitch: 0.22,
    tilt: 0,
  },
  {
    id: "safety",
    file: "c8-safety.glb",
    name: "Safety catch",
    kicker: "Ventilation, with a limit",
    description: "Secures the sash to prevent accidental falls if loose.",
    view: [0.34, 0.62],
    yaw: -0.5,
    pitch: 0.16,
    tilt: 0.95,
  },
  {
    id: "gasket",
    file: "c9-gasket.glb",
    name: "Gaskets",
    kicker: "Weather seal",
    description: "Seals tightly, keeping the outer environment out.",
    view: [0.7, 1.95],
    yaw: -0.5,
    pitch: 0.12,
    tilt: 0.55,
  },
];
