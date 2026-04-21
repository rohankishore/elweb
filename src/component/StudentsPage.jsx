import React from "react";
import { Link } from "react-router-dom";

export default function StudentsPage() {
  return (
    <main className="notices-page-shell">
      <section className="notices-page-hero">
        <div className="notices-page-hero__copy">
          <h1 className="notices-page-hero__title">Students Corner</h1>
          <p className="notices-page-hero__subtitle">
            Details about all the students and their achievements. Data will be updated here soon.
          </p>
          <div className="resource-badges" style={{ marginTop: "2.5rem", display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <p className="notices-page-hero__subtitle">
              Welcome to the EL Family! 
            </p>
            <Link to="#" className="resource-badge">
              <span className="badge-indicator">2024 & 25 Batch</span>
              <span className="badge-value">STUDENT LIST</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="notices-page-content" id="achievements">
        <div className="notices-page-content__header">
          <div>
            <h2 className="notices-page-content__title">Achievements</h2>
          </div>
        </div>
        <div className="notices-page-list">
          {/* Achievements map will go here */}
          <article className="notice-panel">
            <div className="notice-panel__meta">
              <span className="notice-panel__index">--</span>
              <div className="notice-panel__chips">
                <span className="notice-panel__chip notice-panel__chip--pinned">Coming Soon</span>
              </div>
              <span className="notice-panel__audience">All Batches</span>
            </div>
            <div className="notice-panel__body">
              <div className="notice-panel__date">Update pending</div>
              <h3 className="notice-panel__title">Student Achievements and Portfolios</h3>
              <p className="notice-panel__desc">We are actively compiling the achievements, hackathon wins, and open-source contributions of our students. This section will be updated soon with their remarkable works.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
