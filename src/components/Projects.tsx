import { profile } from "@/data/profile";
import { SectionTitle } from "./SectionTitle";

type Project = (typeof profile.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const liveUrl = project.liveUrl;

  const cardInner = (
    <div className="project-loop-media">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="project-loop-placeholder">
          <span>{project.title}</span>
        </div>
      )}

      <div className="project-loop-gradient" />

      <div className="project-loop-action">
        <span>{liveUrl ? "View Project ↗" : "iOS Apps Preview"}</span>
      </div>
    </div>
  );

  if (liveUrl) {
    return (
      <a
        className="project-loop-card"
        href={liveUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title}`}
      >
        {cardInner}
      </a>
    );
  }

  return <article className="project-loop-card">{cardInner}</article>;
}

export function Projects() {
  const repeatedProjects = Array.from({ length: 3 }).flatMap(
    () => profile.projects
  );

  return (
    <section className="section project-loop-section" id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects shaped through code, design, and product thinking."
          description="A clean showcase of selected web and iOS projects built through real development, design exploration, and product thinking."
        />
      </div>

      <div className="project-loop-shell">
        <div className="project-loop-track">
          <div className="project-loop-group">
            {repeatedProjects.map((project, index) => (
              <ProjectCard
                key={`project-loop-a-${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>

          <div className="project-loop-group" aria-hidden="true">
            {repeatedProjects.map((project, index) => (
              <ProjectCard
                key={`project-loop-b-${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}