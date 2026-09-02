"use client";

import { useEffect } from "react";

// Reluctant scroll into the reveal footer: past the content end, wheel input
// is damped (matches the home page).
export function FooterResistance() {
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
