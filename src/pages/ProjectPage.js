import React from "react";
import { useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import LegalLayout from "../components/LegalLayout";

function ProjectPage() {
  const { projectSlug, pageType } = useParams();
  const project = projects[projectSlug];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  let title = "";
  let content = "";

  if (pageType === "privacy-policy") {
    title = `${project.name} Privacy Policy`;
    content = project.privacyPolicy;
  } else if (pageType === "terms-and-conditions") {
    title = `${project.name} Terms & Conditions`;
    content = project.terms;
  } else {
    return <Navigate to="/" replace />;
  }

  return (
    <LegalLayout
      title={title}
      content={content}
      projectName={project.name}
      projectSlug={project.slug}
    />
  );
}

export default ProjectPage;
