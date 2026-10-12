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
      <div className="notice-card notice-card--featured" style={{
        borderColor: 'rgba(255, 215, 0, 0.45)',
        background: 'radial-gradient(circle at top right, rgba(255, 215, 0, 0.12), transparent 45%), rgba(255, 255, 255, 0.035)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.1)'
      }}>
        <div className="notice-card__badges">
          <span className="notice-card__badge notice-card__badge--pinned">✨ FEATURED</span>
          <span className="notice-card__badge" style={{ borderColor: 'rgba(255, 215, 0, 0.4)', color: '#ffd768' }}>EL Night ’26</span>
        </div>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255, 215, 0, 0.9)', marginBottom: '0.3rem' }}>
          EL Association Presents
        </div>
        <div className="notice-card__title" style={{ fontSize: '2rem' }}>ECHELON — EL NIGHT ’26</div>
        <div className="notice-card__date" style={{ color: '#ffd768' }}>📅 1st September 2026</div>
        <div className="notice-card__desc">
          An evening of celebration, entertainment, and togetherness awaits. ✨ Step away from the usual and join us for an evening of music, entertainment, and shared moments! 🤍
        </div>
        <a
          href="https://www.instagram.com/el.association.cet/"
          className="notice-card__arrow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Instagram"
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
