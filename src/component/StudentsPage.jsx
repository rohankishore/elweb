import React from "react";
import { Link } from "react-router-dom";

export default function StudentsPage() {
  return (
    <main className="notices-page-shell">
      <section className="notices-page-hero">
        <div className="notices-page-hero__copy">
          <h1 className="notices-page-hero__title">Students Corner</h1>
          <p className="notices-page-hero__subtitle">
            Welcome to the EL Family! This isn't just a list of names. It's a directory of the next generation of engineers who refuse to be boxed into just one discipline.
          </p>
          <div className="resource-badges" style={{ marginTop: "2.5rem", display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/assets/docs/students.pdf" className="resource-badge" target="_blank" rel="noopener noreferrer" download>
              <span className="badge-indicator">2024 & 25 Batch</span>
              <span className="badge-value">STUDENT LIST</span>
            </a>
          </div>
        </div>
      </section>

      <section className="notices-page-content" id="achievements">
        <div className="notices-page-content__header">
          <div>
            <h2 className="notices-page-content__title">Achievements</h2>
          </div>
        </div>
        <div className="notices-page-list achievements-list" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Achievements cards with placeholder images */}
          <article className="achievement-card notice-panel" style={{ width: '340px', minHeight: '420px', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px #0002' }}>
            <img src="https://placehold.co/340x180/png" alt="Hackathons & Competitions" style={{ width: '100%', borderRadius: '12px 12px 0 0', objectFit: 'cover' }} />
            <div className="notice-panel__body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="notice-panel__chip notice-panel__chip--pinned" style={{ margin: '1rem 0', background: '#b16e7c22', color: '#e7bfc7' }}>COMING SOON</span>
                <h3 className="notice-panel__title">Hackathons & Competitions</h3>
                <p className="notice-panel__desc">Contest wins, inter-college fests, and technical challenge victories from our students.</p>
              </div>
            </div>
          </article>
          <article className="achievement-card notice-panel" style={{ width: '340px', minHeight: '420px', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px #0002' }}>
            <img src="https://placehold.co/340x180/png" alt="Open Source & Projects" style={{ width: '100%', borderRadius: '12px 12px 0 0', objectFit: 'cover' }} />
            <div className="notice-panel__body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="notice-panel__chip notice-panel__chip--pinned" style={{ margin: '1rem 0', background: '#b16e7c22', color: '#e7bfc7' }}>COMING SOON</span>
                <h3 className="notice-panel__title">Open Source & Projects</h3>
                <p className="notice-panel__desc">Open source contributions, research papers, and independent projects built by EL students.</p>
              </div>
            </div>
          </article>
          <article className="achievement-card notice-panel" style={{ width: '340px', minHeight: '420px', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px #0002' }}>
            <img src="https://placehold.co/340x180/png" alt="Portfolios & Recognitions" style={{ width: '100%', borderRadius: '12px 12px 0 0', objectFit: 'cover' }} />
            <div className="notice-panel__body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="notice-panel__chip notice-panel__chip--pinned" style={{ margin: '1rem 0', background: '#b16e7c22', color: '#e7bfc7' }}>COMING SOON</span>
                <h3 className="notice-panel__title">Portfolios & Recognitions</h3>
                <p className="notice-panel__desc">Student portfolios, internship milestones, certifications, and notable recognitions.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
