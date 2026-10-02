import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aMarkUrl from "../assets/media/prominance-a-mark.png";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isFinePointer = window.matchMedia("(pointer: fine)").matches;

/* ---------------------------------------------------------------------- */
/* Smooth scroll (Lenis) synced to the GSAP ticker                         */
/* ---------------------------------------------------------------------- */
if (!reduceMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}

/* ---------------------------------------------------------------------- */
/* Scroll reveal: [data-reveal] fades + rises into place once per element  */
/* ---------------------------------------------------------------------- */
const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");

revealEls.forEach((el) => {
  const group = el.closest<HTMLElement>("[data-reveal-group]");
  const siblings = group ? Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]")) : [el];
  const index = siblings.indexOf(el);

  if (reduceMotion) {
    el.style.opacity = "1";
    el.style.transform = "none";
    return;
  }

  const distance = el.dataset.reveal === "fade" ? 0 : 28;

  gsap.set(el, { opacity: 0, y: distance });

  ScrollTrigger.create({
    trigger: group ?? el,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay: index * 0.08,
        ease: "power3.out",
      });
    },
  });
});

/* ---------------------------------------------------------------------- */
/* Numeric counters: [data-counter="1500"] [data-counter-suffix="+"]       */
/* ---------------------------------------------------------------------- */
document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
  const raw = el.dataset.counter ?? "0";
  const numeric = parseFloat(raw);
  if (Number.isNaN(numeric)) return;

  const format = (n: number) => (n >= 1000 ? Math.round(n).toLocaleString("en-IN") : String(Math.round(n)));

  if (reduceMotion) {
    el.textContent = format(numeric);
    return;
  }

  const counter = { value: 0 };
  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        value: numeric,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.value);
        },
      });
    },
  });
});

/* ---------------------------------------------------------------------- */
/* Thin line draw: [data-line-draw] scales a rule in from 0 to full width  */
/* ---------------------------------------------------------------------- */
document.querySelectorAll<HTMLElement>("[data-line-draw]").forEach((el) => {
  if (reduceMotion) {
    el.style.transform = "scaleX(1)";
    return;
  }
  gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    once: true,
    onEnter: () => gsap.to(el, { scaleX: 1, duration: 1.1, ease: "power3.inOut" }),
  });
});

/* ---------------------------------------------------------------------- */
/* Subtle custom cursor — desktop fine-pointer only                        */
/* ---------------------------------------------------------------------- */
if (!reduceMotion && isFinePointer) {
  document.documentElement.classList.add("uf-custom-cursor");

  const cursor = document.createElement("div");
  cursor.className = "uf-cursor";
  cursor.style.backgroundImage = `url(${aMarkUrl.src})`;
  document.body.appendChild(cursor);

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { x: pos.x, y: pos.y };

  window.addEventListener("mousemove", (e) => {
    target.x = e.clientX;
    target.y = e.clientY;
    cursor.classList.add("is-visible");
  });

  gsap.ticker.add(() => {
    pos.x += (target.x - pos.x) * 0.18;
    pos.y += (target.y - pos.y) * 0.18;
    cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
  });

  document.querySelectorAll<HTMLElement>("[data-cursor-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
  });

  document.addEventListener("mouseleave", () => cursor.classList.remove("is-visible"));
}

/* ---------------------------------------------------------------------- */
/* Page-load reveal: fade the whole document in once fonts/paint settle    */
/* ---------------------------------------------------------------------- */
document.documentElement.classList.add("uf-loaded");
