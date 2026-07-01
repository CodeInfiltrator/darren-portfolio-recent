import { InteractiveBackground } from "@/components/InteractiveBackground";
const links = [
  {
    title: "Computer Science / iOS Developer",
    description:
      "Explore my tech portfolio, Apple Developer Academy journey, projects, skills, and product-building experience.",
    href: "/tech",
    label: "View Tech Portfolio",
    external: false
  },
  {
    title: "Modeling Portfolio",
    description:
      "Campaign, Runway, photoshoot, videoshoot, personal branding, and selected visual portfolio.",
    href: "https://www.canva.com/design/DAGZXa15-x4/Uv-gGr91Ne1gI0KZvVjZ5Q/edit?utm_content=DAGZXa15-x4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    label: "Open Modeling Portfolio",
    external: true
  },
  {
    title: "Modeling Comp-Card",
    description:
      "Model profile, measurements, selected photos, and for booking purpose.",
    href: "https://drive.google.com/file/d/14QUy_aYYcRKdvyEn0aMKQleDXfvVk_GW/view",
    label: "Open Comp-Card",
    external: true
  },
  {
    title: "Contact Me",
    description: "Contact me for more details.",
    href: "https://api.whatsapp.com/send?phone=6282127728082",
    label: "Open Whatsapp",
    external: true
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
      className="fd-logo"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="fd-logo-shape"
        d="M7 8H25.5C36 8 43 14.7 43 24C43 33.3 36 40 25.5 40H7V8Z"
      />
      <path
        className="fd-logo-cut"
        d="M17 17H25.2C30.2 17 33.6 19.7 33.6 24C33.6 28.3 30.2 31 25.2 31H17V17Z"
      />
      <path className="fd-logo-cut" d="M7 30H20.8L15.2 40H7V30Z" />
      <path className="fd-logo-cut" d="M7 8H15.2L20.8 18H7V8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="fd-whatsapp"
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

export default function Home() {
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=6282127728082";

  return (
    <>
      <main className="fd-page">
        <InteractiveBackground />
            <div className="fd-grid" />

        <section className="fd-shell">
          <div className="fd-top">
            <a className="fd-action" href="/" aria-label="Frizzia Darren">
              <FrizziaLogo />
            </a>

            <a
              className="fd-action fd-wa-action"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Frizzia Darren on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div className="fd-profile">
            <div className="fd-avatar">
              <img
                src="/images/profile.jpg?v=white-2"
                alt="Frizzia Darren profile photo"
              />
            </div>

            <p className="fd-eyebrow">Personal Website</p>

            <h1>Frizzia Darren</h1>

            <p className="fd-role">
              Software Engineer • iOS Developer • Professional Model
            </p>

            <p className="fd-description">
             A curated gateway into my work. <br></br>
             [Tech Portfolio | Modeling Portfolio | Comp-Card | Personal Support]
            </p>
          </div>

          <div className="fd-links">
            {links.map((link, index) => (
              <a
                key={link.title}
                className="fd-card"
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                style={{ animationDelay: `${0.12 + index * 0.08}s` }}
              >
                <div className="fd-card-copy">
                  <h2>{link.title}</h2>
                  <p>{link.description}</p>
                </div>

                <span>{link.label} →</span>
              </a>
            ))}
          </div>

          <div className="fd-socials">
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

      <style>{`
        .fd-page {
            min-height: 100vh;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            padding: 34px 18px;
            color: #f4f2ea;
            background:
                linear-gradient(180deg, #08090d 0%, #0d1016 45%, #08090d 100%);
            font-family:
                Inter,
                ui-sans-serif,
                system-ui,
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                sans-serif;
            isolation: isolate;
        }

        .fd-network-canvas {
            position: fixed;
            inset: 0;
            z-index: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.5;
            mix-blend-mode: screen;
        }
        .fd-page::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -4;
            background:
                linear-gradient(
                90deg,
                rgba(215, 255, 114, 0.05) 0%,
                transparent 18%,
                transparent 50%,
                rgba(143, 119, 255, 0.05) 82%,
                transparent 100%
                );
            opacity: 0.9;
            animation: fdGradientMove 16s ease-in-out infinite alternate;
            filter: blur(18px);
        }

        .fd-page::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 0%, transparent 68%);
          opacity: 0.22;
          animation: fdGridMove 18s linear infinite;
        }

        .fd-grid {
          position: absolute;
          inset: 0;
          z-index: -2;
          background: radial-gradient(circle at center, rgba(255,255,255,0.035), transparent 48%);
          animation: fdPulse 7s ease-in-out infinite;
          pointer-events: none;
        }

        .fd-shell {
        width: min(760px, 100%);
        position: relative;
        z-index: 2;
        }

        .fd-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 34px;
          animation: fdFadeDown 0.8s ease both;
        }

        .fd-action {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 22px;
          color: #f4f2ea;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(20px);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
          transition:
            transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 320ms ease,
            background 320ms ease,
            box-shadow 320ms ease;
        }

        .fd-action:hover {
          transform: translateY(-5px) scale(1.04);
          border-color: rgba(215, 255, 114, 0.54);
          background: rgba(215, 255, 114, 0.08);
          box-shadow:
            0 0 0 8px rgba(215, 255, 114, 0.035),
            0 22px 58px rgba(0, 0, 0, 0.36);
        }

        .fd-logo {
          width: 34px;
          height: 34px;
          display: block;
          color: #d7ff72;
          filter: drop-shadow(0 0 14px rgba(215, 255, 114, 0.26));
          transition: transform 320ms ease;
        }

        .fd-action:hover .fd-logo {
          transform: rotate(-4deg) scale(1.05);
        }

        .fd-logo-shape {
          fill: currentColor;
        }

        .fd-logo-cut {
          fill: #08090d;
        }

        .fd-whatsapp {
          width: 32px;
          height: 32px;
          display: block;
          color: #f4f2ea;
          transition:
            color 260ms ease,
            transform 320ms ease;
        }

        .fd-wa-action:hover .fd-whatsapp {
          color: #d7ff72;
          transform: scale(1.08);
        }

        .fd-profile {
          margin-bottom: 34px;
          text-align: center;
          animation: fdFadeUp 0.9s ease 0.08s both;
        }

        .fd-avatar {
          width: 138px;
          height: 138px;
          margin: 0 auto 22px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.07);
          box-shadow:
            0 0 0 8px rgba(255, 255, 255, 0.025),
            0 24px 90px rgba(0, 0, 0, 0.35);
          animation: fdAvatarFloat 5.5s ease-in-out infinite;
        }

        .fd-avatar img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 34%;
          transform: scale(1.35);
          transition: transform 700ms ease, filter 700ms ease;
        }

        .fd-avatar:hover img {
          transform: scale(1.45);
          filter: contrast(1.05) brightness(1.04);
        }

        .fd-eyebrow {
          margin: 0 0 10px;
          color: #d7ff72;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .fd-profile h1 {
          margin: 0 0 10px;
          font-size: clamp(2.4rem, 7vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.07em;
        }

        .fd-role {
          margin: 0 0 14px;
          color: #f4f2ea;
          font-size: clamp(1rem, 2.6vw, 1.25rem);
          font-weight: 850;
        }

        .fd-description {
          max-width: 560px;
          margin: 0 auto;
          color: #b7b2a7;
          line-height: 1.75;
        }

        .fd-links {
          display: grid;
          gap: 16px;
        }

        .fd-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          color: #f4f2ea;
          text-decoration: none;
          background:
            radial-gradient(circle at 92% 50%, rgba(215, 255, 114, 0), transparent 34%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.078), rgba(255, 255, 255, 0.026)),
            rgba(255, 255, 255, 0.045);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(24px);
          opacity: 0;
          transform: translateY(18px);
          animation: fdCardIn 0.7s ease both;
          transition:
            transform 360ms cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 320ms ease,
            background 320ms ease,
            box-shadow 320ms ease;
        }

        .fd-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(circle at var(--x, 85%) var(--y, 50%), rgba(215, 255, 114, 0.18), transparent 32%),
            linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          opacity: 0;
          transition: opacity 320ms ease;
        }

        .fd-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.12),
            transparent
          );
          transform: skewX(-18deg);
          transition: left 700ms ease;
        }

        .fd-card:hover {
          transform: translateY(-6px) scale(1.012);
          border-color: rgba(215, 255, 114, 0.5);
          background:
            radial-gradient(circle at 88% 50%, rgba(215, 255, 114, 0.13), transparent 36%),
            linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03)),
            rgba(255,255,255,0.055);
          box-shadow:
            0 0 0 1px rgba(215, 255, 114, 0.06),
            0 24px 80px rgba(0, 0, 0, 0.38);
        }

        .fd-card:hover::before {
          opacity: 1;
        }

        .fd-card:hover::after {
          left: 140%;
        }

        .fd-card h2 {
          position: relative;
          z-index: 2;
          margin: 0 0 8px;
          font-size: 1.25rem;
          letter-spacing: -0.035em;
        }

        .fd-card p {
          position: relative;
          z-index: 2;
          max-width: 500px;
          margin: 0;
          color: #b7b2a7;
          line-height: 1.65;
        }

        .fd-card span {
          position: relative;
          z-index: 2;
          flex: 0 0 auto;
          color: #d7ff72;
          font-size: 0.92rem;
          font-weight: 900;
          transition: transform 280ms ease;
        }

        .fd-card:hover span {
          transform: translateX(5px);
        }

        .fd-socials {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
          animation: fdFadeUp 0.8s ease 0.46s both;
        }

        .fd-socials a {
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          color: #b7b2a7;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.035);
          font-size: 0.9rem;
          font-weight: 800;
          transition:
            transform 220ms ease,
            color 220ms ease,
            border-color 220ms ease,
            background 220ms ease;
        }

        .fd-socials a:hover {
          transform: translateY(-3px);
          color: #f4f2ea;
          border-color: rgba(215, 255, 114, 0.45);
          background: rgba(215, 255, 114, 0.06);
        }

        @keyframes fdGradientMove {
          0% {
            transform: translate3d(-2%, -2%, 0) scale(1);
          }
          50% {
            transform: translate3d(2%, 3%, 0) scale(1.04);
          }
          100% {
            transform: translate3d(4%, -1%, 0) scale(1.02);
          }
        }

        @keyframes fdGridMove {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 56px 56px;
          }
        }

        @keyframes fdFloatOne {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(30px, 24px, 0) scale(1.08);
          }
        }

        @keyframes fdFloatTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-34px, -20px, 0) scale(1.06);
          }
        }

        @keyframes fdPulse {
          0%, 100% {
            opacity: 0.18;
          }
          50% {
            opacity: 0.34;
          }
        }

        @keyframes fdFadeDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fdFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fdCardIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fdAvatarFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 640px) {
          .fd-page {
            padding: 22px 14px;
          }

          .fd-top {
            margin-bottom: 28px;
          }

          .fd-action {
            width: 52px;
            height: 52px;
            border-radius: 19px;
          }

          .fd-logo {
            width: 31px;
            height: 31px;
          }

          .fd-whatsapp {
            width: 29px;
            height: 29px;
          }

          .fd-avatar {
            width: 118px;
            height: 118px;
          }

          .fd-card {
            align-items: flex-start;
            flex-direction: column;
            padding: 22px;
            border-radius: 24px;
          }

          .fd-card span {
            margin-top: 2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-page::before,
          .fd-page::after,
          .fd-orb,
          .fd-grid,
          .fd-profile,
          .fd-top,
          .fd-card,
          .fd-avatar,
          .fd-socials {
            animation: none;
          }

          .fd-action,
          .fd-card,
          .fd-socials a,
          .fd-avatar img {
            transition: none;
          }
        }

        @media (max-width: 640px) {
  .fd-page {
    padding: 22px 14px;
  }

  .fd-top {
    margin-bottom: 28px;
  }

  .fd-action {
    width: 52px;
    height: 52px;
    border-radius: 19px;
  }

  .fd-logo {
    width: 31px;
    height: 31px;
  }

  .fd-whatsapp {
    width: 29px;
    height: 29px;
  }

  .fd-avatar {
    width: 118px;
    height: 118px;
  }

  .fd-card {
    align-items: flex-start;
    flex-direction: column;
    padding: 22px;
    border-radius: 24px;
  }

  .fd-card span {
    margin-top: 2px;
  }
}
      `}</style>
    </>
  );
}