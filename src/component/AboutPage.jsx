

import React from "react";
import { Link } from "react-router-dom";
import TrueFocus from "./TrueFocus";
import Spline from '@splinetool/react-spline';

export default function AboutPage() {
  return (
    <main className="about-page-shell">
      <section className="about-page-hero" style={{ boxShadow: "none", background: "none", border: "none" }}>
        <div className="about-page-hero__copy" style={{ boxShadow: "none", background: "none", border: "none" }}>
          <span className="about-page-hero__eyebrow">About the Association</span>
          <h1 className="about-page-hero__title">EL Association</h1>
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
          <h2 className="about-page-content__title" style={{ marginBottom: '0.8rem', textAlign: 'left' }}>Our Faculties</h2>
          <p className="about-page-content__text">
            Faculty details and photos will be updated soon.
          </p>
        </div>
      </section>
    </main>
  );
}
