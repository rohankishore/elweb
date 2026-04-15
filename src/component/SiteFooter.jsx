import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const decodeChars = 'ELCTRAPMOUIN'
const footerWords = ['EL', 'ELECTRICAL', 'COMPUTER']

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Grievances', to: '/grievances' },
  { label: 'Notices', to: '/notices' },
]

const footerStats = [
  { label: 'Program', value: 'B.Tech EL/EO' },
  { label: 'Duration', value: '4 Years' },
  { label: 'Structure', value: '8 Semesters' },
  { label: 'Capacity', value: 'Intake 60' },
]

function randomDecode(length) {
  return Array.from({ length }, () => decodeChars[Math.floor(Math.random() * decodeChars.length)]).join('')
}

export default function SiteFooter() {
  const footerRef = useRef(null)
  const [displayWord, setDisplayWord] = useState('EL')
  const [wordShift, setWordShift] = useState(0)

  const resources = useMemo(
    () => [
      {
        label: 'Syllabus Folder',
        href: 'https://drive.google.com/drive/folders/1X_GLuX7iMzN35Q03IfZfCNRgfCYZimMS',
      },
      {
        label: 'Grievance Form',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfSofrZwcA9tBGnzYc6X4gz7qexTZvATY6QFBV0J6jyQPxRKA/viewform?usp=publish-editor',
      },
    ],
    [],
  )

  useEffect(() => {
    let frameId = 0
    let stageTimeout = 0
    let cycleTimeout = 0
    let currentWord = 'EL'
    let sequenceIndex = 0

    const animateToWord = (targetWord, onDone) => {
      let frame = 0
      const totalFrames = 18

      const tick = () => {
        frame += 1
        const revealCount = Math.floor((frame / totalFrames) * targetWord.length)
        const nextWord = targetWord
          .split('')
          .map((char, index) => (index < revealCount ? char : randomDecode(1)))
          .join('')

        setDisplayWord(nextWord)

        if (frame < totalFrames) {
          frameId = window.setTimeout(tick, 45)
          return
        }

        currentWord = targetWord
        setDisplayWord(targetWord)
        onDone?.()
      }

      tick()
    }

    const runCycle = () => {
      sequenceIndex = (sequenceIndex + 1) % footerWords.length
      const targetWord = footerWords[sequenceIndex]

      animateToWord(targetWord, () => {
        cycleTimeout = window.setTimeout(runCycle, targetWord === 'EL' ? 1800 : 2200)
      })
    }

    cycleTimeout = window.setTimeout(runCycle, 2600)

    return () => {
      window.clearTimeout(frameId)
      window.clearTimeout(stageTimeout)
      window.clearTimeout(cycleTimeout)
      setDisplayWord(currentWord)
    }
  }, [])

  useEffect(() => {
    const updateShift = () => {
      const footer = footerRef.current
      if (!footer) return

      const rect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = 1 - Math.min(Math.max(rect.top / viewportHeight, 0), 1)
      const nextShift = 70 - progress * 130
      setWordShift(nextShift)
    }

    updateShift()
    window.addEventListener('scroll', updateShift, { passive: true })
    window.addEventListener('resize', updateShift)

    return () => {
      window.removeEventListener('scroll', updateShift)
      window.removeEventListener('resize', updateShift)
    }
  }, [])

  return (
    <footer className="site-footer" ref={footerRef}>
      <div
        className={`site-footer__word${displayWord.length > 8 ? ' site-footer__word--long' : ''}`}
        aria-hidden="true"
        style={{ transform: `translate(-50%, ${wordShift}px)` }}
      >
        {displayWord}
      </div>

      <div className="site-footer__panel">
        <div className="site-footer__brand">
          <span className="site-footer__eyebrow">EL Association</span>
          <h2 className="site-footer__title">Electrical and Computer Engineering</h2>
          <p className="site-footer__copy">
            CET&apos;s EL/EO program brings together electrical systems, computing, and practical
            engineering work for students building modern hardware-driven technology.
          </p>
        </div>

        <div className="site-footer__group">
          <h3>Explore</h3>
          <div className="site-footer__links">
            {footerLinks.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="site-footer__group">
          <h3>Program Data</h3>
          <div className="site-footer__stats">
            {footerStats.map((stat) => (
              <div className="site-footer__stat" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__group">
          <h3>Resources</h3>
          <div className="site-footer__links">
            {resources.map((resource) => (
              <a key={resource.label} href={resource.href} target="_blank" rel="noreferrer">
                {resource.label}
              </a>
            ))}
          </div>
          <p className="site-footer__meta">College of Engineering Trivandrum</p>
          <p className="site-footer__meta">Department pages and student resources in one place.</p>
        </div>
      </div>
    </footer>
  )
}
