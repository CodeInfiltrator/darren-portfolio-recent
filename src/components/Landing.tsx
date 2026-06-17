import { profile } from "@/data/profile";

const whatsappUrl =
  "https://wa.me/6282127728082?text=Hi%20Frizzia%2C%20I%20want%20to%20collaborate%20with%20you.";

const links = [
  {
    title: "Computer Science / iOS Developer",
    description:
      "Explore my tech portfolio, Apple Developer Academy journey, projects, skills, and product-building experience.",
    href: "/tech",
    label: "View Tech Portfolio",
    type: "internal"
  },
  {
    title: "Modeling Portfolio",
    description:
      "Runway, photoshoot, personal branding, and selected visual portfolio.",
    href: "https://www.canva.com/design/DAGZXa15-x4/Uv-gGr91Ne1gI0KZvVjZ5Q/edit?utm_content=DAGZXa15-x4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    label: "Open Modeling Portfolio",
    type: "external"
  },
  {
    title: "Comp-Card",
    description:
      "Model profile, measurements, selected photos, and booking reference.",
    href: "https://drive.google.com/file/d/1e_eDRfXAEJUuEp5JQVizPt-e7YRQhXVI/view",
    label: "Open Comp-Card",
    type: "external"
  },
  {
    title: "Support / Saweria",
    description: "Support my journey in tech, modeling, and personal growth.",
    href: "https://saweria.co/frizziadarren",
    label: "Open Saweria",
    type: "external"
  }
];

const quickLinks = [
  { label: "Instagram", href: "https://instagram.com/frizzia_darren" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frizziadarren/" },
  { label: "GitHub", href: "https://github.com/CodeInfiltrator" },
  { label: "Email", href: "mailto:efdarrens@gmail.com" }
];

function FrizziaLogo() {
  return (
    <svg
      className="landing-logo"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="landing-logo-shape"
        d="M7 8H25.5C36 8 43 14.7 43 24C43 33.3 36 40 25.5 40H7V8Z"
      />
      <path
        className="landing-logo-cut"
        d="M17 17H25.2C30.2 17 33.6 19.7 33.6 24C33.6 28.3 30.2 31 25.2 31H17V17Z"
      />
      <path className="landing-logo-cut" d="M7 30H20.8L15.2 40H7V30Z" />
      <path className="landing-logo-cut" d="M7 8H15.2L20.8 18H7V8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="landing-whatsapp-icon"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M16.04 3C8.88 3 3.05 8.74 3.05 15.8c0 2.36.66 4.58 1.82 6.48L3 29l6.95-1.8A13.12 13.12 0 0 0 16.04 28C23.2 28 29 22.26 29 15.2C29 8.74 23.2 3 16.04 3Zm0 22.7c-2.02 0-3.9-.58-5.5-1.58l-.4-.24l-4.12 1.06l1.1-3.98l-.26-.42a10.2 10.2 0 0 1-1.55-5.4c0-5.68 4.82-10.3 10.73-10.3c5.9 0 10.7 4.62 10.7 10.3c0 5.92-4.8 10.56-10.7 10.56Zm5.88-7.72c-.32-.16-1.9-.92-2.2-1.02c-.3-.1-.52-.16-.74.16c-.22.32-.85 1.02-1.04 1.24c-.2.22-.38.24-.7.08c-.32-.16-1.36-.49-2.58-1.56c-.96-.84-1.6-1.88-1.78-2.2c-.18-.32-.02-.5.14-.66c.14-.14.32-.38.48-.56c.16-.2.22-.32.32-.54c.1-.22.05-.4-.03-.56c-.08-.16-.74-1.76-1.02-2.42c-.27-.64-.54-.55-.74-.56h-.64c-.22 0-.56.08-.86.4c-.3.32-1.12 1.08-1.12 2.64c0 1.56 1.15 3.06 1.32 3.28c.16.22 2.27 3.42 5.5 4.8c.77.33 1.36.52 1.83.67c.77.24 1.47.2 2.02.12c.62-.1 1.9-.76 2.17-1.5c.27-.74.27-1.38.19-1.5c-.08-.14-.3-.22-.62-.38Z"
      />
    </svg>
  );
}

export function Landing() {
  return (
    <main className="landing-page">
      <section className="landing-shell">
        <div className="landing-top">
          <a className="landing-action" href="/" aria-label="Frizzia Darren">
            <FrizziaLogo />
          </a>

          <a
            className="landing-action landing-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact Frizzia Darren on WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>

        <div className="landing-profile">
          <div className="landing-avatar">
            <img
              src="/images/profile.jpg?v=white-2"
              alt="Frizzia Darren profile photo"
            />
          </div>

          <p className="landing-eyebrow">Personal Hub</p>

          <h1>{profile.name}</h1>

          <p className="landing-role">
            Computer Science Student • iOS Developer • Model
          </p>

          <p className="landing-description">
            Choose where you want to know me from — tech portfolio, modeling
            portfolio, comp-card, or personal support.
          </p>
        </div>

        <div className="landing-links">
          {links.map((link) => (
            <a
              key={link.title}
              className="landing-card"
              href={link.href}
              target={link.type === "external" ? "_blank" : undefined}
              rel={link.type === "external" ? "noreferrer" : undefined}
            >
              <div>
                <h2>{link.title}</h2>
                <p>{link.description}</p>
              </div>

              <span>{link.label} →</span>
            </a>
          ))}
        </div>

        <div className="landing-socials">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}