import { useEffect, useMemo, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import './App.css'

function App() {
  const totalFrames = 240
  const canvasRef = useRef(null)
  const captionRef = useRef(null)

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

    const updateTarget = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
      targetFrame = progress * (totalFrames - 1)
    }

    const updateCaptionReveal = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
      const reveal = Math.min(Math.max((progress - 0.5) / 0.2, 0), 1)
      captionRef.current?.style.setProperty('--caption-reveal', reveal.toFixed(3))
    }

    const onScroll = () => {
      updateTarget()
      updateCaptionReveal()
    }

    const onResize = () => {
      sizeCanvas()
      lastDrawnFrame = -1
      updateTarget()
      updateCaptionReveal()
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
      <div className="frame-stage" aria-hidden="true">
        <canvas className="frame-canvas" ref={canvasRef} />
        <div className="frame-overlay" />
      </div>

      <section className="scroll-journey">
        <div className="hero-wrap">
          <h1>Electrical and Computer Engineering</h1>
          <div className="caption-wrap" ref={captionRef}>
            <p className="eyebrow">College of Engineering Trivandrum</p>
            <p className="subline">
              Scroll to navigate the visual sequence and explore the discipline
              where intelligent systems, circuits, and computation converge.
            </p>
          </div>
        </div>
      </section>

      <main className="content-sections">
        <section className="reveal-section">
          <div className="section-shell">
            <p className="section-kicker" data-animate>
              Core Spectrum
            </p>
            <h2 data-animate>Engineering Across Atoms, Bits, and Energy</h2>
            <p className="section-copy" data-animate>
              From microelectronics and embedded architectures to renewable
              systems and intelligent control, the program blends physical
              design with computational thinking.
            </p>
            <div className="metric-grid">
              <article data-animate>
                <span>Signal Systems</span>
                <strong>Adaptive DSP + AI</strong>
              </article>
              <article data-animate>
                <span>Power Networks</span>
                <strong>Grid + Storage Intelligence</strong>
              </article>
              <article data-animate>
                <span>Embedded Platforms</span>
                <strong>Low-latency Compute Design</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="reveal-section">
          <div className="section-shell">
            <p className="section-kicker" data-animate>
              Applied Research
            </p>
            <h2 data-animate>Build, Validate, Iterate in Live Systems</h2>
            <p className="section-copy" data-animate>
              Studio-style labs connect hardware prototyping and software
              simulation to real constraints: efficiency, reliability, and
              human-centered operation.
            </p>
            <div className="chip-row" data-animate>
              <span>Autonomous Robotics</span>
              <span>IoT Instrumentation</span>
              <span>Machine Vision</span>
              <span>VLSI and FPGA</span>
              <span>Smart Energy Control</span>
            </div>
          </div>
        </section>

        <section className="reveal-section">
          <div className="section-shell">
            <p className="section-kicker" data-animate>
              Career Trajectory
            </p>
            <h2 data-animate>Design the Systems That Move the Future</h2>
            <p className="section-copy" data-animate>
              Graduate into product engineering, R&amp;D, and innovation teams
              that shape communication infrastructure, autonomous platforms, and
              next-generation computing.
            </p>
            <div className="timeline" data-animate>
              <div>
                <span>01</span>
                <p>Foundation in circuits, computation, and modeling</p>
              </div>
              <div>
                <span>02</span>
                <p>Deep specialization through labs and advanced electives</p>
              </div>
              <div>
                <span>03</span>
                <p>Capstone systems built for measurable real-world impact</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
