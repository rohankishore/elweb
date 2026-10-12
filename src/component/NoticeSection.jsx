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
          <span className="notice-card__badge">Workshop</span>
        </div>
        <div className="notice-card__title">READY TO EXPLORE MATLAB?</div>
        <div className="notice-card__date">September 2, 2026 · 4:30 PM – 6:30 PM</div>
        <div className="notice-card__desc">
          Hands-on workshop on MATLAB, SimuLink simulations &amp; practical applications led by Varun Sathya (4th Year EEE). Registration ₹49 only!
        </div>
        <a
          href="https://www.instagram.com/el.association.cet/"
          className="notice-card__arrow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register on Instagram bio"
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
