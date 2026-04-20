import React from "react";
import { Link } from "react-router-dom";

const notesData = [
  {
    semester: "Sem 1",
    subjects: [
      { name: "IEEE", link: "https://drive.google.com/drive/folders/1toKzgcwqqJeiEprNENlXE3XDTOKZWabq" },
      { name: "Maths", link: "https://drive.google.com/drive/folders/1tS5U03kyE4Zb6xAo2NtDlPMkS7LZBNRf" },
      { name: "Atp", link: "https://drive.google.com/drive/folders/1tuNWP8MsMt5B_goMrZThYwvT1jGRU9Cw" },
      { name: "Eg", link: "https://drive.google.com/drive/folders/1tWCSyc5VIMkg6JmNEUZNUC0_qk8DHgw4" },
      { name: "Physics", link: "https://drive.google.com/drive/folders/1K7j3cKe2p80PtqxJgBMjfRbL0QanKTB-" }
    ]
  },
  {
    semester: "Sem 2",
    subjects: [
      { name: "Maths", link: "https://drive.google.com/drive/folders/1izqk86n_uF5VA0fpNDnBsnTeJKNj0W1U" },
      { name: "Chemistry", link: "https://drive.google.com/drive/folders/1rOC_rEZGIDE__-ci07BMT2h4ytwbGgJJ" },
      { name: "Foc", link: "https://drive.google.com/drive/folders/1l9xEpHoaECFQYW5bHH2k-GcfK6hzcV95" },
      { name: "Prc", link: "https://drive.google.com/drive/folders/1ja3ronoX8U3Uc1GPQRm3lwUSn4b36itJ" },
      { name: "Ipr", link: "https://drive.google.com/drive/folders/1sHABss4kioxE3m94URvIKJJsAWrnm_Cz" },
      { name: "Analog", link: "https://drive.google.com/drive/folders/1PiTxMxC6pzFgTO-f7-_K4wAhSPXmM_La" }
    ]
  },
  {
    semester: "Sem 3",
    subjects: [
      { name: "Maths", link: "https://drive.google.com/drive/folders/1FY4_iUcyH2mdDFghMtmWWPZ1uoF-X2pS" },
      { name: "Circuits and networks", link: "https://drive.google.com/drive/folders/1hfgjL-h-y4CvnC_I9XT2HGupMzNuVKSG" },
      { name: "Data structures and algorithms", link: "https://drive.google.com/drive/folders/1wtFb2yzwvmxvbSijVcphztB71fzHVLvW" },
      { name: "Digital electronics and logic system design", link: "https://drive.google.com/drive/folders/1iMlzag8zLAbwXmSwoxdvgw42H1xyUeMQ" },
      { name: "Ai and ds", link: "https://drive.google.com/drive/folders/1vEFmZihxN1W0hj3ORB2Ljxaiz0acLJr3" },
      { name: "Engineering ethics", link: "https://drive.google.com/drive/folders/1fgmDIQEBM1F_AxKFqLYJOgBgG2VGj7vY" }
    ]
  },
  {
    semester: "Sem 4",
    subjects: [
      { name: "Economics", link: "https://drive.google.com/drive/folders/1c91yV9MtXrkjtDgpE0rib7wrI-rvSxoS" },
      { name: "EM", link: "https://drive.google.com/drive/folders/1MqbQjT04APJChaf_x5S88RAqSXoSp7-G" },
      { name: "COA", link: "https://drive.google.com/drive/folders/1Z8QQwXmPmhhtA3wQOic9TGdzjz_SlTIM" },
      { name: "Java", link: "https://drive.google.com/drive/folders/1lVKt_Tosy0BMZvOCQ3C6RYN8viA9b_th" },
      { name: "Maths", link: "https://drive.google.com/drive/folders/1DO8NWwasga-WkUHGXv0YFqdtO1PvOYgr" },
      { name: "SSD (Elective)", link: "https://drive.google.com/drive/folders/16Xim2A1niBx5Ny_yUzp2kw6pXSNyjcJq" },
      { name: "Renewable (Elective)", link: "https://drive.google.com/drive/folders/1venG4qNp6bx6pbN1QbJ42P0vdjbDVl8t" },
      { name: "ML", link: "https://drive.google.com/drive/folders/19ReTagHlWRETWTEzMJUNeV2orIalqsLQ" }
    ]
  }
];

export default function AcademicsPage() {
  return (
    <main className="academics-page-shell">
      <section className="academics-page-hero">
        <div className="academics-page-hero__copy">
          <span className="academics-page-hero__eyebrow">Academic Resources</span>
          <h1 className="academics-page-hero__title">Academics</h1>
          <p className="academics-page-hero__subtitle">
            Quick access to core academic materials for the EL/EO program.
          </p>
          <div className="resource-badges" style={{ marginTop: "2rem" }}>
            <a
              className="resource-badge"
              href="https://drive.google.com/drive/folders/1X_GLuX7iMzN35Q03IfZfCNRgfCYZimMS"
              target="_blank"
              rel="noreferrer"
            >
              <span className="badge-indicator">Syllabus</span>
              <span className="badge-value">Open syllabus folder</span>
            </a>
          </div>
        </div>
      </section>

      <section className="academics-page-content">
        <div className="academics-page-content__notes" style={{ paddingTop: 0 }}>
          <h2 className="academics-page-content__title" style={{ marginBottom: "1.5rem" }}>Notes</h2>
          {/* Mobile View */}
          <div className="academics-mobile-accordions">
            <div className="academics-accordions-wrapper">
              {notesData.map((sem, idx) => (
                <details className="academics-accordion" key={idx}>
                  <summary className="academics-accordion__summary">
                    <span>{sem.semester}</span>
                    <svg className="academics-accordion__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <div className="academics-accordion__content">
                    <div className="resource-badges">
                      {sem.subjects.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          className="resource-badge"
                          href={sub.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="badge-indicator">NOTES</span>
                          <span className="badge-value">{sub.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="academics-desktop-columns">
            {notesData.map((sem, idx) => (
              <div className="desktop-column" key={idx}>
                <div className="desktop-column__header">
                  {sem.semester.replace('Sem', 'Semester')}
                </div>
                <div className="desktop-column__body">
                  {sem.subjects.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      className="desktop-column__link"
                      href={sub.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
