import React from "react";
import { Link } from "react-router-dom";

function LegalLayout({ title, content, projectName, projectSlug }) {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="top-bar">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <span className="project-badge">{projectName}</span>
        </div>

        <h1 className="legal-title">{title}</h1>

        <div className="legal-card">
          <div className="legal-text">{content}</div>
        </div>

        <div className="bottom-links">
          <Link to={`/${projectSlug}/privacy-policy`}>Privacy Policy</Link>
          <Link to={`/${projectSlug}/terms-and-conditions`}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LegalLayout;
