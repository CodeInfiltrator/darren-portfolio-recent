import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section className="section container" id="about">
      <SectionTitle
        eyebrow="About"
        title="Building user-centered digital products."
        description="Exploring iOS development, front-end and back-end engineering, Product and Project Management through real projects."
      />

      <div className="about-grid">
        <div className="glass-panel">
          <h3>What I am building</h3>
          <div className="highlight-list">
            {profile.highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="stats-grid">
          {profile.stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
