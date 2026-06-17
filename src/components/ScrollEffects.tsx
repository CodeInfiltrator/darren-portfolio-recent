"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const selectors = [
      ".hero-copy",
      ".hero-card",
      ".section-title",
      ".glass-panel",
      ".stat-card",
      ".skill-card",
      ".project-card",
      ".timeline-item",
      ".modeling-panel",
      ".contact-section"
    ].join(",");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 350)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      document.documentElement.style.setProperty(
        "--tech-scroll-progress",
        progress.toString()
      );
    };

    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, {
      passive: true
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return null;
}