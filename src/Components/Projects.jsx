import ProjectCard from './ProjectCard';
import projectData from './ProjectData';

function Projects() {
  return (
    <>
      <section id="projects" className="projects">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default Projects