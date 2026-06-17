import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionTitle
        eyebrow="Selected Work"
        title="Web projects and iOS app concepts I’ve built, designed, and iterated."
        description="A collection of live websites, front-end projects, and iOS product prototypes that reflect my growth in software development, UI/UX, and product thinking."
      />

      <div className="projects-grid">
        {profile.projects.map((project, index) => (
          <article
            className="project-card project-card-with-media"
            key={project.title}
          >
            <div className="project-media">
              <span className="project-number-badge">
                {String(index + 1).padStart(2, "0")}
              </span>

              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} />
              ) : (
                <div className="project-media-placeholder">
                  <span>{project.title}</span>
                </div>
              )}
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p className="impact">{project.impact}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  className="project-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                  <span>↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}