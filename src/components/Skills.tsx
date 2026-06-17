import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  const groups = [
    { title: "Engineering", items: profile.skills.engineering },
    { title: "Product & Design", items: profile.skills.product },
    { title: "Creative", items: profile.skills.creative }
  ];

  return (
    <section className="section container compact-section">
      <SectionTitle
        eyebrow="Capabilities"
        title="Technical depth with product and creative range."
      />

      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
