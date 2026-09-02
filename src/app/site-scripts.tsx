"use client";

import { useEffect } from "react";

const SITE = "/specia1ne-site";
const V = "?v=2026-07-06-2";

// Feature scripts (menu reveal, overlay, contact form, button motion, hero
// clock) followed by the GSAP motion entry (loads ScrollTrigger + the pinned
// section modules). Appended after mount, preserving the build's load order.
const FEATURE = [
  `${SITE}/scripts/reveal.js${V}`,
  `${SITE}/scripts/site-overlay.js${V}`,
  `${SITE}/scripts/contact-form.js${V}`,
  `${SITE}/scripts/site-buttons.js${V}`,
  `${SITE}/scripts/hero-time.js${V}`,
];
const MOTION_ENTRY = `${SITE}/_astro/index.astro_astro_type_script_index_0_lang.D5YMcC6f.js`;

export function SiteScripts() {
  useEffect(() => {
    // These are classic scripts that declare top-level consts; loading them
    // twice (StrictMode remount, client nav) throws "already declared". Guard
    // so they run exactly once per document, and never remove them.
    const w = window as unknown as { __specia1neScriptsLoaded?: boolean };
    if (w.__specia1neScriptsLoaded) return;
    w.__specia1neScriptsLoaded = true;

    const add = (src: string, module = false) => {
      const s = document.createElement("script");
      s.src = src;
      if (module) s.type = "module";
      s.async = false; // keep append order
      document.body.appendChild(s);
    };
    for (const src of FEATURE) add(src);
    add(MOTION_ENTRY, true);
  }, []);

  // Reluctant scroll into the footer reveal: past the content end, wheel input
  // is damped (ported from the previous web).
  useEffect(() => {
    const RESIST = 0.22;
    const onWheel = (e: WheelEvent) => {
      const footer = document.querySelector<HTMLElement>(".mega-footer");
      if (!footer || e.deltaY <= 0) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const boundary = maxScroll - footer.offsetHeight;
      if (window.scrollY >= boundary - 2) {
        e.preventDefault();
        window.scrollBy(0, e.deltaY * RESIST);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return null;
}
