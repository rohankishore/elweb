

import React from "react";
import { Link } from "react-router-dom";
import TrueFocus from "./TrueFocus";
import Spline from '@splinetool/react-spline';
import FacultySection from './FacultySection.jsx';

export default function AboutPage() {
  return (
    <main className="about-page-shell">
      <section className="about-page-hero" style={{ boxShadow: "none", background: "none", border: "none" }}>
        <div className="about-page-hero__copy" style={{ boxShadow: "none", background: "none", border: "none" }}>
          <span className="about-page-hero__eyebrow">About the Association</span>
          <h1 className="about-page-hero__title" style={{ whiteSpace: 'nowrap' }}>EL Association</h1>
          <p className="about-page-hero__subtitle">
            The <strong>EL Association</strong> is the official student body of the Electrical and Computer Engineering branch, functioning as an all-in-one support space for students to meet their academic, extra-curricular, and student welfare needs.
          </p>
        </div>
      </section>
      

      <section className="about-page-content">
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <div style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ width: 'fit-content' }}>
              <TrueFocus
                sentence="Our Mission"
                separator=" "
                blurAmount={5}
                borderColor="var(--accent)"
                glowColor="rgba(108,99,255,0.4)"
                animationDuration={0.5}
                pauseBetweenAnimations={1}
                manualMode={false}
              />
            </div>
          </div>
          <p className="about-page-content__text">
            The Association ensures that all important updates – including timetables, announcements, notices, study materials, and question papers – are efficiently communicated to students through the website. By providing a centralized and accessible platform, we aim to ensure that students never miss out on any essential information.
          </p>
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Our Commitment</h2>
          <p className="about-page-content__text">
            As a newly established branch, we are committed to ensuring every student feels included and represented. As the inaugural committee, we aim to lay a strong foundation that fosters participation, belonging, and growth for the batches to come.
          </p>
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Our Faculty</h2>
          <p className="about-page-content__text">
            Our professors are more than just lecturers—they’re the ones helping us connect the dots between complex circuits and high-level code. Whether they’re deep-diving into AI or breaking down Power Systems, they bring the expertise that turns us into engineers. Check the list below for official contact details
          </p>
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Electrical Engineering Faculty</h2>
          <FacultySection type="e" />
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Computer Science Faculty</h2>
          <FacultySection type="c" />
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Mathematics Faculty</h2>
          <FacultySection type="m" />
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Physics Faculty</h2>
          <FacultySection type="p" />
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Chemistry Faculty</h2>
          <FacultySection type="ch" />
        </div>
        <div className="about-page-content__intro" style={{ boxShadow: "none", background: "none", border: "none", borderRadius: 0 }}>
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Our Technical staff</h2>
          <p className="about-page-content__text">
            Whether you're hunting for a specific resistor, need to figure out why your motor isn't spinning, or need a crash course on using the DSO, these are the experts you'll find on the ground, the Technical Staff !
          </p>
        </div>
      </section>
    </main>
  );
}
