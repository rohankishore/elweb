import React from "react";
import { Link } from "react-router-dom";

const notices = [
  {
    pinned: true,
    type: "Time Table",
    audience: "KTU semester update",
    title: "Semester Exam Time Table for S2 & S4",
    date: "April 12, 2026",
    desc: "KTU semester exam timetables for EL S2 and S4 batches have been released.",
  },
  {
    pinned: true,
    type: "Results",
    audience: "First semester highlights",
    title: "S1 Toppers of EL",
    date: "April 12, 2026",
    desc: "Meet the toppers for the first semester of the 2025 EL batch and celebrate the consistency, focus, and academic excellence across the program.",
  },
];

const pinnedCount = notices.filter((notice) => notice.pinned).length;

export default function NoticesPage() {
  return (
    <main className="notices-page-shell">
      <section className="notices-page-hero">
        <div className="notices-page-hero__copy">
          <span className="notices-page-hero__eyebrow">Department Bulletin</span>
          <h1 className="notices-page-hero__title">Latest Notices</h1>
          <p className="notices-page-hero__subtitle">
            Important announcements, academic updates, and department highlights for the EL/EO
            community, all in one place.
          </p>
          <div className="notices-page-hero__actions">
            <a href="#notice-feed" className="notices-page-hero__cta">
              Browse notices
            </a>
            <Link to="/" className="notices-page-hero__link">
              Back to home
            </Link>
          </div>
        </div>

        <div className="notices-page-overview" aria-label="Notices overview">
          <div className="notices-page-overview__card">
            <span className="notices-page-overview__label">Total posts</span>
            <strong className="notices-page-overview__value">{notices.length}</strong>
          </div>
          <div className="notices-page-overview__card">
            <span className="notices-page-overview__label">Pinned now</span>
            <strong className="notices-page-overview__value">{pinnedCount}</strong>
          </div>
          <div className="notices-page-overview__card">
            <span className="notices-page-overview__label">Latest update</span>
            <strong className="notices-page-overview__value">April 12</strong>
          </div>
        </div>
      </section>

      <section className="notices-page-content" id="notice-feed">
        <div className="notices-page-content__header">
          <div>
            <h2 className="notices-page-content__title">Recent notices</h2>
          </div>
        </div>

        <div className="notices-page-list">
          {notices.map((notice, idx) => (
            <article className="notice-panel" key={notice.title}>
              <div className="notice-panel__meta">
                <span className="notice-panel__index">{String(idx + 1).padStart(2, "0")}</span>
                <div className="notice-panel__chips">
                  {notice.pinned && <span className="notice-panel__chip notice-panel__chip--pinned">Pinned</span>}
                  <span className="notice-panel__chip">{notice.type}</span>
                </div>
                <span className="notice-panel__audience">{notice.audience}</span>
              </div>

              <div className="notice-panel__body">
                <div className="notice-panel__date">{notice.date}</div>
                <h3 className="notice-panel__title">{notice.title}</h3>
                <p className="notice-panel__desc">{notice.desc}</p>
              </div>

              <div className="notice-panel__footer">
                <span className="notice-panel__action">{notice.action}</span>
                <span className="notice-panel__arrow" aria-hidden="true">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
