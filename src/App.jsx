/*Some of the parts are ai generated , and i havent verified every one of them.
so the chances of breaking some shi is really high*/

import { useEffect, useMemo, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import GooeyNav from './component/GooeyNav'
import MarqueeLinks from './component/MarqueeLinks'
import './App.css'
import ShinyText from './component/ShinyText'
import NoticeSection from './component/NoticeSection';
import NoticesPage from './component/NoticesPage';
import AboutPage from './component/AboutPage';
import AcademicsPage from './component/AcademicsPage';
import GrievancesPage from './component/GrievancesPage';
import SiteFooter from './component/SiteFooter';

function App() {
  const videoRef = useRef(null)
  const captionRef = useRef(null)
  const scrollHintRef = useRef(null)
  const journeyRef = useRef(null)

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

  const facultyProfiles = useMemo(
    () => [
      {
        name: 'Faculty 1',
        position: 'Professor, Embedded Systems',
        photo: 'https://i.pravatar.cc/420?img=12',
      },
      {
        name: 'Faculty 2',
        position: 'Associate Professor, Power Electronics',
        photo: 'https://i.pravatar.cc/420?img=32',
      },
      {
        name: 'Faculty 3',
        position: 'Assistant Professor, Signal Processing',
        photo: 'https://i.pravatar.cc/420?img=36',
      },
      {
        name: 'Faculty 4',
        position: 'Professor, Communication Systems',
        photo: 'https://i.pravatar.cc/420?img=47',
      },

    ],
    [],
  )

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Lowered scrubFps for better performance (less frequent seeking)
    const scrubFps = 12
    const frameStep = 1 / scrubFps
    let duration = 0
    let desiredTime = 0
    let lastAppliedTime = -1
    let pendingTime = null
    let isSeeking = false
    let hasInitializedVideo = false
    let scrollRafId = 0
    let scrubRafId = 0

    const getJourneyProgress = () => {
      const journey = journeyRef.current
      if (!journey) return 0

      const journeyStart = journey.offsetTop
      const journeyEnd = Math.max(
        journeyStart + journey.offsetHeight - window.innerHeight,
        journeyStart + 1,
      )
      return Math.min(
        Math.max((window.scrollY - journeyStart) / (journeyEnd - journeyStart), 0),
        1,
      )
    }

    const updateTarget = () => {
      const progress = getJourneyProgress()
      return progress * duration
    }

    const updateDesiredFromScroll = () => {
      if (duration <= 0) return
      desiredTime = Math.min(Math.max(updateTarget(), 0), duration)
    }

    const seekToTime = (time) => {
      if (Math.abs(time - lastAppliedTime) < frameStep * 0.85) return

      if (isSeeking) {
        pendingTime = time
        return
      }

      isSeeking = true
      lastAppliedTime = time

      if (typeof video.fastSeek === 'function') {
        try {
          video.fastSeek(time)
          return
        } catch {
          // ellam sugham thanne?
        }
      }
      video.currentTime = time
    }
    

    const pumpScrub = () => {
      if (duration > 0) {
        const quantizedTime = Math.round(desiredTime / frameStep) * frameStep
        const targetTime = Math.min(Math.max(quantizedTime, 0), duration)
        seekToTime(targetTime)
      }

      scrubRafId = requestAnimationFrame(pumpScrub)
    }

    const updateCaptionReveal = () => {
      const progress = getJourneyProgress()
      const reveal = Math.min(Math.max((progress - 0.5) / 0.2, 0), 1)
      captionRef.current?.style.setProperty('--caption-reveal', reveal.toFixed(3))
    }

    const updateScrollHint = () => {
      const progress = getJourneyProgress()
      const hintOpacity = Math.min(Math.max(1 - progress / 0.18, 0), 1)
      scrollHintRef.current?.style.setProperty('--hint-opacity', hintOpacity.toFixed(3))
    }

    const onScroll = () => {
      if (scrollRafId) return
      scrollRafId = requestAnimationFrame(() => {
        scrollRafId = 0
        updateDesiredFromScroll()
        updateCaptionReveal()
        updateScrollHint()
      })
    }

    const onResize = () => {
      pendingTime = null
      isSeeking = false
      lastAppliedTime = -1
      updateDesiredFromScroll()
      updateCaptionReveal()
      updateScrollHint()
    }

    const syncVideoToScroll = () => {
      if (duration <= 0) return
      updateDesiredFromScroll()
    }

    const onVideoReady = () => {
      if (hasInitializedVideo) return
      hasInitializedVideo = true
      duration = Number.isFinite(video.duration) ? video.duration : 0
      syncVideoToScroll()
    }

    const onVideoSeeked = () => {
      isSeeking = false
      if (pendingTime === null) return

      const nextTime = pendingTime
      pendingTime = null
      seekToTime(nextTime)
    }

    video.preload = 'auto'
    video.muted = true
    video.playsInline = true
    video.pause()
    // Hardware acceleration hint: ensure your video is H.264 .mp4 for best performance
    // Example: ffmpeg -i input.mov -vcodec libx264 -acodec aac output.mp4
    video.addEventListener('loadedmetadata', onVideoReady)
    video.addEventListener('seeked', onVideoSeeked)

    syncVideoToScroll()
    updateCaptionReveal()
    updateScrollHint()
    scrubRafId = requestAnimationFrame(pumpScrub)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      if (scrollRafId) {
        cancelAnimationFrame(scrollRafId)
      }
      if (scrubRafId) {
        cancelAnimationFrame(scrubRafId)
      }
      video.removeEventListener('loadedmetadata', onVideoReady)
      video.removeEventListener('seeked', onVideoSeeked)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

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

  // Layout with nav and highlight logic
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
        {children}
        <SiteFooter />
      </>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
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
                  </div>

                  <div className="hero-wrap">
                    <h1 className="hero-shine-text">
                      Electrical and Computer Engineering
                    </h1>
                    <div className="caption-wrap" ref={captionRef}>
                      <p className="eyebrow">College of Engineering Trivandrum</p>
                      <p className="subline">
                        Bridging electrical engineering and computing for tomorrow’s technology.
                      </p>
                    </div>
                  </div>

                  <div className="scroll-indicator" ref={scrollHintRef}>
                    <span className="scroll-indicator-mouse" aria-hidden="true" />
                  </div>
                </section>

                <MarqueeLinks />
                <section className="content-sections overview-section" id="overview">
                  <div className="section-head">
                    <span className="section-eyebrow">Program Overview</span>
                    <h2>Electrical and Computer Engineering (EL/EO)</h2>
                  </div>
                  <div className="section-body">
                    <p>
                      Electrical and Computer Engineering (EL/EO) is CET’s newest B.Tech program, introduced in 2024. The course focuses on integrating computing technologies with electrical engineering to design smarter and more efficient systems. By combining principles of electronics, programming, and system design, it enables the development of intelligent solutions for automation, control, communication, and real-time monitoring. This interdisciplinary approach prepares students to build adaptive, high-performance electrical and electronic systems for a wide range of modern applications.
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
                <section className="content-sections notices-feature-section" id="notices">
                  <div className="section-head notices-head">
                    <h2>Latest Notices</h2>
                    <p className="notices-subtitle">Stay updated with important announcements</p>
                  </div>

                  <div className="notices-feature-card">
                    <div className="notices-meta">
                      <span className="notice-tag notice-tag-pinned">Pinned</span>
                      <span className="notice-tag">Time Table</span>
                    </div>
                    <div className="notice-copy">
                      <h3>Semester Exam Time Table for S2 & S4</h3>
                      <p className="notice-description">
                        KTU Semester exam timetables for EL S2 and S4 batches have been released.
                      </p>
                    </div>
                    <span className="notice-arrow" aria-hidden="true">›</span>
                  </div>
                  <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                    <Link to="/notices" className="shiny-badge" style={{
                      display: 'inline-block',
                      borderRadius: '16px',
                      fontWeight: 700,
                      fontSize: '1.18rem',
                      padding: '1.1rem 2.5rem',
                      textDecoration: 'none',
                      margin: 0,
                      boxShadow: '0 2px 16px 0 rgba(20,24,32,0.13)',
                      verticalAlign: 'top',
                    }}>View all notices &rarr;</Link>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/grievances" element={<GrievancesPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/students" element={
            <div style={{ padding: '8rem 2rem', textAlign: 'center', color: 'white', minHeight: '100vh' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--display)' }}>Student's Corner</h1>
              <p style={{ color: 'var(--text-muted)', alignContent: 'left' }}>Details about all the students and their achievements. Data will be updated here soon.</p>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
