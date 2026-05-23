import React from "react";
import "./NoticeSection.css";
import { Link } from "react-router-dom";

export default function NoticeSection() {
  return (
    <section className="notice-section">
      <div className="notice-section__label-row">
        <span className="notice-section__label">LATEST UPDATES</span>
      </div>
      <div className="notice-section__heading-row">
        <span className="notice-section__subheading">02 —</span>
        <h2 className="notice-section__heading">Latest Notices</h2>
      </div>
      <div className="notice-section__desc">Stay updated with important announcements</div>
      <div className="notice-card">
        <div className="notice-card__badges">
          <span className="notice-card__badge notice-card__badge--pinned">📌 PINNED</span>
          <span className="notice-card__badge">Results</span>
        </div>
        <div className="notice-card__title">S1 Toppers of EL</div>
        <div className="notice-card__date">April 12, 2026</div>
        <div className="notice-card__desc">
          Meet the toppers for the first semester of the 2025 EL batch and celebrate the consistency, focus, and academic excellence across the program.
        </div>
        <a
          href="https://www.instagram.com/p/DWW_OoiEswz/?img_index=1"
          className="notice-card__arrow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View S1 toppers on Instagram"
        >
          &gt;
        </a>
      </div>
      <div className="notice-section__footer">
        <Link to="/notices" className="notice-section__view-all">View all notices <span>&rarr;</span></Link>
      </div>
    </section>
  );
}
