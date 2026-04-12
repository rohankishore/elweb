import { useEffect, useMemo, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import GooeyNav from './component/GooeyNav'
import MarqueeLinks from './component/MarqueeLinks'
import './App.css'
import ShinyText from './component/ShinyText'
import NoticeSection from './component/NoticeSection';
import NoticesPage from './component/NoticesPage';

function App() {
  const videoRef = useRef(null)
  const captionRef = useRef(null)
  const scrollHintRef = useRef(null)
  const journeyRef = useRef(null)

  const navItems = useMemo(
    () => [
      { label: 'Hero', href: '#hero' },
      { label: 'Overview', href: '#overview' },
      { label: 'Domains', href: '#domains' },
      { label: 'Outcomes', href: '#pathways' },
      { label: 'Faculty', href: '#faculty' },
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

    const scrubFps = 24
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

  return (
    <>
      <div className="site-nav">
        <GooeyNav
          className="site-gooey-nav"
          items={navItems}
          initialActiveIndex={0}
          animationTime={520}
          particleCount={14}
          particleDistances={[72, 14]}
          particleR={92}
          timeVariance={180}
        />
      </div>

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
            content nahiii
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
      <main className="content-sections">
        <section className="reveal-section academic-section" id="domains">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Study Domains</p>
            <h2>Major Academic and Technical Areas</h2>
          </header>
          <div className="section-body" data-animate>
            <h3>Electronics and Devices</h3>
            <ul>
              <li>Analog and digital circuit design</li>
              <li>Microelectronics and VLSI basics</li>
              <li>Embedded system integration</li>
            </ul>
            <h3>Computing and Intelligence</h3>
            <ul>
              <li>Signals, systems, and control</li>
              <li>Machine learning for engineering</li>
              <li>Real-time architecture and automation</li>
            </ul>
            <h3>Energy and Infrastructure</h3>
            <ul>
              <li>Power electronics and drives</li>
              <li>Smart grids and energy management</li>
              <li>Sustainable electrical systems</li>
            </ul>
          </div>
        </section>

        <section className="reveal-section academic-section" id="pathways">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Outcomes</p>
            <h2>Career and Higher-Study Pathways</h2>
          </header>
          <div className="section-body" data-animate>
            <h3>Professional Roles</h3>
            <ul>
              <li>Embedded Systems Engineer</li>
              <li>Control and Automation Engineer</li>
              <li>Power Systems and Grid Analyst</li>
              <li>Electronics Product Development Engineer</li>
            </ul>
            <h3>Advanced Tracks</h3>
            <ul>
              <li>MS and MTech in ECE, EE, and CS domains</li>
              <li>Research pathways in AI, robotics, and IC design</li>
              <li>Interdisciplinary programs in data and energy systems</li>
              <li>Innovation and startup-oriented technical ventures</li>
            </ul>
          </div>
        </section>

        <section className="reveal-section academic-section faculty-section" id="faculty">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Faculty</p>
            <h2>Meet Our Faculty Team</h2>
          </header>
          <div className="section-body" data-animate>
            <ul>
              {facultyProfiles.map((faculty) => (
                <li key={faculty.name} style={{display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.1rem'}}>
                  <img src={faculty.photo} alt={faculty.name} style={{width: '3.2rem', height: '3.2rem', borderRadius: '50%', objectFit: 'cover'}} />
                  <div>
                    <strong>{faculty.name}</strong><br />
                    <span style={{color: '#7ec9c9'}}>{faculty.position}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
  </>
  )
}

export default App
