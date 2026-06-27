"use client";

import { useEffect, useState } from "react";

/**
 * Reports whether the device is a "fine pointer" desktop and whether the user
 * prefers reduced motion. All hover/pointer/WebGL enhancements gate on this so
 * touch + reduced-motion users always get the calm, fully-usable base site.
 */
export function useIsDesktop() {
  const [state, setState] = useState({ desktop: false, reduced: false });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () =>
      setState({ desktop: fine.matches, reduced: motion.matches });
    sync();
    fine.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return state;
}
