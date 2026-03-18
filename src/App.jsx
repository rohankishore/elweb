import { useEffect, useMemo, useRef } from 'react'
import './App.css'

function App() {
  const totalFrames = 240
  const canvasRef = useRef(null)
  const heroRef = useRef(null)

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

    const updateHeroReveal = () => {
      const revealStart = Math.min(window.innerHeight * 0.08, 110)
      const revealDistance = Math.max(window.innerHeight * 0.24, 180)
      const reveal = Math.min(
        Math.max((window.scrollY - revealStart) / revealDistance, 0),
        1,
      )
      heroRef.current?.style.setProperty('--hero-reveal', reveal.toFixed(3))
    }

    const onScroll = () => {
      updateTarget()
      updateHeroReveal()
    }

    const onResize = () => {
      sizeCanvas()
      lastDrawnFrame = -1
      updateTarget()
      updateHeroReveal()
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
    updateHeroReveal()
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

  return (
    <>
      <div className="frame-stage" aria-hidden="true">
        <canvas className="frame-canvas" ref={canvasRef} />
        <div className="frame-overlay" />
      </div>

      <section className="scroll-journey">
        <div className="hero-wrap" ref={heroRef}>
          <p className="eyebrow">College of Engineering Trivandrum</p>
          <h1>Electrical and Computer Engineering</h1>
          <p className="subline">
            Scroll to navigate the visual sequence and explore the discipline
            where intelligent systems, circuits, and computation converge.
          </p>
        </div>
      </section>
    </>
  )
}

export default App
