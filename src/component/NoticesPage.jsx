import React from "react";

const notices = [
  {
    pinned: true,
    type: "WORKSHOP",
    title: "Chip Making Workshop",
    date: "April 12, 2026",
    desc: "Hands-on workshop on semiconductor fabrication basics, clean-room workflow, and chip design prototyping for EL/EO students. Limited seats available for the first batch.",
    link: "Registration form and session details available"
  },
  {
    pinned: true,
    type: "RESULTS",
    title: "S1 Toppers of EL",
    date: "April 12, 2026",
    desc: "Meet the toppers for the first semester of the 2025 EL batch. Celebrating academic excellence and dedication in the program.",
    link: null
  }
];

export default function NoticesPage() {
  return (
    <div className="notices-page">
      <h1 className="notices-title">All Notices</h1>
      <div className="notices-subtitle">Stay updated with important announcements</div>
      <div className="notices-list">
        {notices.map((notice, idx) => (
          <div className="notice-card-full" key={idx}>
            <div className="notice-card-full__side">
              {notice.pinned && <span className="notice-card-full__pinned">PINNED</span>}
              <span className="notice-card-full__type">{notice.type}</span>
              <span className="notice-card-full__idx">{(idx+1).toString().padStart(2,'0')}</span>
            </div>
            <div className="notice-card-full__main">
              <div className="notice-card-full__date">{notice.date}</div>
              <div className="notice-card-full__title">{notice.title}</div>
              <div className="notice-card-full__desc">{notice.desc}</div>
              {notice.link && <div className="notice-card-full__link"><a href="#">{notice.link}</a></div>}
            </div>
            <div className="notice-card-full__arrow">&#8250;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
