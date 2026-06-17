"use client";

import { useEffect } from "react";

export function CinematicTechScroll() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".tech-page > .hero, .tech-page > .section, .tech-page > .contact-section"
      )
    );

    sections.forEach((section) => {
      section.classList.add("cinematic-section");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            section.classList.add("is-cinematic-visible");
          }

          section.classList.toggle(
            "is-cinematic-active",
            entry.isIntersecting && entry.intersectionRatio >= 0.35
          );
        });
      },
      {
        threshold: [0.15, 0.35],
        rootMargin: "-8% 0px -8% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}