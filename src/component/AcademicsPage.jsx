import React from "react";
import { Link } from "react-router-dom";

export default function AcademicsPage() {
  return (
    <main className="academics-page-shell">
      <section className="academics-page-hero">
        <div className="academics-page-hero__copy">
          <span className="academics-page-hero__eyebrow">Academic Resources</span>
          <h1 className="academics-page-hero__title">Academics</h1>
          <p className="academics-page-hero__subtitle">
            Quick access to core academic materials for the EL/EO program.
          </p>
          <div className="academics-page-hero__actions">
            <Link to="/" className="academics-page-hero__link">
              Back to home
            </Link>
            <Link to="/about" className="academics-page-hero__link">
              About the department
            </Link>
          </div>
        </div>
      </section>

      <section className="academics-page-content">
        <div className="academics-page-content__header">
          <h2 className="academics-page-content__title">Syllabus</h2>
          <p className="academics-page-content__text">
            Open the current syllabus folder directly from here.
          </p>
        </div>

        <div className="resource-badges">
          <a
            className="resource-badge"
            href="https://drive.google.com/drive/folders/1X_GLuX7iMzN35Q03IfZfCNRgfCYZimMS"
            target="_blank"
            rel="noreferrer"
          >
            <span className="badge-indicator">Syllabus</span>
            <span className="badge-value">Open syllabus folder</span>
          </a>
        </div>
      </section>
    </main>
  );
}
