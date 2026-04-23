import React, { useState } from "react";
import { Link } from "react-router-dom";
import DownloadIcon from "./DownloadIcon";

const notesData = [
  {
    semester: "Sem 1",
    subjects: [
      { name: "Intro to Electrical & Electronics Engineering", link: "https://drive.google.com/drive/folders/1toKzgcwqqJeiEprNENlXE3XDTOKZWabq" },
      { name: "Maths", link: "https://drive.google.com/drive/folders/1tS5U03kyE4Zb6xAo2NtDlPMkS7LZBNRf" },
      { name: "Algorithmic Thinking with Python", link: "https://drive.google.com/drive/folders/1tuNWP8MsMt5B_goMrZThYwvT1jGRU9Cw" },
      { name: "Engineering Graphics", link: "https://drive.google.com/drive/folders/1tWCSyc5VIMkg6JmNEUZNUC0_qk8DHgw4" },
      { name: "Physics", link: "https://drive.google.com/drive/folders/1K7j3cKe2p80PtqxJgBMjfRbL0QanKTB-" }
    ]
  },
  {
    semester: "Sem 2",
    subjects: [
      { name: "Maths", link: "https://drive.google.com/drive/folders/1izqk86n_uF5VA0fpNDnBsnTeJKNj0W1U" },
      { name: "Chemistry", link: "https://drive.google.com/drive/folders/1rOC_rEZGIDE__-ci07BMT2h4ytwbGgJJ" },
      
      { name: "Foundations of Commputing", link: "https://drive.google.com/drive/folders/1l9xEpHoaECFQYW5bHH2k-GcfK6hzcV95" },
      { name: "Programming in C", link: "https://drive.google.com/drive/folders/1ja3ronoX8U3Uc1GPQRm3lwUSn4b36itJ" },
      { name: "Engineering Entrepreneurship and IPR", link: "https://drive.google.com/drive/folders/1sHABss4kioxE3m94URvIKJJsAWrnm_Cz" },
      { name: "Analog Electronics", link: "https://drive.google.com/drive/folders/1PiTxMxC6pzFgTO-f7-_K4wAhSPXmM_La" }
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
      { name: "Electrical Machines", link: "https://drive.google.com/drive/folders/1MqbQjT04APJChaf_x5S88RAqSXoSp7-G" },
      { name: "COA", link: "https://drive.google.com/drive/folders/1Z8QQwXmPmhhtA3wQOic9TGdzjz_SlTIM" },
      { name: "Java", link: "https://drive.google.com/drive/folders/1lVKt_Tosy0BMZvOCQ3C6RYN8viA9b_th" },
      { name: "Maths", link: "https://drive.google.com/drive/folders/1DO8NWwasga-WkUHGXv0YFqdtO1PvOYgr" },
      { name: "SSD (Elective)", link: "https://drive.google.com/drive/folders/16Xim2A1niBx5Ny_yUzp2kw6pXSNyjcJq" },
      { name: "Renewable (Elective)", link: "https://drive.google.com/drive/folders/1venG4qNp6bx6pbN1QbJ42P0vdjbDVl8t" },
      { name: "ML", link: "https://drive.google.com/drive/folders/19ReTagHlWRETWTEzMJUNeV2orIalqsLQ" }
    ]
  }
];

const questionPaperData = [
  {
    semester: "Sem 1",
    papers: [
      {
        subject: "Intro to Electrical & Electronics Engineering",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1EOb1p7WHT4OKp6L_TF00Uq9HC8iIyH_l/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1EOb1p7WHT4OKp6L_TF00Uq9HC8iIyH_l/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1jRUWVVJXD0HEe7XFaiRoMIxr7JntHsDv/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Maths",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1Jh_jInTkNMVKFGKRAT96QlH_o1ECh-8D/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1JbTGnEd4mxYsE-h4phRlTliswGAicywC/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1ZFBNY0lHyhE_HD7ypoX9d5EN8IttcIYL/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Algorithmic Thinking with Python",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1ruSnBmc51BOh9dcZzRTOZ1didyBc7rq7/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1Gm8wy63qmCOP1MnhFcuAhExLjgHDxM0P/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1sFdeeXOMliuKPwDrNZFlKu5macog_8qm/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Engineering Graphics",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1GU0mJOXQIU_PkhNPZDeMSdFraeBvdsb0/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/14V-8oI1zdssG-1TaLw4Ci4PrRy5M0AVA/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1Idh-TobVQiTK9Mamv6eTguEz3g1o9USd/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Physics",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1_Dpi5fSpBvUqjNB2NZGxs4F9Hy3Z6ikd/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1Zm1BE0VRx-cLbb4q_pzjPjsf_Rk_T5EL/view?usp=drivesdk" }
          // No Sem link provided
        ]
      }
    ]
  },
  {
    semester: "Sem 2",
    papers: [
      {
        subject: "Chemistry",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1tbB-zshs7EKTck-nQnfQaAgQcItTF5JT/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1pFtGv3mI5BOnpZcDKyPlDbzlm-0eNgKb/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/16DSfgdyOZfxv_OmYF4peBNwUgtuJTZ8p/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Maths",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/15nKqir2rsFsrVet0jD4FIxvhi9iOAB9P/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/15myYCyUrCOgZwXzeLMl9f4SL2inHInMl/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1t9CN6Sdfc7oA5VLd5DAy_gMIYR2ym9Ik/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Foundations of Commputing",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1qlZwoigDbvBrV4lj_l36xfH8meBwJ5in/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1WVkFBwzn9xO5UFE9MJyNYcyOwMJp-qtD/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1-ImbEEJm29fFypJYUFRu2-1L2dE31GdP/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Programming in C",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/15vt30ZXrLGDfCtCoXhso0Xmlbo0S_V9d/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/15wlfzogU_gifC1g8Rv-7fIocG0Q1bRjh/view?usp=drivesdk" },
          { name: "Sem", link: "https://drive.google.com/file/d/1-2hmU_fwbScTJ9gzbZSZ7Hq2O9fdWJ05/view?usp=drivesdk" }
        ]
      },
      {
        subject: "Engineering Entrepreneurship and IPR",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1FKisQu2Mp6_BB28ZT2XX_GXDTwfHEiYw/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1qPegpzzWdwMkMnNT5ro5iOOY65PqxJy6/view?usp=drivesdk" }
          // No Sem link provided
        ]
      },
      {
        subject: "Analog Electronics",
        series: [
          { name: "Series 1", link: "https://drive.google.com/file/d/1YlIxdhhq99WTfglIxcajWbFW_4RHO6MV/view?usp=drivesdk" },
          { name: "Series 2", link: "https://drive.google.com/file/d/1Yp7fOsUhp8xEkl8368I8vDI4MX5EUDlQ/view?usp=drivesdk" }
          // No Sem link provided
        ]
      }
    ]
  }
];

export default function AcademicsPage() {
  const [selectedQPSem, setSelectedQPSem] = useState(0);

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
        {/* Notes Section */}
        <div className="academics-page-content__notes" style={{ paddingTop: 0 }}>
          <h2 className="academics-page-content__title">Notes</h2>
          <p className="academics-page-content__text" style={{ marginBottom: "2rem" }}>
            Comprehensive subject-wise notes curated to help you master the core concepts.
          </p>
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

        <div className="academics-page-content__question-papers">
          <h2 className="academics-page-content__title">Question Papers</h2>
          <p className="academics-page-content__text" style={{ marginBottom: "2rem" }}>
            Access previous series and semester examination papers for effective practice.
          </p>

          {/* Mobile View — accordions */}
          <div className="academics-mobile-accordions">
            <div className="academics-accordions-wrapper">
              {questionPaperData.map((sem, idx) => (
                <details className="academics-accordion" key={idx}>
                  <summary className="academics-accordion__summary">
                    <span>{sem.semester}</span>
                    <svg className="academics-accordion__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </summary>
                  <div className="academics-accordion__content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {sem.papers.map((paper, pIdx) => (
                      <div key={pIdx} className="qp-card">
                        <div className="qp-card__header">{paper.subject}</div>
                        <div className="qp-card__body">
                          {paper.series.map((ser, sIdx) => (
                            <a key={sIdx} className="qp-card__link" href={ser.link} target="_blank" rel="noreferrer">
                              <span>{ser.name === 'Sem' ? 'Semester Paper' : ser.name}</span>
                              <DownloadIcon />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Desktop View — semester selector + cards */}
          <div className="qp-desktop">
            <div className="qp-semester-selector">
              {questionPaperData.map((sem, idx) => (
                <button
                  key={idx}
                  className={`qp-semester-selector__pill${selectedQPSem === idx ? ' qp-semester-selector__pill--active' : ''}`}
                  onClick={() => setSelectedQPSem(idx)}
                >
                  {sem.semester.replace('Sem', 'Semester')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              ))}
            </div>

            <div className="qp-desktop__grid">
              {questionPaperData[selectedQPSem].papers.map((paper, pIdx) => (
                <div key={pIdx} className="qp-card">
                  <div className="qp-card__header">{paper.subject}</div>
                  <div className="qp-card__body">
                    {paper.series.map((ser, sIdx) => (
                      <a key={sIdx} className="qp-card__link" href={ser.link} target="_blank" rel="noreferrer">
                        <span>{ser.name === 'Sem' ? 'Semester Paper' : ser.name}</span>
                        <DownloadIcon />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
