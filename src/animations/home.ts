import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================================
   Aluminium homepage — luxury reveals.
   Elements opt in with data-hm="<section>-<part>" (see the components in src/components/home).
   Each reveal plays every time its section scrolls into view (and winds back as it scrolls away); the stacking itself
   (a docked section receding while the next slides over it) is initStack() in site.ts.
   Nothing here runs with prefers-reduced-motion; the page is fully visible without it.
   ========================================================================== */

const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = <T extends HTMLElement = HTMLElement>(sel: string, ctx: ParentNode = document) => Array.from(ctx.querySelectorAll<T>(sel));
const hm = (name: string, ctx: ParentNode = document) => $$(`[data-hm="${name}"]`, ctx);

const EASE_OUT = "expo.out";
const EASE_SOFT = "power3.out";

function reveal(trigger: HTMLElement | null, build: (tl: gsap.core.Timeline) => void, start = "top 68%", end = "bottom 12%") {
  if (!trigger) return;
  const tl = gsap.timeline({ paused: true, defaults: { ease: EASE_OUT } });
  build(tl);
  // in: play at normal speed; out: wind back quickly so the next pass starts from the hidden state
  ScrollTrigger.create({
    trigger,
    start,
    end,
    onEnter: () => tl.timeScale(1).play(),
    onLeave: () => tl.timeScale(2.6).reverse(),
    onEnterBack: () => tl.timeScale(1).play(),
    onLeaveBack: () => tl.timeScale(2.6).reverse(),
  });
}

function lines(sel: string) {
  return hm(sel);
}

function init() {
  /* ---------------- initial (hidden) states, set before anything paints ---------------- */
  gsap.set(lines("hero-line"), { yPercent: 118 });
  gsap.set(hm("hero-fade"), { opacity: 0, y: 36 });
  gsap.set(hm("hero-srk"), { opacity: 0, yPercent: 6, scale: 1.04, transformOrigin: "50% 100%" });
  gsap.set(hm("hero-bg"), { scale: 1.16 });
  gsap.set(".hh .hn", { opacity: 0, y: -18 });

  gsap.set(lines("uq-line"), { yPercent: 118 });
  gsap.set(hm("uq-card"), { opacity: 0, y: 64, scale: 0.97 });
  gsap.set(hm("uq-bg"), { scale: 1.18 });

  gsap.set(".cf__stage", { opacity: 0, x: 70, scale: 0.94 });

  gsap.set(lines("hp-line"), { yPercent: 118 });
  gsap.set(hm("hp-factory"), { clipPath: "inset(0% 0% 100% 0%)" });
  gsap.set("[data-hm='hp-factory'] img", { scale: 1.3, transformOrigin: "50% 60%" });
  gsap.set(hm("hp-bg"), { scale: 1.12 });

  // the lockup is an SVG: x / y are in its own 538 x 248 units
  gsap.set(hm("hd-21"), { opacity: 0, y: 90 });
  gsap.set(hm("hd-dash"), { opacity: 0, scaleX: 0, transformOrigin: "0% 50%" });
  gsap.set(hm("hd-day"), { opacity: 0, x: -60 });
  // DELIVERY starts spread wide around its centre and draws in (the old letter-spacing tighten)
  gsap.set(hm("hd-delivery"), { opacity: 0, x: (i: number) => (i - 3.5) * 34 });
  gsap.set(hm("hd-copy"), { opacity: 0, y: 34 });
  gsap.set(hm("hd-bg"), { scale: 1.12 });

  gsap.set(lines("hv-line"), { yPercent: 118 });
  gsap.set(hm("hv-srk"), { opacity: 0, yPercent: 9, scale: 1.03, transformOrigin: "50% 100%" });
  gsap.set(hm("hv-rail"), { opacity: 0, y: 90 });
  gsap.set(hm("hv-bg"), { scale: 1.12 });

  gsap.set(".cta-card", { opacity: 0, y: 70 });
  gsap.set(".cta__copy > *", { opacity: 0, y: 34 });

  // now let the CSS stop hiding things; gsap owns the opacity from here
  root.classList.add("hm-ready");

  /* ---------------- hero: plays on load, and again whenever you scroll back up to it ---------------- */
  const heroEl = $$<HTMLElement>(".hh")[0];
  // wait for the webfont so the masked lines measure correctly
  (document.fonts?.ready ?? Promise.resolve()).then(() =>
    requestAnimationFrame(() => {
      reveal(
        heroEl,
        (tl) => {
          tl.to(hm("hero-bg"), { scale: 1, duration: 3, ease: "power3.out" }, 0)
            .to(".hh .hn", { opacity: 1, y: 0, duration: 1.4 }, 0.3)
            .to(lines("hero-line"), { yPercent: 0, duration: 1.6, stagger: 0.14 }, 0.35)
            .to(hm("hero-fade"), { opacity: 1, y: 0, duration: 1.3, stagger: 0.16, ease: EASE_SOFT }, 1.0)
            .to(hm("hero-srk"), { opacity: 1, yPercent: 0, scale: 1, duration: 2.2, ease: EASE_SOFT }, 0.5);
        },
        "top 60%",
        "bottom 8%"
      );
    })
  );

  /* ---------------- unique solutions ---------------- */
  reveal($$<HTMLElement>(".hu")[0], (tl) => {
    tl.to(hm("uq-bg"), { scale: 1, duration: 2.6, ease: "power3.out" }, 0)
      .to(lines("uq-line"), { yPercent: 0, duration: 1.5, stagger: 0.13 }, 0.1)
      .to(hm("uq-card"), { opacity: 1, y: 0, scale: 1, duration: 1.4, stagger: 0.14, ease: EASE_SOFT }, 0.35);
  });

  /* ---------------- typologies: the 3D window glides in (the panel copy uses site.ts data-reveal) ---------------- */
  reveal($$<HTMLElement>(".cf")[0], (tl) => {
    tl.to(".cf__stage", { opacity: 1, x: 0, scale: 1, duration: 1.8, ease: EASE_SOFT }, 0.2);
  }, "top 62%");

  /* ---------------- built with precision + factory ---------------- */
  reveal($$<HTMLElement>(".hp")[0], (tl) => {
    tl.to(hm("hp-bg"), { scale: 1, duration: 2.6, ease: "power3.out" }, 0)
      .to(lines("hp-line"), { yPercent: 0, duration: 1.5, stagger: 0.14 }, 0.1)
      .to(hm("hp-factory"), { clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "expo.inOut" }, 0.55)
      .to("[data-hm='hp-factory'] img", { scale: 1, duration: 2.8, ease: "power3.out" }, 0.55);
  });

  /* ---------------- 21-day delivery ---------------- */
  reveal($$<HTMLElement>(".hd")[0], (tl) => {
    tl.to(hm("hd-bg"), { scale: 1, duration: 2.6, ease: "power3.out" }, 0)
      .to(hm("hd-21"), { opacity: 1, y: 0, duration: 1.7, stagger: 0.08 }, 0.1)
      .to(hm("hd-dash"), { opacity: 1, scaleX: 1, duration: 0.9, ease: "power3.inOut" }, 0.65)
      .to(hm("hd-day"), { opacity: 1, x: 0, duration: 1.7, stagger: 0.1 }, 0.35)
      .to(hm("hd-delivery"), { opacity: 1, x: 0, duration: 2.2, stagger: 0.05, ease: "power3.out" }, 0.6)
      .to(hm("hd-copy"), { opacity: 1, y: 0, duration: 1.3, stagger: 0.14, ease: EASE_SOFT }, 0.75);
  }, "top 62%");

  /* ---------------- built like a vault ---------------- */
  reveal($$<HTMLElement>(".hv")[0], (tl) => {
    tl.to(hm("hv-bg"), { scale: 1, duration: 2.8, ease: "power3.out" }, 0)
      .to(lines("hv-line"), { yPercent: 0, duration: 1.6, stagger: 0.16 }, 0.1)
      .to(hm("hv-srk"), { opacity: 1, yPercent: 0, scale: 1, duration: 2.2, ease: EASE_SOFT }, 0.25)
      .to(hm("hv-rail"), { opacity: 1, y: 0, duration: 1.7, ease: EASE_SOFT }, 0.7);
  });

  /* ---------------- contact ---------------- */
  reveal($$<HTMLElement>(".cta")[0], (tl) => {
    tl.to(".cta__copy > *", { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: EASE_SOFT }, 0)
      .to(".cta-card", { opacity: 1, y: 0, duration: 1.5, ease: EASE_SOFT }, 0.25);
  }, "top 72%");

  // layout is fixed-height, but fonts/images can nudge things: re-measure once everything has loaded
  addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
}

if (reduce) {
  root.classList.add("hm-ready");
} else {
  init();
  // failsafe: never leave anything hidden if something above throws
  setTimeout(() => root.classList.add("hm-ready"), 3500);
}
