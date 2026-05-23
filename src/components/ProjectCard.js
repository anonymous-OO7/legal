import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>Manage legal pages for this project.</p>

      <div className="card-actions">
        <Link to={`/${project.slug}/privacy-policy`}>Privacy Policy</Link>
        <Link to={`/${project.slug}/terms-and-conditions`}>
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
