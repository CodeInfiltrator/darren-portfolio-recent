"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Projects",
    href: "#projects"
  },
  {
    label: "Certificates",
    mobileLabel: "Certs",
    href: "#certificates"
  },
  {
    label: "Journey",
    href: "#journey"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

export function NavBar() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFloating(window.scrollY > 48);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header ${isFloating ? "is-floating" : "is-locked"}`}
    >
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="site-nav-link">
            <span className="nav-label-desktop">{item.label}</span>
            <span className="nav-label-mobile">
              {item.mobileLabel ?? item.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}