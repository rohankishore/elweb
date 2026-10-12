import React from "react";
import { Link } from "react-router-dom";

const notices = [
  {
    pinned: false,
    type: "Time Table",
    audience: "KTU semester update",
    title: "Semester Exam Time Table for S2 & S4",
    date: "April 12, 2026",
    desc: "KTU semester exam timetables for EL S2 and S4 batches have been released.",
    href: "https://www.instagram.com/p/DWrRFRHAWsU/?img_index=1",
  },
  {
    pinned: false,
    type: "Results",
    audience: "First semester highlights",
    title: "S1 Toppers of EL",
    date: "April 12, 2026",
    desc: "Meet the toppers for the first semester of the 2025 EL batch and celebrate the consistency, focus, and academic excellence across the program.",
    href: "https://www.instagram.com/p/DWW_OoiEswz/?img_index=1",
  },
  {
    pinned: false,
    type: "Placement Talk",
    audience: "Talk Session",
    title: "Placement Talk Session",
    date: "May 31, 2026 · 7:30 PM · Online",
    desc: "What Recruiters Really Expect From You? — Step into an insightful session with Athul, Senior Embedded Firmware Engineer at Texas Instruments, and gain industry perspectives on placements, skills, and career growth. An initiative under EPOCH by the Electronics Department, in collaboration with the Internship Cell CET and EL Association.",
    href: "https://www.instagram.com/p/DYrDu3YRdNm/",
  },
  {
    pinned: true,
    type: "Skill Up",
    audience: "Online Workshop · Google Meet",
    title: "Session 3 : Circuit Design and Simulation Using Proteus",
    date: "June 3, 2026 · 7:30 PM",
    desc: "Building on the momentum of our previous sessions, Skill Up returns with its third edition! Explore the power of Proteus and learn to design, simulate, and test electronic circuits in a virtual environment. Speaker: Neeraj Rajeev (4th Year, EEE Department | CET, Placed at Tismo Technology Solutions, Bangalore).",
    href: "https://meet.google.com/evo-jxex-rch",
    action: "Join GMeet",
  },
  {
    pinned: true,
    type: "Workshop",
    audience: "Hands-on Workshop · ₹49 Only",
    title: "FROM CIRCUIT TO PCB: PCB Designing using KiCad",
    date: "September 1, 2026 · 4:30 PM – 6:30 PM",
    desc: "Ever wondered how your circuit turns into an actual PCB? Get ready to dive into PCB Designing using KiCad and learn the basics of designing professional PCBs from scratch! Speaker: Sean Mathew (4th Year EEE). Whether you're a beginner or an electronics enthusiast, this is your chance to design, create & learn!",
    href: "https://www.instagram.com/el.association.cet/",
    action: "Register Now",
  },
  {
    pinned: true,
    type: "Workshop",
    audience: "Hands-on Workshop · ₹49 Only",
    title: "READY TO EXPLORE MATLAB? Technical Computing & SimuLink",
    date: "September 2, 2026 · 4:30 PM – 6:30 PM",
    desc: "Join us for an exciting hands-on workshop on MATLAB! Learn how to use MATLAB for basic technical computing, simulations using SimuLink, and practical applications. Speaker: Varun Sathya (4th Year EEE). Don't miss out on leveling up your engineering skill set!",
    href: "https://www.instagram.com/el.association.cet/",
    action: "Register Now",
  },
  {
    pinned: true,
    type: "Student Welfare",
    audience: "Welfare Committee Representation",
    title: "Request to HOD on Basic Facility Issues & Student Welfare",
    date: "September 1, 2026",
    desc: "The Secretary of the EL Association, on behalf of the Welfare Committee, has requested the HOD to address basic facility issues affecting students' comfort and safety: 1. Drinking Water: Changed taste and irregular availability from purifiers. 2. Washrooms: Need regular cleaning and maintenance. 3. Wi-Fi: Weak and unstable connectivity in classrooms and common areas. 4. Lights & Fans: Faulty lights and fans in classrooms. 5. Damaged Tiles: Broken tiles causing inconvenience and safety concerns. The committee requests prompt action to resolve these issues for student welfare.",
    href: "https://www.instagram.com/el.association.cet/",
    action: "View Update",
  },
  {
    pinned: true,
    type: "Placement & Training",
    audience: "CGPU Representation · EL Association",
    title: "Representation to CGPU for CS Placements & Internships",
    date: "September 27, 2026",
    desc: "The EL Association Secretary has submitted a request to the Career Guidance & Placement Unit (CGPU) to consider Electrical & Computer Engineering students for suitable CS-oriented placements and internship opportunities. With the interdisciplinary nature of the EL programme and its strong foundation in programming, computing, embedded systems, digital systems, and related technologies, the request aims to ensure that eligible EL students have access to relevant opportunities alongside other computing-oriented branches.",
    href: "https://www.instagram.com/el.association.cet/",
    action: "View Update",
  },
  {
    pinned: true,
    type: "Academic Affairs",
    audience: "KTU Academic Affairs · Board of Studies",
    title: "Request to KTU Dean for Academic Equivalency with EEE",
    date: "September 29, 2026",
    desc: "The Electrical and Computer Department Student Representative submitted a formal request to the KTU Dean (Academics), seeking consideration for academic equivalency of the Electrical and Computer Engineering programme with the Electrical and Electronics Engineering (EEE) programme. The matter was discussed and subsequently forwarded to the Board of Studies for further consideration.",
    href: "https://www.instagram.com/el.association.cet/",
    action: "View Update",
  },
  {
    pinned: true,
    featured: true,
    type: "Featured Event",
    audience: "EL Association Presents · Flagship Night",
    title: "ECHELON — EL NIGHT ’26",
    date: "1st September 2026",
    desc: "An evening of celebration, entertainment, and togetherness awaits. ✨ Step away from the usual and join us for an evening of music, entertainment, and shared moments, bringing everyone together for a night of celebration. Join us as we come together for an unforgettable night! 🤍",
    href: "https://www.instagram.com/el.association.cet/",
    action: "Explore & Celebrate",
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
            <strong className="notices-page-overview__value">Sep 29</strong>
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
          {[...notices].reverse().map((notice, idx) => (
            <article className={`notice-panel ${notice.featured ? 'notice-panel--featured' : ''}`} key={notice.title}>
              <div className="notice-panel__meta">
                <span className="notice-panel__index">{String(idx + 1).padStart(2, "0")}</span>
                <div className="notice-panel__chips">
                  {notice.pinned && <span className="notice-panel__chip notice-panel__chip--pinned">Pinned</span>}
                  <span className={`notice-panel__chip ${notice.featured ? 'notice-panel__chip--featured' : ''}`}>{notice.type}</span>
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
                {notice.href ? (
                  <a
                    href={notice.href}
                    className="notice-panel__arrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${notice.title}`}
                  >
                    →
                  </a>
                ) : (
                  <span className="notice-panel__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
