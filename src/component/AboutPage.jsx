import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="about-page-shell">
      <section className="about-page-hero">
        <div className="about-page-hero__copy">
          <span className="about-page-hero__eyebrow">About the Department</span>
          <h1 className="about-page-hero__title">About EL/EO</h1>
          <p className="about-page-hero__subtitle">
            This page is ready for your about-section content. Send the text whenever you are
            ready, and we can turn it into a polished page.
          </p>
        </div>

        <div className="about-page-status" aria-label="About page status">
          <div className="about-page-status__card">
            <span className="about-page-status__label">Status</span>
            <strong className="about-page-status__value">Ready for content</strong>
          </div>
          <div className="about-page-status__card">
            <span className="about-page-status__label">Next step</span>
            <strong className="about-page-status__value">Add your final copy</strong>
          </div>
        </div>
      </section>

      <section className="about-page-content">
        <div className="about-page-content__intro">
          <h2 className="about-page-content__title">Scaffold is in place</h2>
          <p className="about-page-content__text">
            Once you send the content, I can structure it into sections, highlights, timelines, or
            stats depending on how polished you want the page to feel.
          </p>
        </div>
      </section>
    </main>
  );
}
