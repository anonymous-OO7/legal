import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
  const projectList = Object.values(projects);

  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Legal Documents Dashboard</h1>
        <p>Select a project to view its legal pages.</p>

        <div className="project-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
