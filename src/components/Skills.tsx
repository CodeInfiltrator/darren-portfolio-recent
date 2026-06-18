import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  const groups = [
    {
      title: "Engineering",
      description:
        "Building clean, responsive, and structured digital products across web and iOS development.",
      items: profile.skills.engineering
    },
    {
      title: "Product & Design",
      description:
        "Turning user needs into clear flows, prototypes, and product decisions through research and design thinking.",
      items: profile.skills.product
    },
    {
      title: "Workflow & Creative",
      description:
        "Combining development tools, visual communication, and personal branding to present ideas with stronger clarity.",
      items: profile.skills.creative
    }
  ];

  return (
    <section className="section container compact-section">
      <SectionTitle
        eyebrow="Capabilities"
        title="Technical depth with product execution."
        description="A focused mix of engineering, product thinking, and creative range shaped through real projects, academic work, and Apple Developer Academy challenges."
      />

      <div className="capabilities-grid">
        {groups.map((group) => (
          <article className="capability-card" key={group.title}>
            <div className="capability-content">
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="capability-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}