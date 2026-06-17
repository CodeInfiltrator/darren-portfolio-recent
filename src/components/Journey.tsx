import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Journey() {
  return (
    <section className="section container" id="journey">
      <SectionTitle
        eyebrow="Journey"
        title="A timeline of learning, creating, and showing up."
      />

      <div className="timeline">
        {profile.experience.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.title}`}>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
