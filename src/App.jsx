import { useEffect, useMemo, useRef, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import StaggeredMenu from './component/StaggeredMenu'
import './App.css'

function App() {
  const totalFrames = 240
  const [isNavVisible, setIsNavVisible] = useState(false)
  const canvasRef = useRef(null)
  const captionRef = useRef(null)
  const scrollHintRef = useRef(null)
  const journeyRef = useRef(null)

  const navItems = useMemo(
    () => [
      { label: 'Hero', link: '#hero' },
      { label: 'Overview', link: '#overview' },
      { label: 'Domains', link: '#domains' },
      { label: 'Outcomes', link: '#pathways' },
      { label: 'Faculty', link: '#faculty' },
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
      {
        name: 'Faculty 5',
        position: 'Assistant Professor, Intelligent Control',
        photo: 'https://i.pravatar.cc/420?img=52',
      },
    ],
    [],
  )

  const frameList = useMemo(
    () =>
      Array.from({ length: totalFrames }, (_, i) => {
        const n = String(i + 1).padStart(3, '0')
        return `/frames/ezgif-frame-${n}.jpg`
      }),
    [totalFrames],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d', { alpha: false })
    if (!context) return

    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = 'high'

    const images = new Array(totalFrames)
    const loaded = new Array(totalFrames).fill(false)

    let rafId = 0
    let disposed = false
    let targetFrame = 0
    let currentFrame = 0
    let lastDrawnFrame = -1

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.round(window.innerWidth * dpr)
      const height = Math.round(window.innerHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawFrame = (frameFloat, force = false) => {
      const intended = Math.max(
        0,
        Math.min(totalFrames - 1, Math.round(frameFloat)),
      )

      let drawIndex = intended
      if (!loaded[drawIndex]) {
        while (drawIndex >= 0 && !loaded[drawIndex]) {
          drawIndex -= 1
        }
      }

      if (drawIndex < 0 || !images[drawIndex]) return
      if (!force && drawIndex === lastDrawnFrame) return

      const image = images[drawIndex]
      const viewWidth = window.innerWidth
      const viewHeight = window.innerHeight
      const scale = Math.max(
        viewWidth / image.naturalWidth,
        viewHeight / image.naturalHeight,
      )
      const drawWidth = image.naturalWidth * scale
      const drawHeight = image.naturalHeight * scale
      const x = (viewWidth - drawWidth) / 2
      const y = (viewHeight - drawHeight) / 2

      context.clearRect(0, 0, viewWidth, viewHeight)
      context.drawImage(image, x, y, drawWidth, drawHeight)
      lastDrawnFrame = drawIndex
    }

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
      targetFrame = progress * (totalFrames - 1)
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

    const updateNavVisibility = () => {
      const progress = getJourneyProgress()
      const shouldShow = progress >= 0.99
      setIsNavVisible((prev) => (prev === shouldShow ? prev : shouldShow))
    }

    const onScroll = () => {
      updateTarget()
      updateCaptionReveal()
      updateScrollHint()
      updateNavVisibility()
    }

    const onResize = () => {
      sizeCanvas()
      lastDrawnFrame = -1
      updateTarget()
      updateCaptionReveal()
      updateScrollHint()
      updateNavVisibility()
      drawFrame(currentFrame, true)
    }

    const animate = () => {
      if (disposed) return
      currentFrame += (targetFrame - currentFrame) * 0.16
      if (Math.abs(targetFrame - currentFrame) < 0.02) {
        currentFrame = targetFrame
      }
      drawFrame(currentFrame)
      rafId = requestAnimationFrame(animate)
    }

    frameList.forEach((src, index) => {
      const image = new Image()
      image.decoding = 'async'
      image.src = src
      image.onload = () => {
        loaded[index] = true
        if (index === 0 || Math.round(currentFrame) === index) {
          drawFrame(currentFrame, true)
        }
      }
      images[index] = image
    })

    sizeCanvas()
    updateTarget()
    updateCaptionReveal()
    updateScrollHint()
    updateNavVisibility()
    drawFrame(0, true)
    rafId = requestAnimationFrame(animate)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [frameList, totalFrames])

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
      <div className={`site-nav${isNavVisible ? ' is-visible' : ''}`}>
        <StaggeredMenu
          className="site-staggered"
          isFixed
          position="right"
          logoUrl="/frames/ezgif-frame-001.jpg"
          items={navItems}
          displaySocials={false}
          displayItemNumbering={false}
          colors={['#143252', '#0d2742']}
          accentColor="#2c7dc8"
          menuButtonColor="#e7f6ff"
          openMenuButtonColor="#e7f6ff"
        />
      </div>

      <section className="scroll-journey" id="hero" ref={journeyRef}>
        <div className="frame-stage" aria-hidden="true">
          <canvas className="frame-canvas" ref={canvasRef} />
          <div className="frame-overlay" />
        </div>

        <div className="hero-wrap">
          <h1>Electrical and Computer Engineering</h1>
          <div className="caption-wrap" ref={captionRef}>
            <p className="eyebrow">College of Engineering Trivandrum</p>
            <p className="subline">
              content venamm
            </p>
          </div>
        </div>

        <div className="scroll-indicator" ref={scrollHintRef}>
          <span className="scroll-indicator-mouse" aria-hidden="true" />
        </div>
      </section>

      <main className="content-sections">
        <section className="reveal-section academic-section" id="overview">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Program Overview</p>
            <h2>Electrical and Computer Engineering at a Glance</h2>
          </header>
          <div className="section-body two-col">
            <p className="lead" data-animate>
              content kitteetilla sir
            </p>
            <dl className="definition-grid" data-animate>
              <div>
                <dt>Duration</dt>
                <dd>4 Years</dd>
              </div>
              <div>
                <dt>Structure</dt>
                <dd>Core + Electives + Labs</dd>
              </div>
              <div>
                <dt>Capstone</dt>
                <dd>Industry or Research Project</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Hardware-Software Systems</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="reveal-section academic-section" id="domains">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Study Domains</p>
            <h2>Major Academic and Technical Areas (as of now only random details mathre illu)</h2>
          </header>
          <div className="section-body three-col" data-animate>
            <article>
              <h3>Electronics and Devices</h3>
              <ul>
                <li>Analog and digital circuit design</li>
                <li>Microelectronics and VLSI basics</li>
                <li>Embedded system integration</li>
              </ul>
            </article>
            <article>
              <h3>Computing and Intelligence</h3>
              <ul>
                <li>Signals, systems, and control</li>
                <li>Machine learning for engineering</li>
                <li>Real-time architecture and automation</li>
              </ul>
            </article>
            <article>
              <h3>Energy and Infrastructure</h3>
              <ul>
                <li>Power electronics and drives</li>
                <li>Smart grids and energy management</li>
                <li>Sustainable electrical systems</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="reveal-section academic-section" id="pathways">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Outcomes</p>
            <h2>Career and Higher-Study Pathways</h2>
          </header>
          <div className="section-body split-list" data-animate>
            <div>
              <h3>Professional Roles</h3>
              <ul>
                <li>Embedded Systems Engineer</li>
                <li>Control and Automation Engineer</li>
                <li>Power Systems and Grid Analyst</li>
                <li>Electronics Product Development Engineer</li>
              </ul>
            </div>
            <div>
              <h3>Advanced Tracks</h3>
              <ul>
                <li>MS and MTech in ECE, EE, and CS domains</li>
                <li>Research pathways in AI, robotics, and IC design</li>
                <li>Interdisciplinary programs in data and energy systems</li>
                <li>Innovation and startup-oriented technical ventures</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="reveal-section academic-section faculty-section" id="faculty">
          <header className="section-head" data-animate>
            <p className="section-eyebrow">Faculty</p>
            <h2>Meet Our Faculty Team (ethekyo aalkar)</h2>
          </header>

          <div className="faculty-grid">
            {facultyProfiles.map((faculty) => (
              <article className="faculty-card" key={faculty.name} data-animate>
                <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
                <div className="faculty-content">
                  <h3>{faculty.name}</h3>
                  <p>{faculty.position}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="faculty-actions" data-animate>
            <button className="faculty-button" type="button">
              View All Faculties
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
