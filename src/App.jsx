/*Some of the parts are ai generated , and i havent verified every one of them.
so the chances of breaking some shi is really high */

/*IM SORRY FOR AI SLOPING*/

import { useEffect, useMemo, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import { useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import GooeyNav from './component/GooeyNav'
import MarqueeLinks from './component/MarqueeLinks'
import './App.css'
import ShinyText from './component/ShinyText'
import NoticeSection from './component/NoticeSection';
import NoticesPage from './component/NoticesPage';
import AboutPage from './component/AboutPage';
import AcademicsPage from './component/AcademicsPage';
import Dither from './component/Dither';
import LineWaves from './component/LineWaves';
import GrievancesPage from './component/GrievancesPage';
import SiteFooter from './component/SiteFooter';
import StudentsPage from './component/StudentsPage';
import { achievements } from './component/achievementsData';

function HomePage() {
  const videoRef = useRef(null)
  const captionRef = useRef(null)
  const scrollHintRef = useRef(null)
  const journeyRef = useRef(null)
  const linewavesRef = useRef(null)

  // Get scroll progress relative to the hero section
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start start', 'end center'],
  })

  // Sync video playback directly with scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const video = videoRef.current
    if (video && video.duration > 0) {
      const targetTime = progress * video.duration
      if (Math.abs(video.currentTime - targetTime) > 0.1) {
        video.currentTime = targetTime
      }
    }
  })

  // Map scroll progress to caption reveal
  const captionReveal = useTransform(scrollYProgress, [0.5, 0.7], [0, 1], { clamp: false })

  useMotionValueEvent(captionReveal, 'change', (value) => {
    if (captionRef.current) {
      captionRef.current.style.setProperty('--caption-reveal', Math.max(0, Math.min(1, value)).toFixed(3))
    }
  })

  // Map scroll progress to scroll hint opacity
  const hintOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0], { clamp: true })

  useMotionValueEvent(hintOpacity, 'change', (value) => {
    if (scrollHintRef.current) {
      scrollHintRef.current.style.setProperty('--hint-opacity', value.toFixed(3))
    }
  })

  // Map scroll progress to LineWaves opacity
  const wavesOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.4], { clamp: false })

  useMotionValueEvent(wavesOpacity, 'change', (value) => {
    if (linewavesRef.current) {
      linewavesRef.current.style.setProperty('--waves-opacity', Math.max(0, Math.min(1, value)).toFixed(3))
    }
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.pause()

    return () => {
      // Cleanup if needed
    }
  }, [])

  // Update video time range when metadata loads
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      // Force re-render to update videoTime with correct duration
      // This is handled by the videoTime.destroy() and recreation if needed
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata)
  }, [])

  // Reveal-on-scroll animations scoped to this page only
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('.reveal-section'))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const section = entry.target
          section.classList.add('is-visible')

          anime.remove(section.querySelectorAll('[data-animate]'))
          anime({
            targets: section.querySelectorAll('[data-animate]'),
            opacity: [0, 1],
            translateY: [42, 0],
            scale: [0.985, 1],
            easing: 'easeOutExpo',
            duration: 920,
            delay: anime.stagger(120),
          })

          observer.unobserve(section)
        })
      },
      {
        threshold: 0.28,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="scroll-journey" id="hero" ref={journeyRef}>
        <div className="frame-stage" aria-hidden="true">
          <video
            className="frame-video"
            ref={videoRef}
            src="/frames-scrub.mp4"
            preload="auto"
            muted
            playsInline
            tabIndex={-1}
            aria-hidden="true"
          />
          <div className="frame-overlay" />
          <div className="linewaves-hero" ref={linewavesRef}>
            <LineWaves 
              color1="#1a9a9a" 
              color2="#217878" 
              color3="#0d5a5a" 
              brightness={0.25}
              speed={0.35}
              rotation={-22}
              innerLineCount={24}
              outerLineCount={28}
              warpIntensity={0.8}
              edgeFadeWidth={0.3}
              colorCycleSpeed={0.8}
            />
          </div>
        </div>

        <div className="hero-wrap">
          <h1 className="hero-shine-text">
            Electrical and Computer Engineering
          </h1>
          <div className="caption-wrap" ref={captionRef}>
            <p className="eyebrow">College of Engineering Trivandrum</p>
            <p className="subline">
              Bridging electrical engineering and computing for tomorrow's technology.
            </p>
          </div>
        </div>

        <div className="scroll-indicator" ref={scrollHintRef}>
          <span className="scroll-indicator-mouse" aria-hidden="true" />
        </div>
      </section>
      <MarqueeLinks />

      {/* ── Program Overview ── */}
      <section className="content-sections overview-section" id="overview">
        <div className="section-head">
          <span className="section-eyebrow">Program Overview</span>
          <h2>Electrical and Computer Engineering (EL/EO)</h2>
        </div>
        <div className="section-body">
          <p>
            Electrical and Computer Engineering (EL/EO) is CET's newest B.Tech program, introduced in 2024. The course focuses on integrating computing technologies with electrical engineering to design smarter and more efficient systems. By combining principles of electronics, programming, and system design, it enables the development of intelligent solutions for automation, control, communication, and real-time monitoring. This interdisciplinary approach prepares students to build adaptive, high-performance electrical and electronic systems for a wide range of modern applications.
          </p>
          <div className="program-badges">
            <div className="shiny-badge">
              <span className="badge-indicator">Duration</span>
              <span className="badge-value">4 Years</span>
            </div>
            <div className="shiny-badge">
              <span className="badge-indicator">Structure</span>
              <span className="badge-value">8 Semesters</span>
            </div>
            <div className="shiny-badge">
              <span className="badge-indicator">Degree</span>
              <span className="badge-value">B.Tech</span>
            </div>
            <div className="shiny-badge">
              <span className="badge-indicator">Capacity</span>
              <span className="badge-value">Intake: 60</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notices ── */}
      <section className="content-sections notices-feature-section" id="notices">
        <div className="section-head notices-head">
          <h2>Latest Notices</h2>
          <p className="notices-subtitle">Stay updated with important announcements</p>
        </div>
        <Link to="/notices" className="notices-feature-card notices-feature-card--link">
          <div className="notices-meta">
            <span className="notice-tag notice-tag-pinned">Pinned</span>
            <span className="notice-tag">Time Table</span>
          </div>
          <div className="notice-copy">
            <h3>Semester Exam Time Table for S2 &amp; S4</h3>
            <p className="notice-description">
              KTU Semester exam timetables for EL S2 and S4 batches have been released.
            </p>
          </div>
          <span className="notice-arrow" aria-hidden="true">›</span>
        </Link>
        <div style={{ textAlign: 'center' }}>
          <Link to="/notices" className="shiny-badge" style={{
            display: 'inline-block', borderRadius: '16px', fontWeight: 700,
            fontSize: '1.18rem', padding: '1.1rem 2.5rem', textDecoration: 'none',
            margin: 0, boxShadow: '0 2px 16px 0 rgba(20,24,32,0.13)', verticalAlign: 'top',
          }}>View all notices &rarr;</Link>
        </div>
      </section>

      {/* ── Academics ── */}
      <section className="content-sections notices-feature-section" id="academics-preview">
        <div className="section-head notices-head">
          <h2>Academics</h2>
          <p className="notices-subtitle">Notes, question papers &amp; syllabus — all in one place</p>
        </div>
        <Link to="/academics" className="notices-feature-card notices-feature-card--link">
          <div className="notices-meta">
            <span className="notice-tag">Resources</span>
            <span className="notice-tag">Sem 1–4</span>
          </div>
          <div className="notice-copy">
            <h3>Notes &amp; Question Papers</h3>
            <p className="notice-description">
              Semester-wise subject notes and previous series/semester exam papers for Sem 1–4, all shared via Google Drive and organised by subject.
            </p>
          </div>
          <span className="notice-arrow" aria-hidden="true">›</span>
        </Link>
        <div style={{ textAlign: 'center' }}>
          <Link to="/academics" className="shiny-badge" style={{
            display: 'inline-block', borderRadius: '16px', fontWeight: 700,
            fontSize: '1.18rem', padding: '1.1rem 2.5rem', textDecoration: 'none',
            margin: 0, boxShadow: '0 2px 16px 0 rgba(20,24,32,0.13)', verticalAlign: 'top',
          }}>Explore resources &rarr;</Link>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="content-sections notices-feature-section" id="achievements-preview">
        <div className="section-head notices-head">
          <h2>Achievements</h2>
          <p className="achievements-caption" style={{ margin: '0.3em 0 0.7em 0', color: '#b6c6e0', fontSize: '1.04rem', fontWeight: 400 }}>
            Check out some of the cool things our folks have been up to!
          </p>
        </div>
        <div className="home-achieve-grid">
          {achievements.filter(a => a.featured).slice(0, 3).map((ach) => (
            <Link to="/students" className="home-achieve-card" key={ach.id}>
              <img
                src={ach.img || 'https://placehold.co/340x180/png'}
                alt={ach.imgAlt}
              />
              <div className="home-achieve-card__top">
                <span className="home-achieve-card__icon" aria-hidden="true">🏆</span>
              </div>
              <h3 className="home-achieve-card__title">{ach.title}</h3>
              <span className="home-achieve-card__arrow" aria-hidden="true">›</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/students" className="shiny-badge" style={{
            display: 'inline-block', borderRadius: '16px', fontWeight: 700,
            fontSize: '1.18rem', padding: '1.1rem 2.5rem', textDecoration: 'none',
            margin: 0, boxShadow: '0 2px 16px 0 rgba(20,24,32,0.13)', verticalAlign: 'top',
          }}>View All Achievements &rarr;</Link>
        </div>
      </section>

      <section className="content-sections notices-feature-section" id="help-preview">
        <div className="section-head notices-head">
          <h2>Need a hand?</h2>
          <p className="notices-subtitle">Stuck with something? Facing a problem, big or small? We’re here to help—no judgment, just support. Reach out and we’ll do our best to sort it out, quietly and quickly.</p>
        </div>
        <div style={{ textAlign: 'center', margin: '1.2rem 0 0.5rem 0', fontSize: '1.05rem', color: '#b16e7c' }}>
          <span style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
            🫂 Your message is confidential. The EL Welfare team is friendly, and you can even submit anonymously if you want!
          </span>
          <br />
          <Link to="/grievances" className="shiny-badge" style={{
            display: 'inline-block', borderRadius: '16px', fontWeight: 700,
            fontSize: '1.08rem', padding: '0.85rem 2rem', textDecoration: 'none',
            margin: 0, boxShadow: '0 2px 16px 0 rgba(20,24,32,0.13)', verticalAlign: 'top',
          }}>Open grievance form &rarr;</Link>
        </div>
      </section>
    </>
  )
}

function App() {
  const navItems = useMemo(
    () => [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Academics', to: '/academics' },
      { label: 'Students', to: '/students' },
      { label: 'Notices', to: '/notices' },
      { label: 'Help', to: '/grievances' },
    ],
    [],
  )

  function Layout({ children }) {
    const location = useLocation();

    useEffect(() => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }, [location.pathname, location.hash]);

    // Determine active index for GooeyNav
    let activeIdx = 0;
    if (location.pathname === '/grievances') activeIdx = 5;
    else if (location.pathname === '/notices') activeIdx = 4;
    else if (location.pathname === '/students') activeIdx = 3;
    else if (location.pathname === '/academics') activeIdx = 2;
    else if (location.pathname === '/about') activeIdx = 1;
    else activeIdx = 0;

    return (
      <>
        <div className="global-bg-container">
          <Dither waveColor={[0.13, 0.47, 0.47]} enableMouseInteraction={true} disableAnimation={false} waveSpeed={0.06} waveAmplitude={0.27} mouseRadius={0.4} />
          <div className="global-bg-blur"></div>
        </div>
        <div className="site-nav">
          <GooeyNav
            className="site-gooey-nav"
            items={navItems}
            initialActiveIndex={activeIdx}
            animationTime={520}
            particleCount={14}
            particleDistances={[72, 14]}
            particleR={92}
            timeVariance={180}
          />
        </div>
        <div className="site-nav">
          <GooeyNav
            className="site-gooey-nav"
            items={navItems}
            initialActiveIndex={activeIdx}
            animationTime={380}
            particleCount={8}
            particleDistances={[60, 10]}
            particleR={80}
            timeVariance={120}
          />
        </div>
        <main className="site-main">
          {children}
        </main>
        <div className="site-footer-layer">
          <SiteFooter />
        </div>
      </>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/grievances" element={<GrievancesPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/students" element={<StudentsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
