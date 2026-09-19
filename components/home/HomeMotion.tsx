"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".reference-home .ref-section, .reference-home .ref-stats, .reference-home .ref-promo"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add("section-visible"));
      return;
    }

    sections.forEach((section) => section.classList.add("section-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
