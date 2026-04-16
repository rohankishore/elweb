import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
      <span style={{ color: "#6c63ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", fontSize: ".9rem" }}>About the Association</span>
      <h1 style={{ fontSize: "2.5rem", margin: "1rem 0 .5rem", fontWeight: 700 }}>EL Association</h1>
      <p style={{ fontSize: "1.15rem", marginBottom: "2rem" }}>
        The <strong>EL Association</strong> is the official student body of the Electrical and Computer Engineering branch, functioning as an all-in-one support space for students to meet their academic, extra-curricular, and student welfare needs.
      </p>
      <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 .5rem", fontWeight: 600 }}>Our Mission</h2>
      <p style={{ fontSize: "1.08rem", marginBottom: "1.5rem" }}>
        The Association ensures that all important updates – including timetables, announcements, notices, study materials, and question papers – are efficiently communicated to students through the website. By providing a centralized and accessible platform, we aim to ensure that students never miss out on any essential information.
      </p>
      <h2 style={{ fontSize: "1.5rem", margin: "2rem 0 .5rem", fontWeight: 600 }}>Our Commitment</h2>
      <p style={{ fontSize: "1.08rem" }}>
        As a newly established branch, we are committed to ensuring every student feels included and represented. As the inaugural committee, we aim to lay a strong foundation that fosters participation, belonging, and growth for the batches to come.
      </p>
    </main>
  );
}
