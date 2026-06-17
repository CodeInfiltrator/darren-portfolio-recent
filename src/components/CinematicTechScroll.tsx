"use client";

import { useEffect } from "react";

export function CinematicTechScroll() {
  useEffect(() => {
    const sectionSelector =
      ".tech-page > .hero, .tech-page > .section, .tech-page > .contact-section";

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(sectionSelector)
    );

    sections.forEach((section, index) => {
      section.classList.add("cinematic-section");
      section.style.setProperty("--section-index", String(index));
    });

    let ticking = false;

    const update = () => {
      const viewportHeight = window.innerHeight;
      let activeIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        const focus = Math.max(
          0,
          Math.min(1, 1 - distance / (viewportHeight * 0.85))
        );

        const opacity = 0.72 + focus * 0.28;
        const y = (1 - focus) * 34;
        const scale = 0.975 + focus * 0.025;
        const glow = focus * 1;

        section.style.setProperty("--cinema-opacity", opacity.toFixed(3));
        section.style.setProperty("--cinema-y", `${y.toFixed(2)}px`);
        section.style.setProperty("--cinema-scale", scale.toFixed(3));
        section.style.setProperty("--cinema-glow", glow.toFixed(3));

        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }

        if (focus > 0.22) {
          section.classList.add("is-cinematic-visible");
        } else {
          section.classList.remove("is-cinematic-visible");
        }
      });

      sections.forEach((section, index) => {
        section.classList.toggle("is-cinematic-active", index === activeIndex);
      });

      document.documentElement.style.setProperty(
        "--active-tech-section",
        String(activeIndex)
      );

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}