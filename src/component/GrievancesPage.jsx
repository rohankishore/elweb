import React from "react";
import { Link } from "react-router-dom";

const groundRules = [
  {
    title: "Confidentiality is key",
    text: "Your secrets and rants are safe. The Welfare Committee keeps every submission strictly private.",
  },
  {
    title: 'No issue is "too small"',
    text: "If it is bothering you, it matters to us. The goal is to make sure every EL student feels supported.",
  },
  {
    title: "We listen and act",
    text: "The Welfare Committee takes the lead in talking to the department or fixing the vibe to get things sorted.",
  },
];

export default function GrievancesPage() {
  return (
    <main className="grievances-page-shell">
      <section className="grievances-page-hero">
        <div className="grievances-page-hero__copy">
          <span className="grievances-page-hero__eyebrow">Student Support</span>
          <h1 className="grievances-page-hero__title">We Hear You</h1>
          <p className="grievances-page-hero__subtitle">Got a problem? Let&apos;s fix it together.</p>
          <div className="grievances-page-hero__actions">
            <Link to="/" className="grievances-page-hero__link">
              Back to home
            </Link>
            <Link to="/about" className="grievances-page-hero__link">
              About the department
            </Link>
          </div>
        </div>
      </section>

      <section className="grievances-page-content">
        <div className="grievances-page-content__intro">
          <p>
            Look, engineering is hard enough without extra hurdles in your way. Whether it&apos;s a
            lab machine that&apos;s constantly acting up, a clash in the exam schedule, or
            something personal that&apos;s making life at CET difficult, don&apos;t keep it to
            yourself.
          </p>
          <p>
            This form is a direct line to the EL Association Welfare Committee. We&apos;re not
            here to judge or play the official card; we&apos;re here to listen, support you, and
            help clear any hurdles so you can focus on what actually matters.
          </p>
          <p>
            Whether it&apos;s a personal struggle or a department issue, consider us your go-to
            crew for making things right.
          </p>
        </div>

        <div className="grievances-page-rules">
          <h2 className="grievances-page-rules__title">The Ground Rules</h2>
          <div className="grievances-page-rules__grid">
            {groundRules.map((rule) => (
              <article className="grievances-page-rules__card" key={rule.title}>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="resource-badges">
          <a
            className="resource-badge"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSofrZwcA9tBGnzYc6X4gz7qexTZvATY6QFBV0J6jyQPxRKA/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
          >
            <span className="badge-indicator">Form Link</span>
            <span className="badge-value">Open grievance form</span>
          </a>
        </div>
      </section>
    </main>
  );
}
