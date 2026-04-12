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
          <span className="notice-card__badge">NOTICE</span>
        </div>
        <div className="notice-card__title">Sem Exam Dates</div>
        <div className="notice-card__date">April 12, 2026</div>
        <div className="notice-card__desc">
          B.Tech Applied Electronics Detailed Examination Time Table (S2, S4, S6, S8).
        </div>
        <div className="notice-card__attachment">
          <a href="#" className="notice-card__attachment-link">📎 Attachment available</a>
        </div>
        <span className="notice-card__arrow">&gt;</span>
      </div>
      <div className="notice-section__footer">
        <Link to="/notices" className="notice-section__view-all">View all notices <span>&rarr;</span></Link>
      </div>
    </section>
  );
}
