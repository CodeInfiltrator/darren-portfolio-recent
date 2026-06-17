import { profile } from "@/data/profile";
import { Logo } from "./Logo";

const navItems = ["About", "Projects", "Journey", "Contact"];

export function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.shortName} homepage`}
        >
          <Logo />
        </a>

        <div className="nav-links" aria-label="Page sections">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}