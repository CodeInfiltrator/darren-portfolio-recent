import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section className="section container" id="about">
      <SectionTitle
        eyebrow="About"
        title="Building digital products through code, research, and product thinking."
        description="This portfolio highlights my journey as a Computer Science student and Apple Developer Academy learner, focused on iOS development, front-end engineering, and human-centered product building."
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
