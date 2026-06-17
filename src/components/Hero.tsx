import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="eyebrow hero-animate hero-delay-1">{profile.status}</p>

        <h1 className="hero-animate hero-delay-2">{profile.name}</h1>

        <p className="hero-role hero-animate hero-delay-3">{profile.role}</p>

        <p className="hero-tagline hero-animate hero-delay-4">
          {profile.tagline}
        </p>

        <div className="hero-actions hero-animate hero-delay-5">
          <a className="button primary magnetic-button" href="#projects">
            View Projects
          </a>

          <a
            className="button secondary magnetic-button"
            href={`mailto:${profile.email}`}
          >
            Contact Me
          </a>
        </div>
      </div>

      <aside
        className="hero-card hero-card-animate tech-profile-card"
        aria-label="Profile summary card"
      >
        <div className="tech-card-glow" />

        <div className="tech-card-top">
          <span className="tech-status">
            <span />
            Available for Tech Collaboration
          </span>

          <span className="tech-code">Friz</span>
        </div>

        <div className="portrait tech-portrait">
          <div className="hud-corner corner-tl" />
          <div className="hud-corner corner-tr" />
          <div className="hud-corner corner-bl" />
          <div className="hud-corner corner-br" />

          <div className="scan-line" />
          <div className="tech-grid-overlay" />

          <img
            src="/images/profile.jpg?v=white-2"
            alt="Frizzia Darren profile photo"
            className="profile-image tech-profile-image"
          />
        </div>

        <div className="tech-card-content">
          <div>
            <p className="card-label">Based in</p>
            <h2>{profile.location}</h2>
          </div>
        </div>
      </aside>
    </section>
  );
}