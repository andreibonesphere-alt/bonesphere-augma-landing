import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import posthog from './posthog.js'

const scrollToForm = (e, location = 'unknown') => {
  if (e) e.preventDefault()
  posthog.capture('cta_clicked', { location })
  const el = document.getElementById('form-section')
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset
  const distance = Math.abs(window.pageYOffset - top)
  const focusFirstInput = () => {
    const firstInput = el.querySelector('input[name="name"]')
    if (firstInput) firstInput.focus({ preventScroll: true })
  }
  if (distance < 80) { focusFirstInput(); return }
  window.scrollTo({ top, behavior: 'smooth' })
  setTimeout(focusFirstInput, 700)
}

/* ─── Mobile detection hook ─── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}
import preOpImg from './assets/pre-op.png'
import postOpImg from './assets/post-op.png'
import histology12Img from './assets/histology-12-weeks.png'
import histology8Img from './assets/histology-8-months.jpg'
import radiologyPreOpImg from './assets/radiology-pre-op.jpg'
import radiologyPostOpImg from './assets/radiology-post-op.jpg'
import radiology1MonthImg from './assets/radiology-1-month.jpg'
import radiology3MonthsImg from './assets/radiology-3-months.jpg'
import radiologyCbctImg from './assets/radiology-cbct-triptych.jpg'
import socketCoverImg from './assets/socket-cover.png'
import caz1_01 from './assets/caz1-01-descriere.png'
import caz1_02 from './assets/caz1-02-augmentare.png'
import caz1_03 from './assets/caz1-03-extractie.png'
import caz1_04 from './assets/caz1-04-bond-apatite.png'
import caz1_05 from './assets/caz1-05-sutura.png'
import caz1_06 from './assets/caz1-06-3luni.png'
import caz1_07 from './assets/caz1-07-6luni.png'
import caz1_08 from './assets/caz1-08-4ani-a.png'
import caz1_09 from './assets/caz1-09-4ani-b.png'
import caz1_10 from './assets/caz1-10-4ani-c.png'
import caz2_01 from './assets/caz2-01.png'
import caz2_02 from './assets/caz2-02.jpeg'
import caz2_03 from './assets/caz2-03.png'
import caz2_04 from './assets/caz2-04.png'
import caz2_05 from './assets/caz2-05.png'
import caz2_06 from './assets/caz2-06.png'
import caz2_07 from './assets/caz2-07.png'
import caz2_08 from './assets/caz2-08.png'
import caz2_09 from './assets/caz2-09.png'
import caz2_10 from './assets/caz2-10.png'
import caz2_11 from './assets/caz2-11.png'
import caz2_12 from './assets/caz2-12.png'
import caz2_13 from './assets/caz2-13.png'
import caz2_14 from './assets/caz2-14.png'
import caz2_15 from './assets/caz2-15.png'
import caz3_01 from './assets/caz3-01.png'
import caz3_02 from './assets/caz3-02.png'
import caz3_03 from './assets/caz3-03.png'
import caz3_04 from './assets/caz3-04.png'
import caz3_05 from './assets/caz3-05.png'
import caz3_06 from './assets/caz3-06.png'
import caz3_07 from './assets/caz3-07.png'
import caz3_08 from './assets/caz3-08.png'
import caz3_09 from './assets/caz3-09.png'
import caz3_10 from './assets/caz3-10.png'
import caz3_11 from './assets/caz3-11.png'
import caz3_12 from './assets/caz3-12.png'
import testimonialBartos from './assets/testimonial-bartos.png'
import testimonialParaschivescu from './assets/testimonial-paraschivescu.png'
import testimonialCaruntu from './assets/testimonial-caruntu.png'
import socketIcon from './assets/solutions/socketAugma_icon_.svg'
import lateralIcon from './assets/solutions/lateralAugma_icon_.svg'
import sinusIcon from './assets/solutions/sinusAugma_icon_.svg'
import fullArchIcon from './assets/solutions/full-archAugma_icon_.svg'
import aestheticIcon from './assets/solutions/aestheticAugma_icon_.svg'
import cystIcon from './assets/solutions/cystAugma_icon_.svg'
import periIcon from './assets/solutions/Asset-6Augma_icon_w_frame.svg'
import zygomaIcon from './assets/solutions/zygomaAugma_icon_.svg'

/* ─── Reusable animation helpers ─── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: isMobile ? 0.35 : 0.8, ease: [0.22, 1, 0.36, 1], delay: isMobile ? delay * 0.5 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FadeIn({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: isMobile ? 0.3 : 1, ease: 'easeOut', delay: isMobile ? delay * 0.5 : delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isNavMobile, setIsNavMobile] = useState(() => window.innerWidth < 1024)
  const isMobile = useIsMobile()
  const rafRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const handler = (e) => { setIsNavMobile(e.matches); if (!e.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40)
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    if (scrolled && menuOpen) setMenuOpen(false)
  }, [scrolled])

  const navLinks = [['Cum funcționează', '#cum-functioneaza'], ['Beneficii', '#benefits'], ['Dovezi', '#proof'], ['Testimoniale', '#testimonials']]

  const active = scrolled || menuOpen
  const blurVal = isMobile ? 'none' : 'blur(12px)'

  // isNavMobile = viewport < 1024px (matches CSS .hamburger breakpoint)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          transform: 'translateZ(0)',
          transition: 'background 0.3s, box-shadow 0.3s',
          background: active ? 'rgba(252,249,248,0.97)' : 'transparent',
          backdropFilter: active ? blurVal : 'none',
          WebkitBackdropFilter: active ? blurVal : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0,74,93,0.08)' : 'none',
        }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/logo-teal.png" alt="Bonesphere" style={{ height: 26, width: 'auto', display: 'block' }} fetchpriority="high" />
          </a>

          {/* Desktop links */}
          {!isNavMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{ fontSize: 14, fontWeight: 500, color: '#3f484c', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#004a5d'}
                  onMouseLeave={e => e.target.style.color = '#3f484c'}
                >
                  {label}
                </a>
              ))}
            </div>
          )}

          {/* Desktop CTA */}
          {!isNavMobile && (
            <motion.a
              href="#form-section"
              onClick={(e) => scrollToForm(e, 'nav_desktop')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#004a5d',
                color: 'white',
                padding: '12px 28px',
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 2,
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
            >
              Demonstrație
            </motion.a>
          )}

          {/* Hamburger */}
          {isNavMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
            aria-label="Meniu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 24, height: 2, background: '#004a5d', borderRadius: 2, transformOrigin: 'center' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', width: 24, height: 2, background: '#004a5d', borderRadius: 2 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 24, height: 2, background: '#004a5d', borderRadius: 2, transformOrigin: 'center' }}
            />
          </button>
          )}
        </div>
      </nav>

      {/* Mobile menu — only rendered when hamburger is visible */}
      {isNavMobile && (
      <div
        style={{
          position: 'fixed',
          top: 58,
          left: 0,
          right: 0,
          zIndex: 49,
          background: 'rgba(252,249,248,0.98)',
          padding: menuOpen ? '24px 20px 32px' : '0 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          boxShadow: menuOpen ? '0 16px 40px rgba(0,74,93,0.1)' : 'none',
          transform: 'translateZ(0)',
          maxHeight: menuOpen ? '100vh' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, padding 0.3s',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {navLinks.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: 18, fontWeight: 500, color: '#3f484c', textDecoration: 'none', padding: '14px 0', borderBottom: '1px solid rgba(191,200,205,0.2)' }}
          >
            {label}
          </a>
        ))}
        <a
          href="#form-section"
          onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => scrollToForm(null, 'nav_mobile'), 350) }}
          style={{ marginTop: 16, display: 'block', background: '#004a5d', color: 'white', padding: '16px 24px', fontSize: 15, fontWeight: 600, borderRadius: 2, textDecoration: 'none', textAlign: 'center' }}
        >
          Demonstrație clinică
        </a>
      </div>
      )}
    </>
  )
}

/* ─── Chemistry Hero Background ─── */
function ChemistryHeroBg() {
  const isMobile = useIsMobile()
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #010c12 0%, #031a26 55%, #010e18 100%)', overflow: 'hidden' }}>

      {/* Dot grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="38" height="38" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.6" fill="rgba(0,150,190,0.18)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      {/* Ambient glow blobs */}
      <div style={{ position: 'absolute', width: '55vw', height: '55vh', top: '-8%', left: '-5%', background: 'radial-gradient(ellipse, rgba(0,74,93,0.5) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '55vw', height: '55vh', top: '-8%', right: '-5%', background: 'radial-gradient(ellipse, rgba(0,74,93,0.5) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: '65vw', height: '60vh', bottom: '0%', left: '17%', background: 'radial-gradient(ellipse, rgba(0,99,124,0.4) 0%, transparent 65%)', filter: 'blur(90px)', pointerEvents: 'none' }} />

      {/* Main diagram */}
      <motion.div
        className="hero-chem-diagram"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 0.78, scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut', delay: 0.3 }}
        style={{ position: 'absolute', top: '50%', left: '46%', transform: 'translateY(-50%)', width: 'min(52vw, 700px)' }}
      >
        <svg viewBox="0 0 980 510" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <filter id="hbg-boxglow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="9" result="blur" />
              <feFlood floodColor="rgba(0,160,200,0.55)" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="hbg-mainglow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="blur" />
              <feFlood floodColor="rgba(0,190,230,0.65)" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="hbg-boxfill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(0,55,75,0.65)" />
              <stop offset="100%" stopColor="rgba(0,85,110,0.35)" />
            </linearGradient>
            <linearGradient id="hbg-mainfill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(0,75,100,0.72)" />
              <stop offset="100%" stopColor="rgba(0,105,135,0.42)" />
            </linearGradient>
          </defs>

          {/* ── Left box — Ipsos Calcinat ── */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.9 }}>
            <rect x="10" y="10" width="425" height="188" rx="10" fill="url(#hbg-boxfill)" />
            <rect x="10" y="10" width="425" height="188" rx="10" fill="none" stroke="rgba(0,165,205,0.55)" strokeWidth="1" filter="url(#hbg-boxglow)" />
            <text x="222" y="58" textAnchor="middle" fill="rgba(100,220,245,0.88)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.1em">IPSOS CALCINAT</text>
            <text x="222" y="104" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="27" fontFamily="Inter, sans-serif" fontWeight="200">
              CaSO<tspan dy="9" fontSize="18">4</tspan><tspan dy="-9">·½H</tspan><tspan dy="9" fontSize="18">2</tspan><tspan dy="-9">O</tspan>
            </text>
            <text x="222" y="142" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="12.5" fontFamily="Inter, sans-serif" letterSpacing="0.02em">Modelabil, timp lung de priză</text>
          </motion.g>

          {/* ── Right box — Ghips ── */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.1 }}>
            <rect x="545" y="10" width="425" height="188" rx="10" fill="url(#hbg-boxfill)" />
            <rect x="545" y="10" width="425" height="188" rx="10" fill="none" stroke="rgba(0,165,205,0.55)" strokeWidth="1" filter="url(#hbg-boxglow)" />
            <text x="757" y="58" textAnchor="middle" fill="rgba(100,220,245,0.88)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.1em">GHIPS</text>
            <text x="757" y="104" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="27" fontFamily="Inter, sans-serif" fontWeight="200">
              CaSO<tspan dy="9" fontSize="18">4</tspan><tspan dy="-9">·2H</tspan><tspan dy="9" fontSize="18">2</tspan><tspan dy="-9">O</tspan>
            </text>
            <text x="757" y="142" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="12.5" fontFamily="Inter, sans-serif" letterSpacing="0.02em">Nemodelabil, fără timp de priză</text>
          </motion.g>

          {/* ── Connector lines ── */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.5 }}>
            <path d="M 222 198 L 222 270 L 490 270" stroke="rgba(0,165,205,0.42)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 757 198 L 757 270 L 490 270" stroke="rgba(0,165,205,0.42)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 490 270 L 490 325" stroke="rgba(0,165,205,0.42)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* Arrow tip */}
            <polygon points="490,330 484,318 496,318" fill="rgba(0,200,240,0.55)" />
            {/* Junction dot */}
            <circle cx="490" cy="270" r="4.5" fill="rgba(0,210,250,0.9)" />
            <circle cx="490" cy="270" r="9" fill="none" stroke="rgba(0,210,250,0.25)" strokeWidth="1" />
          </motion.g>

          {/* ── Bottom box — Sulfat de Calciu Bifazic ── */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 1.9 }}>
            <rect x="55" y="330" width="870" height="170" rx="12" fill="url(#hbg-mainfill)" />
            <motion.rect
              x="55" y="330" width="870" height="170" rx="12"
              fill="none" stroke="rgba(0,190,230,0.7)" strokeWidth="1.5"
              filter="url(#hbg-mainglow)"
              animate={isMobile ? { opacity: 0.8 } : { opacity: [0.6, 1, 0.6] }}
              transition={isMobile ? {} : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <text x="490" y="388" textAnchor="middle" fill="rgba(130,230,252,1)" fontSize="31" fontFamily="Newsreader, serif" fontWeight="700" letterSpacing="-0.01em">Sulfat de Calciu Bifazic</text>
            <text x="490" y="422" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="0.02em">Modelabil și timp scurt de priză</text>
            <text x="490" y="444" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13" fontFamily="Inter, sans-serif" letterSpacing="0.02em">Face priză și se întărește în prezența sângelui și proteinelor</text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef(null)
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgYDesktop = useTransform(scrollYProgress, [0, 1], [0, 100])
  const textOpacityDesktop = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden' }}>
      {/* Chemistry diagram background — no parallax on mobile */}
      <motion.div style={{ y: isMobile ? 0 : bgYDesktop, position: 'absolute', inset: 0 }}>
        <ChemistryHeroBg />
      </motion.div>

      {/* Overlay */}
      <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,10,20,0.95) 0%, rgba(0,10,20,0.92) 34%, rgba(0,10,20,0.35) 52%, rgba(0,10,20,0.02) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 82%, rgba(0,8,16,0.7) 100%)', pointerEvents: 'none' }} />

      {/* Content — no opacity scroll transform on mobile */}
      <motion.div style={{ opacity: isMobile ? 1 : textOpacityDesktop, position: 'relative', width: '100%', zIndex: 1 }}>
        <div className="hero-left-col" style={{ maxWidth: 1280, margin: '0 auto', padding: '160px 40px 100px 5vw', display: 'grid', gridTemplateColumns: '44% 1fr', gap: 40, alignItems: 'center' }}>

          {/* Left: tot textul */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            <motion.div initial={{ opacity: 0, y: isMobile ? 0 : -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.05 : 0.2 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(143,211,226,0.9)' }}>
                <span style={{ width: 32, height: 1, background: 'rgba(143,211,226,0.7)', display: 'inline-block' }} />
                Augma Biomaterials
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.35 : 0.9, delay: isMobile ? 0.1 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title"
              style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(48px, 4.5vw, 68px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}
            >
              Augmentare osoasă{' '}<br />cu mai puține{' '}<br />variabile.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.15 : 0.55 }}
              style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, margin: 0 }}
            >
              Bond Apatite este construit pe tehnologia{' '}
              <span style={{ color: 'rgba(143,211,226,0.95)', fontStyle: 'italic' }}>Sulfatului de Calciu Bifazic</span>
              , singurul brevetat din lume.{' '}<br className="subtitle-br" />15 ani de cercetare clinică, premiat cu{' '}
              <span style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 600 }}>Thomas Edison Award</span>
              {' '}pentru Inovație în 2019.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: isMobile ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.2 : 0.8 }} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 420 }}>
              <motion.a
                href="#form-section"
                onTap={(e) => scrollToForm(e, 'hero_cta')}
                whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{ display: 'block', width: '100%', background: '#ffffff', color: '#004a5d', padding: '18px 32px', fontSize: 15, fontWeight: 700, borderRadius: 2, boxShadow: '0 8px 32px rgba(0,0,0,0.3)', textDecoration: 'none', textAlign: 'center' }}
              >
                Cereți demonstrația clinică
              </motion.a>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500, margin: 0 }}>
                20 de minute la dumneavoastră la cabinet.
              </p>
            </motion.div>

          </div>

          {/* Right: gol — diagrama se vede prin fundal */}
          <div />

        </div>
      </motion.div>
    </section>
  )
}

/* ─── Chemistry Section (mobil only) ─── */
function ChemistrySection() {
  const boxes = [
    {
      label: 'IPSOS CALCINAT',
      formula: 'CaSO₄·½H₂O',
      note: 'Modelabil, timp lung de priză',
      color: 'rgba(0,165,205,0.55)',
    },
    {
      label: 'GHIPS',
      formula: 'CaSO₄·2H₂O',
      note: 'Nemodelabil, fără timp de priză',
      color: 'rgba(0,165,205,0.55)',
    },
  ]

  return (
    <section className="chem-section-mobile" style={{ background: 'linear-gradient(160deg, #010c12 0%, #031a26 55%, #010e18 100%)', padding: '48px 20px 56px', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <pattern id="dotgrid2" x="0" y="0" width="38" height="38" patternUnits="userSpaceOnUse">
            <circle cx="0.6" cy="0.6" r="0.6" fill="rgba(0,150,190,0.18)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid2)" />
      </svg>
      {/* Glow blob */}
      <div style={{ position: 'absolute', width: '80vw', height: '80vw', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(0,74,93,0.45) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

        {/* Label secțiune */}
        <motion.div initial={{ opacity: 0, y: -12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 28, textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(143,211,226,0.8)' }}>
            Tehnologia din spate
          </span>
        </motion.div>

        {/* Cele 2 boxuri de sus */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%' }}>
          {boxes.map((box, i) => (
            <motion.div
              key={box.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              style={{
                background: 'rgba(0,55,75,0.65)',
                border: '1px solid rgba(0,165,205,0.45)',
                borderRadius: 10,
                padding: '16px 12px',
                textAlign: 'center',
                boxShadow: '0 0 18px rgba(0,160,200,0.15)',
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(100,220,245,0.88)', marginBottom: 8 }}>{box.label}</div>
              <div style={{ fontSize: 18, fontWeight: 200, color: 'rgba(255,255,255,0.95)', letterSpacing: '0.01em', marginBottom: 8, fontFamily: 'Inter, sans-serif' }}>{box.formula}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', lineHeight: 1.4 }}>{box.note}</div>
            </motion.div>
          ))}
        </div>

        {/* Conector vertical */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, margin: '4px 0' }}>
          <div style={{ width: 1.5, height: 20, background: 'rgba(0,165,205,0.45)' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(0,210,250,0.9)', boxShadow: '0 0 10px rgba(0,210,250,0.5)' }} />
          <div style={{ width: 1.5, height: 20, background: 'rgba(0,165,205,0.45)' }} />
          {/* Arrow */}
          <svg width="12" height="8" viewBox="0 0 12 8"><polygon points="6,8 0,0 12,0" fill="rgba(0,200,240,0.55)" /></svg>
        </motion.div>

        {/* Box principal — Sulfat de Calciu Bifazic */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ width: '100%', background: 'rgba(0,75,100,0.72)', borderRadius: 12, padding: '24px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: 0, borderRadius: 12, border: '1.5px solid rgba(0,190,230,0.65)', boxShadow: '0 0 24px rgba(0,190,230,0.2)', pointerEvents: 'none' }}
          />
          <div style={{ fontSize: 22, fontWeight: 700, color: 'rgba(130,230,252,1)', fontFamily: 'Newsreader, serif', marginBottom: 10, lineHeight: 1.2 }}>
            Sulfat de Calciu Bifazic
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>
            Modelabil și timp scurt de priză
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.58)', lineHeight: 1.6 }}>
            Face priză și se întărește în prezența sângelui și proteinelor
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Product Explanation ─── */
function ProductExplanation() {
  const isMobile = useIsMobile()
  const checks = [
    'mai puțină dependență de membrane și fixare externă',
    'mai puțină manipulare manuală',
    'mai multă stabilitate în fereastra critică dintre plasare și sutură',
    'mai mult control asupra rezultatului, de la plasare la vindecare',
  ]

  return (
    <section id="cum-functioneaza" className="section-pad" style={{ background: '#f6f3f2' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="two-col" style={{ alignItems: 'start' }}>
          <div className="product-text">
            <FadeUp>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Tehnologia din spate</span>
              <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.1, marginTop: 12, marginBottom: 0 }}>
                Ce este{' '}
                <em style={{ color: '#00637c', fontStyle: 'italic' }}>Bond Apatite</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, color: '#3f484c', lineHeight: 1.75, marginTop: 28 }}>
                <p>Bond Apatite este un ciment de grefare osoasă bazat pe combinația dintre <span style={{ color: '#004a5d', fontWeight: 500 }}>Sulfat de Calciu Bifazic</span> și <span style={{ color: '#004a5d', fontWeight: 500 }}>Hidroxiapatită cu distribuție controlată a particulelor</span>.</p>
                <p>Sulfatul de Calciu Bifazic face priza rapid, se comportă ca barieră biologică, se resoarbe complet și este înlocuit progresiv de osul pacientului.</p>
                <p>Hidroxiapatita menține volumul pe termen mai lung.</p>
                <p>Împreună, elimină dependența de membrană externă, pini și manipulare extinsă — variabilele care fac augmentarea clasică greu de controlat și greu de reprodus.</p>
                <p>Nu este doar un material de grefare care umple un spațiu. Este un material gândit să schimbe felul în care lucrezi:</p>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                {checks.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                  >
                    <span style={{ marginTop: 2, width: 20, height: 20, borderRadius: '50%', background: '#004a5d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{ fontSize: 14, color: '#1c1b1b', lineHeight: 1.6 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <FadeIn delay={0.2} className="product-syringe" style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', flex: 1 }}>

              {/* Ambient glow backdrop */}
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,99,124,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
              {/* Glow ring 1 */}
              <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,99,124,0.11) 0%, transparent 65%)', pointerEvents: 'none' }} />
              {/* Glow ring 2 */}
              <motion.div
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: 390, height: 390, borderRadius: '50%', border: '1px solid rgba(0,99,124,0.2)', pointerEvents: 'none' }}
              />
              {/* Glow ring 3 */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', border: '1px solid rgba(0,99,124,0.09)', pointerEvents: 'none' }}
              />
              {/* Glow ring 4 — extra outer pulse */}
              <motion.div
                animate={{ scale: [1, 1.07, 1], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                style={{ position: 'absolute', width: 650, height: 650, borderRadius: '50%', border: '1px dashed rgba(0,99,124,0.12)', pointerEvents: 'none' }}
              />

              {/* Floating spec chips — hidden on mobile */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '4%', left: '-2%', background: 'white', borderRadius: 12, padding: '10px 16px', boxShadow: '0 8px 24px rgba(0,74,93,0.12)', textAlign: 'center', minWidth: 80, display: isMobile ? 'none' : 'block' }}
              >
                <div style={{ fontFamily: 'Newsreader, serif', fontSize: 20, fontWeight: 700, color: '#004a5d', lineHeight: 1 }}>3 min</div>
                <div style={{ fontSize: 10, color: 'rgba(63,72,76,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 3, fontWeight: 700 }}>Priză</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ position: 'absolute', top: '4%', right: '-2%', background: 'white', borderRadius: 12, padding: '10px 16px', boxShadow: '0 8px 24px rgba(0,74,93,0.12)', textAlign: 'center', minWidth: 80, display: isMobile ? 'none' : 'block' }}
              >
                <div style={{ fontFamily: 'Newsreader, serif', fontSize: 20, fontWeight: 700, color: '#004a5d', lineHeight: 1 }}>1cc</div>
                <div style={{ fontSize: 10, color: 'rgba(63,72,76,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 3, fontWeight: 700 }}>Volum</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ position: 'absolute', bottom: '4%', left: '-2%', background: 'white', borderRadius: 12, padding: '10px 16px', boxShadow: '0 8px 24px rgba(0,74,93,0.12)', textAlign: 'center', minWidth: 80, display: isMobile ? 'none' : 'block' }}
              >
                <div style={{ fontSize: 10, color: 'rgba(63,72,76,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, lineHeight: 1.4 }}>Auto-<br/>mixantă</div>
                <div style={{ fontSize: 10, color: '#00637c', fontWeight: 700, marginTop: 4, letterSpacing: '0.05em' }}>în interior</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                style={{ position: 'absolute', bottom: '4%', right: '-2%', background: '#004a5d', borderRadius: 12, padding: '10px 16px', boxShadow: '0 8px 24px rgba(0,74,93,0.22)', textAlign: 'center', minWidth: 80, display: isMobile ? 'none' : 'block' }}
              >
                <div style={{ fontSize: 10, color: 'rgba(143,211,226,0.9)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, lineHeight: 1.4 }}>Bacterio-<br/>static</div>
              </motion.div>

              {/* Syringe image — full height, transparent bg via multiply blend */}
              <motion.img
                src="/seringa-verticala-2.png"
                alt="Seringa Bond Apatite"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'relative',
                  height: 'clamp(420px, 54vh, 640px)',
                  width: 'auto',
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 0 40px rgba(0,99,124,0.22)) drop-shadow(0 32px 56px rgba(0,74,93,0.28))',
                  zIndex: 1,
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─── Benefits ─── */
const BENEFITS = [
  { n: '01', title: 'Mai puține variabile de controlat', body: 'Protocoalele clasice îți cer să controlezi prea multe variabile simultan. Bond Apatite reduce variabilele care nu ar trebui să existe separat.' },
  { n: '02', title: 'Fără membrană', body: 'În indicațiile potrivite, materialul poate crea funcția de barieră biologică fără să depindă obligatoriu de o membrană externă.' },
  { n: '03', title: 'Protocol minim invaziv', body: 'Gândit pentru un protocol cu lambou minim, fără incizii de eliberare a periostului.' },
  { n: '04', title: 'Priză în 3 minute', body: 'Face priză rapid, inclusiv în prezența sângelui și salivei, ceea ce reduce fereastra de instabilitate.' },
  { n: '05', title: 'Comportament bacteriostatic', body: 'Reduce riscul local de contaminare și schimbă felul în care gestionezi o situație imperfectă sau o expunere parțială.' },
  { n: '06', title: 'Aplicare directă', body: 'Sistemul de livrare în seringă reduce lanțul de variabile și face plasarea mai controlabilă și mai omogenă.' },
  { n: '07', title: 'Regenerare osoasă adevărată', body: 'Muta atenția de la "cât se vede" pe radiografie la "cât din acel volum devine os vital nou".' },
  { n: '08', title: 'Stabilitate în mediu umed', body: 'Își menține stabilitatea în fereastra dintre plasare și sutură, reducând riscul de pierdere de volum.' },
  { n: '09', title: 'Masă stabilă după priză', body: 'Formează o masă stabilă, nu un simplu volum particulat predispus la micromigrare.' },
  { n: '10', title: 'Deschide scenarii clinice noi', body: 'În anumite indicații, poate permite augmentarea și implantarea simultană în scenarii neconvenționale.' },
]

function Benefits() {
  return (
    <section id="benefits" className="section-pad">
      <div style={{ maxWidth: 1536, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>Avantaje clinice</span>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.15, margin: '0 0 24px' }}>
              De ce Bond Apatite<br />schimbă augmentarea osoasă
            </h2>
            <p style={{ fontSize: 17, color: '#3f484c', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
              10 avantaje clinice care separă un protocol cu variabile minime de unul cu variabile pe care nu le controlezi niciodată complet.
            </p>
          </div>
        </FadeUp>

        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -5, borderColor: '#004a5d' }}
              style={{ padding: '24px 20px', borderLeft: '2px solid rgba(191,200,205,0.25)', cursor: 'default', transition: 'all 0.3s' }}
            >
              <div className="benefit-number" style={{ fontFamily: 'Newsreader, serif', fontSize: 52, fontWeight: 700, color: 'rgba(0,74,93,0.08)', marginBottom: 16, lineHeight: 1 }}>{b.n}</div>
              <h4 style={{ fontWeight: 600, color: '#004a5d', fontSize: 14, marginBottom: 8, lineHeight: 1.4 }}>{b.title}</h4>
              <p style={{ fontSize: 14, color: 'rgba(63,72,76,0.8)', lineHeight: 1.65 }}>{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Solutions Carousel ─── */
const SOLUTIONS = [
  { id: 'socket', title: 'Grefă alveolară', icon: socketIcon, description: 'Fără lambou, fără membrană. Aplicare directă în alveolă, priză în 3 minute, sutură.' },
  { id: 'lateral', title: 'Augmentare laterală', icon: lateralIcon, description: 'Fără membrană. Fără incizii de eliberare periostală. Protocol direct, o singură ședință.' },
  { id: 'sinus', title: 'Sinus lift', icon: sinusIcon, description: 'Tehnică intra-crestală minim invazivă. Augmentare și implant în aceeași ședință când creasta ≥ 4 mm.' },
  { id: 'fullarch', title: 'Reconstrucție totală de arcadă', icon: fullArchIcon, description: 'Un singur material pentru toate necesitățile de grefare. Extracții, osteoplastie și implanturi în aceeași intervenție.' },
  { id: 'aesthetic', title: 'Zona estetică', icon: aestheticIcon, description: 'Volum reconstruit fără tracțiunea GBR clasic. Fără proteze mobile în vindecare.' },
  { id: 'cyst', title: 'Enucleere de chist', icon: cystIcon, description: 'Cavitatea chistică devine schela pentru regenerare osoasă ghidată. Condensare directă, fără tehnici suplimentare.' },
  { id: 'peri', title: 'Peri-implantită', icon: periIcon, description: 'Lambou minim, aplicare directă, sutură. Fără tehnici complexe de regenerare peri-implantară.' },
  { id: 'zygoma', title: 'Implant zigomatic', icon: zygomaIcon, description: 'Acoperă porțiunea extra-maxilară direct, fără avansarea grăsimii bucale. Volum reconstruit într-o singură etapă.' },
]

function SolutionsCarousel() {
  const [active, setActive] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const n = SOLUTIONS.length

  const goTo = (idx) => {
    setFlipped(false)
    setActive(((idx % n) + n) % n)
  }
  const prev = () => goTo(active - 1)
  const next = () => goTo(active + 1)

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#ffffff',
    border: 'none',
    color: '#004a5d',
    width: 44, height: 44,
    borderRadius: '50%',
    fontSize: 24,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 10,
    lineHeight: 1,
    padding: 0,
    boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
    fontWeight: 700,
  }

  return (
    <section className="section-pad" style={{ background: '#021c24', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#8FBFCA', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>Indicații clinice</span>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: 'white', lineHeight: 1.1, margin: '0 0 20px' }}>
              8 scenarii chirurgicale. Un singur material.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
              De la grefe alveolare simple până la reconstrucții complete de arcadă — același protocol, același material, același nivel de control.
            </p>
          </div>
        </FadeUp>

        {/* Carousel row */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.button
            onClick={prev}
            aria-label="Indicația anterioară"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85, backgroundColor: '#e6f2f5' }}
            transition={{ duration: 0.12 }}
            style={{ ...arrowStyle, left: 12 }}
          >‹</motion.button>

          {/* 3D track */}
          <div style={{
            flex: 1,
            maxWidth: 860,
            perspective: '1200px',
            height: 420,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {SOLUTIONS.map((sol, i) => {
              let offset = i - active
              if (offset > n / 2) offset -= n
              if (offset < -n / 2) offset += n
              const isCenter = offset === 0
              const isAdjacent = Math.abs(offset) === 1

              return (
                <motion.div
                  key={sol.id}
                  animate={{
                    x: offset * 310,
                    scale: isCenter ? 1 : 0.72,
                    opacity: isCenter ? 1 : isAdjacent ? 0.42 : 0,
                    rotateY: isCenter ? 0 : offset > 0 ? -18 : 18,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'absolute',
                    zIndex: isCenter ? 2 : 1,
                    cursor: isCenter || isAdjacent ? 'pointer' : 'default',
                    pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => {
                    if (isCenter) setFlipped(f => !f)
                    else if (isAdjacent) goTo(i)
                  }}
                >
                  <div style={{
                    width: 300,
                    height: 380,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: isCenter && flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    borderRadius: 20,
                    boxShadow: isCenter ? '0 32px 80px rgba(0,0,0,0.5)' : 'none',
                  }}>
                    {/* Front */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      background: 'white',
                      borderRadius: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '40px 32px',
                      gap: 28,
                    }}>
                      <div style={{
                        width: 140, height: 140,
                        background: 'rgba(0,74,93,0.04)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: 24,
                        flexShrink: 0,
                      }}>
                        <img src={sol.icon} alt={sol.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 22, fontWeight: 700, color: '#004a5d', margin: '0 0 10px', lineHeight: 1.2 }}>{sol.title}</h3>
                        {isCenter && (
                          <button onClick={e => { e.stopPropagation(); setFlipped(true); }} style={{ fontSize: 10, color: '#248BA2', letterSpacing: '0.14em', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                            VEZI DETALII →
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Back */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: 'linear-gradient(145deg, #004a5d 0%, #00637c 100%)',
                      borderRadius: 20,
                      padding: '32px 28px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 16,
                    }}>
                      <div style={{ width: 36, height: 2, background: '#8FBFCA', borderRadius: 1, flexShrink: 0 }} />
                      <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 20, fontWeight: 700, color: 'white', margin: 0, lineHeight: 1.2, flexShrink: 0 }}>{sol.title}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, margin: 0, flex: 1, overflowY: 'auto' }}>{sol.description}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); setFlipped(false) }}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: 'rgba(255,255,255,0.7)',
                          borderRadius: 8,
                          padding: '7px 16px',
                          fontSize: 11,
                          cursor: 'pointer',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          alignSelf: 'flex-start',
                          flexShrink: 0,
                        }}
                      >
                        ← Înapoi
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.button
            onClick={next}
            aria-label="Indicația următoare"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85, backgroundColor: '#e6f2f5' }}
            transition={{ duration: 0.12 }}
            style={{ ...arrowStyle, right: 12 }}
          >›</motion.button>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 48 }}>
          {SOLUTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 100,
                background: i === active ? '#248BA2' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Radiology Panels ─── */
const RADIOLOGY_PANELS = [
  { label: 'Post-op imediat', sub: 'Ziua 1 — radiopac', src: radiologyPostOpImg },
  { label: '1 lună', sub: 'Osteoid tânăr — radiolucent', src: radiology1MonthImg },
  { label: '3 luni', sub: 'Os format — implant plasat', src: radiology3MonthsImg },
]

function RadiologyPanels() {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ display: 'flex', height: 320, borderRadius: 20, overflow: 'hidden', gap: 4 }}>
      {RADIOLOGY_PANELS.map((panel, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: hovered === i ? 3 : 1,
            transition: 'flex 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            minWidth: 0,
          }}
        >
          <img
            src={panel.src}
            alt={panel.label}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease', transform: hovered === i ? 'scale(1.04)' : 'scale(1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,10,20,0.75) 0%, rgba(0,10,20,0.1) 55%, transparent 100%)' }} />
          {/* Label expanded */}
          <div style={{ position: 'absolute', bottom: 16, left: 16, opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}>
            <div style={{ fontSize: 10, color: '#89d0ed', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, marginBottom: 4 }}>{panel.sub}</div>
            <div style={{ fontSize: 15, color: 'white', fontWeight: 600 }}>{panel.label}</div>
          </div>
          {/* Label collapsed — vertical */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: hovered === i ? 0 : 1, transition: 'opacity 0.3s ease', pointerEvents: 'none',
          }}>
            <span style={{
              fontSize: 10, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.18em',
              fontWeight: 700, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)',
            }}>{panel.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Protocol ─── */
const PROTOCOL_STEPS = [
  { title: 'Pregătirea sitului', body: 'Se realizează ridicarea unui lambou de grosime completă, urmată de decorticarea amplă și profundă a zonei tratate.' },
  { title: 'Activarea cimentului', body: 'Tija se împinge lent și controlat până în momentul în care pistonul ajunge la linia de referință.' },
  { title: 'Grefarea', body: 'Bond Apatite® se aplică la nivelul sitului într-un ușor exces, apoi se compactează cu precizie pentru o integrare optimă a materialului.' },
  { title: 'Sutura și închiderea', body: 'Suturarea se efectuează în succesiunea mezial, distal, mijloc, intermediar și incizie verticală, urmată de aplicarea Augma Shield™.' },
]

function Protocol() {
  return (
    <section className="section-pad" style={{ background: '#004a5d', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '33%', height: '100%', background: 'linear-gradient(to left, rgba(0,99,124,0.3), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#89d0ed', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>Protocolul</span>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 24px' }}>
              Cum arată protocolul în practică
            </h2>
            <p style={{ color: 'rgba(143,191,202,0.8)', fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Protocolul de mai jos arată cum se traduce Bond Apatite în scenariul augmentării laterale, unde diferența față de abordarea clasică devine cea mai clară.
            </p>
          </div>
        </FadeUp>

        <div className="two-col" style={{ alignItems: 'center' }}>
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <iframe
                  src="https://www.youtube.com/embed/xj_6BhXtRvg"
                  title="Protocol — Augmentare Laterală"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[{ label: 'Etapa pre-op', src: preOpImg }, { label: 'Intraoperator', src: postOpImg }].map(({ label, src }) => (
                  <div key={label} style={{ position: 'relative', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <img src={src} alt={label} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', bottom: 8, left: 10, fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {PROTOCOL_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(137,208,237,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#89d0ed' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.95)', marginBottom: 4 }}>{step.title}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Clinical Cases ─── */
const clinicalCasesData = [
  {
    id: 1,
    tag: 'Socket Preservation',
    caseNo: 'Caz 01',
    title: 'Socket Preservation cu Bond Apatite® — follow-up 4 ani',
    excerpt: 'Molarul #30 (46) a fost extras și augmentat imediat cu Bond Apatite®. Reintrare pentru inserția implantului la 3 luni post-op. Evaluare radiografică la 3 și 6 luni. Follow-up la 4 ani demonstrează stabilitatea nivelului osos și procesul de remodelare și maturare osoasă. Caz documentat de Dr. David Baranes.',
    cover: socketCoverImg,
    photos: [
      { label: 'Descrierea cazului', src: caz1_01 },
      { label: 'Extracție', src: caz1_03 },
      { label: 'Augmentare', src: caz1_02 },
      { label: 'Bond Apatite în defect', src: caz1_04 },
      { label: 'Sutură cu tensiune', src: caz1_05 },
      { label: '3 luni post-op', src: caz1_06 },
      { label: '6 luni post-op', src: caz1_07 },
      { label: '4 ani post-op', src: caz1_08 },
      { label: '4 ani post-op', src: caz1_09 },
      { label: '4 ani post-op', src: caz1_10 },
    ],
    outcome: 'Implant inserat la 3 luni post-augmentare. Follow-up la 4 ani demonstrează stabilitate completă a nivelului osos și remodelare osoasă matură — fără resorbție semnificativă, fără complicații.',
  },
  {
    id: 2,
    tag: 'Augmentare laterală',
    caseNo: 'Caz 02',
    title: 'Augmentare laterală și implant după eșec de apicectomie',
    excerpt: 'Pacientă 54 ani cu eșec de augmentare cu xenogrefă și membrană de colagen după apicectomie. Inflamație cronică, fără corticală vestibulară regenerată. Extracție, debridare, 1cc Bond Apatite® — implant la 5 luni. Caz documentat de Dr. Damian Dudek.',
    cover: caz2_01,
    photos: [
      { label: 'Aspect inițial', src: caz2_01 },
      { label: 'Aspect inițial CBCT', src: caz2_02 },
      { label: '10 ani post apicectomie', src: caz2_03 },
      { label: '7 zile post-augmentare', src: caz2_04 },
      { label: '6 săptămâni post-augmentare', src: caz2_05 },
      { label: '14 săptămâni post-augmentare', src: caz2_06 },
      { label: '5 luni post-augmentare', src: caz2_07 },
      { label: 'Lambou grosime totală', src: caz2_08 },
      { label: 'Pregătire osteotomie', src: caz2_09 },
      { label: 'Histologie 5 luni', src: caz2_10 },
      { label: 'Implant inserat', src: caz2_11 },
      { label: '4 luni post-implant', src: caz2_12 },
      { label: 'Healing abutment 4 luni', src: caz2_13 },
      { label: 'Raze X 2 ani post-op', src: caz2_14 },
      { label: 'Mucoasă 2 ani post-op', src: caz2_15 },
    ],
    outcome: 'Implant inserat la 5 luni post-augmentare. Control la 2 ani: corticală vestibulară intactă, implant stabil, vindecare excelentă.',
  },
  {
    id: 3,
    tag: 'Zona estetică',
    caseNo: 'Caz 03',
    title: 'Implant în zona estetică după eșec de coroană pe dintele #11',
    excerpt: 'Pacient tânăr cu eșec de coroană pe incisivul central superior #11. Lipsă perete vestibular, defecte vestibulare și verticale. Extracție, augmentare cu Bond Apatite® fără decolare periostală, implant la 4 luni. Caz documentat de Dr. Raja Naddaf.',
    cover: caz3_01,
    photos: [
      { label: 'Prezentarea cazului', src: caz3_01 },
      { label: 'Pre-op CBCT', src: caz3_02 },
      { label: 'Rădăcina rămasă #11', src: caz3_03 },
      { label: 'Defect post-extracție', src: caz3_04 },
      { label: 'Întinderea lamboului', src: caz3_05 },
      { label: 'Aplicare Bond Apatite®', src: caz3_06 },
      { label: 'Supra-compactare', src: caz3_07 },
      { label: 'Sutură cu tensiune', src: caz3_08 },
      { label: '4 luni post-op', src: caz3_09 },
      { label: '4 luni post-op CBCT', src: caz3_10 },
      { label: 'Inserție implant', src: caz3_11 },
      { label: 'Coroană finală', src: caz3_12 },
    ],
    outcome: 'Implant inserat la 4 luni post-augmentare. Formare osoasă suficientă confirmată pe CBCT. Coroană finală pe implantul #11 — rezultat estetic complet.',
  },
]

function ClinicalCases() {
  const [active, setActive] = useState(null)
  const [activePhoto, setActivePhoto] = useState(0)
  const scrollBodyRef = useRef(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (active !== null) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      if (scrollBodyRef.current) scrollBodyRef.current.scrollTop = 0
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [active])

  const openCase = (c) => { setActive(c); setActivePhoto(0) }
  const closeCase = () => setActive(null)

  return (
    <>
      <div>
        <FadeUp>
          <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 36, fontWeight: 700, color: '#004a5d', textAlign: 'center', marginBottom: 48 }}>Cazuri Clinice</h3>
        </FadeUp>

        <div className="three-col">
          {clinicalCasesData.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,74,93,0.12)' }}
              onClick={() => openCase(c)}
              style={{
                cursor: 'pointer', display: 'flex', flexDirection: 'column',
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid rgba(191,200,205,0.3)',
                background: '#fff',
                boxShadow: '0 4px 24px rgba(0,74,93,0.06)',
                transition: 'box-shadow 0.3s',
              }}
            >
              {/* Cover image */}
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={c.cover} alt={c.title}
                  loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,30,40,0.72) 100%)' }} />
                <div style={{ position: 'absolute', top: 14, left: 14 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', background: 'rgba(0,74,93,0.85)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.tag}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{c.photos.length} imagini &middot; caz documentat complet</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{c.caseNo}</span>
                <h4 style={{ fontFamily: 'Newsreader, serif', fontSize: 20, fontWeight: 700, color: '#004a5d', margin: 0, lineHeight: 1.3 }}>{c.title}</h4>
                <p style={{ fontSize: 13, color: '#3f484c', lineHeight: 1.65, margin: 0 }}>{c.excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 6, color: '#00637c', fontSize: 13, fontWeight: 600 }}>
                  <span>Vezi cazul complet</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal lightbox — rendered via portal to escape content-visibility containment on sections */}
      {createPortal(
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCase}
            data-modal-overlay
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(0,12,18,0.8)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'center',
              padding: isMobile ? '0' : '72px 16px 16px',
              touchAction: 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#fff',
                borderRadius: isMobile ? 0 : 24,
                width: '100%', maxWidth: 960,
                maxHeight: isMobile ? '100dvh' : 'calc(100dvh - 88px)',
                height: isMobile ? '100dvh' : 'auto',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Modal header */}
              <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(191,200,205,0.25)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexShrink: 0 }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{active.caseNo}</span>
                    <span style={{ width: 1, height: 10, background: 'rgba(0,99,124,0.25)', display: 'inline-block' }} />
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{active.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(18px, 3vw, 26px)', fontWeight: 700, color: '#004a5d', margin: 0, lineHeight: 1.25 }}>{active.title}</h3>
                </div>
                <button
                  onClick={closeCase}
                  style={{ border: 'none', background: 'rgba(0,74,93,0.07)', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#004a5d', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,74,93,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,74,93,0.07)'}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Scrollable body */}
              <div ref={scrollBodyRef} style={{ overflowY: 'auto', flex: 1 }}>
                {/* Photo viewer */}
                <div style={{ background: '#0b1d24', position: 'relative' }}>
                  {/* Main photo */}
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activePhoto}
                        src={active.photos[activePhoto].src}
                        alt={active.photos[activePhoto].label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                      />
                    </AnimatePresence>

                    {/* Caption overlay */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 28px 20px', background: 'linear-gradient(to top, rgba(0,15,22,0.9), transparent)' }}>
                      <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, color: '#b7e8f3', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 0 }}>{active.photos[activePhoto].label}</span>
                    </div>

                    {/* Arrow prev */}
                    {activePhoto > 0 && (
                      <button
                        onClick={e => { e.stopPropagation(); setActivePhoto(p => p - 1) }}
                        style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(6px)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                    )}

                    {/* Arrow next */}
                    {activePhoto < active.photos.length - 1 && (
                      <button
                        onClick={e => { e.stopPropagation(); setActivePhoto(p => p + 1) }}
                        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(6px)', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                      </button>
                    )}
                  </div>

                  {/* Thumbnail strip */}
                  <div style={{ display: 'flex', gap: 8, padding: '10px 20px 12px', overflowX: 'auto', background: '#0e2229' }}>
                    {active.photos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={e => { e.stopPropagation(); setActivePhoto(idx) }}
                        style={{
                          flexShrink: 0, width: 68,
                          border: idx === activePhoto ? '2px solid #b7e8f3' : '2px solid transparent',
                          borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
                          background: 'none', padding: 0,
                          opacity: idx === activePhoto ? 1 : 0.45,
                          transition: 'all 0.2s',
                        }}
                      >
                        <img src={p.src} alt={p.label} loading="lazy" decoding="async" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                        <span style={{ display: 'block', fontSize: 8, color: 'rgba(255,255,255,0.65)', textAlign: 'center', padding: '3px 2px 4px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.2 }}>{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Case text */}
                <div style={{ padding: '28px 32px 36px' }}>
                  <p style={{ color: '#3f484c', lineHeight: 1.78, fontSize: 15, margin: '0 0 20px' }}>{active.excerpt}</p>
                  <div style={{ padding: '14px 20px', background: 'rgba(0,74,93,0.05)', borderLeft: '3px solid #b7e8f3', borderRadius: '0 10px 10px 0' }}>
                    <p style={{ fontSize: 13.5, color: '#004a5d', lineHeight: 1.7, margin: 0 }}>
                      <strong>Rezultat clinic:</strong> {active.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      , document.body)}
    </>
  )
}

/* ─── Proof ─── */
function Proof() {
  return (
    <section id="proof" className="section-pad">
      <div style={{ maxWidth: 1536, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>Dovezi</span>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.1, margin: '0 0 16px' }}>
              Histologie. Radiologie. Cazuri reale.
            </h2>
            <p style={{ color: '#3f484c', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Bond Apatite merită evaluat nu doar prin manipulare, ci prin trei lucruri care contează clinic:{' '}
              <span style={{ color: '#004a5d', fontWeight: 500 }}>stabilitatea</span>,{' '}
              <span style={{ color: '#004a5d', fontWeight: 500 }}>histologia</span> și{' '}
              <span style={{ color: '#004a5d', fontWeight: 500 }}>cazurile reale</span>.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
          {/* Histology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            className="two-col" style={{ alignItems: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 36, fontWeight: 700, color: '#004a5d', margin: 0 }}>Histologie</h3>
              <p style={{ color: '#3f484c', lineHeight: 1.7, margin: 0 }}>Materialul de grefare se resoarbe progresiv, induce osteogeneză locală și permite formarea de os vital propriu al pacientului.<br /><br />La 12 săptămâni, aproximativ 90% din volum este deja os nou. La 8 luni, regenerare completă, fără material rezidual encapsulat.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[['12 săptămâni', 90, '~90% os vital'], ['8 luni', 100, 'Regenerare completă']].map(([label, pct, note]) => (
                  <div key={label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                      <span style={{ fontWeight: 500, color: '#004a5d' }}>{label}</span>
                      <span style={{ color: 'rgba(63,72,76,0.6)' }}>{note}</span>
                    </div>
                    <div style={{ height: 6, background: '#f0eded', borderRadius: 3, overflow: 'hidden' }}>
                      <motion.div
                        style={{ height: '100%', background: 'linear-gradient(90deg, #004a5d, #00637c)', borderRadius: 3 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[{ label: '12 săptămâni', src: histology12Img }, { label: '8 luni', src: histology8Img }].map(({ label, src }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ aspectRatio: '1', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(191,200,205,0.2)' }}>
                    <img src={src} alt={`Histologie ${label}`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: 10, textAlign: 'center', fontWeight: 700, color: 'rgba(63,72,76,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Radiology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}
            className="two-col" style={{ alignItems: 'center' }}
          >
            <RadiologyPanels />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 36, fontWeight: 700, color: '#004a5d', margin: 0 }}>Radiologie</h3>
              <p style={{ color: '#3f484c', lineHeight: 1.75, margin: 0, fontSize: 15 }}>
                Bond Apatite® nu se comportă ca un graft clasic. Nu se integrează cu osul, ci se resoarbe și este înlocuit progresiv de osul propriu al pacientului. Această transformare se reflectă direct în aspectul radiologic.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['Ziua 1', 'Radiopacitate ridicată, materialul este intact și vizibil clar'],
                  ['4–8 săpt', 'Aspect radiolucent, faza de osteoid tânăr în formare'],
                  ['4–6 luni', 'Radiopacitate crescută, osul tânăr se calcifică'],
                ].map(([stage, desc], i) => (
                  <motion.div key={stage} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 700, color: '#004a5d', background: '#b7e8f3', borderRadius: 2, whiteSpace: 'nowrap', marginTop: 1 }}>{stage}</span>
                    <span style={{ fontSize: 14, color: '#3f484c', lineHeight: 1.6 }}>{desc}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ padding: '14px 18px', background: 'rgba(0,74,93,0.05)', borderLeft: '3px solid #b7e8f3', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: 13, color: '#004a5d', lineHeight: 1.65, margin: 0 }}>
                  <strong>Notă clinică:</strong> La 3–4 luni, CBCT-ul poate subestima dimensiunile reale ale osului format — osul este imatur și nu s-a calcificat complet. Nu înseamnă eșec. În sinus lift lateral, golurile radiologice la 3 luni sunt normale și reprezintă os imatur necalcificat; la 5 luni aspectul devine radiopac.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cases */}
          <ClinicalCases />
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  const testimonials = [
    {
      photo: testimonialBartos,
      quote: '„Folosesc Augma de peste 8 ani, atât în cazuri complexe, cât și în defecte osoase mici. Protocolul este clar și ușor de aplicat, iar rezultatele sunt constante și predictibile în timp. După ce te obișnuiești cu sistemul și urmărești evoluția clinică, devine dificil să revii la alternativele clasice."',
      author: 'Dr. Cristian Bartoș',
      spec: 'Expert Implant Stomatologie',
      years: '8 ani Augma',
      stars: true,
    },
    {
      photo: testimonialParaschivescu,
      quote: '„Folosesc produsele Augma pentru că îmi oferă un protocol simplu și predictibil. Astfel reușesc să scurtez timpul intraoperator și să obțin o vindecare mai rapidă pentru pacienții mei."',
      author: 'Dr. Raul Paraschivescu',
      spec: 'Dr. Paraschivescu Dental Clinic',
      stars: true,
    },
    {
      photo: testimonialCaruntu,
      quote: '„Am început să folosesc produsele Augma din dorința de a avea un protocol simplu și mai predictibil. În practica zilnică mă ajută să lucrez eficient cu mai puține materiale, timp operator redus, confort sporit al pacientului și rezultate stabile în timp."',
      author: 'Prof. Univ. Dr. Ana Căruntu',
      spec: 'Chirurgie Orală și Maxilofacială',
      stars: true,
    },
  ]

  return (
    <section id="testimonials" className="section-pad" style={{ background: '#f6f3f2' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.1, margin: '0 0 16px' }}>
              Ce spun medicii<br />din România
            </h2>
            <p style={{ color: '#3f484c', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: 16 }}>
              Un material diferit, un protocol mai simplu — și rezultate pe care medicii le descriu ca greu de abandonat.
            </p>
          </div>
        </FadeUp>

        <div className="three-col">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{ background: 'white', borderRadius: 20, padding: 32, boxShadow: '0 8px 24px rgba(0,74,93,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24, cursor: 'default', userSelect: 'text' }}
            >
              {t.stars && (
                <div style={{ color: '#e8a838', fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              )}
              <blockquote style={{ fontFamily: 'Newsreader, serif', fontSize: 17, color: '#1c1b1b', lineHeight: 1.7, fontStyle: 'italic', margin: 0, flex: 1 }}>
                {t.quote}
              </blockquote>
              <div style={{ paddingTop: 16, borderTop: '1px solid #f0eded', display: 'flex', alignItems: 'center', gap: 12 }}>
                {t.photo && (
                  <img src={t.photo} alt={t.author} loading="lazy" decoding="async" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                )}
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#004a5d' }}>{t.author}</div>
                  <div style={{ fontSize: 11, color: 'rgba(63,72,76,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>{t.spec}</div>
                  {t.years && <div style={{ fontSize: 11, color: '#00637c', fontWeight: 600, marginTop: 2 }}>{t.years}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Offer ─── */
function Offer() {
  const physical = ['6 seringi Bond Apatite', '1 cutie Augma Shield']
  const support  = ['Protocol simplificat, pas cu pas', 'Selecție corectă a cazurilor', 'Analiză CBCT & Grup privat', 'Ghidare pe cazuri reale']

  const CheckItem = ({ label, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}
    >
      <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(137,208,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg style={{ width: 9, height: 9 }} fill="none" viewBox="0 0 10 10">
          <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#89d0ed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {label}
    </motion.div>
  )

  return (
    <section className="section-pad">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ position: 'relative', background: '#004a5d', borderRadius: 24, color: 'white', overflow: 'hidden' }} className="offer-card">
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'linear-gradient(to bottom-left, rgba(0,99,124,0.5), transparent)', transform: 'skewX(-12deg) translateX(25%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />

          <div className="two-col offer-inner" style={{ alignItems: 'center', position: 'relative' }}>
            {/* ── LEFT ── */}
            <FadeUp>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#89d0ed', width: 'fit-content' }}>
                  Pasul următor
                </span>
                <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 700, lineHeight: 1.05, margin: 0 }}>
                  Primele dumneavoastră 6 cazuri clinice de succes
                </h2>
                <p style={{ color: 'rgba(143,191,202,0.8)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  Programul este construit ca un cadru de implementare, nu ca o simplă listă de produse. Primiți tot suportul necesar în fiecare etapă — inclusiv review de protocol și analiză CBCT din partea echipei noastre și a Dr. Amos Yahav, DMD, inventatorul sulfatului de calciu bifazic.
                </p>

                {/* Produse fizice */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(137,208,237,0.8)', margin: 0 }}>Ce primești fizic</p>
                  {physical.map((item, i) => <CheckItem key={item} label={item} delay={i * 0.07} />)}
                </div>

                {/* Suport clinic */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(137,208,237,0.8)', margin: 0 }}>Suport clinic inclus</p>
                  {support.map((item, i) => <CheckItem key={item} label={item} delay={0.14 + i * 0.07} />)}
                </div>

                {/* CTA */}
                <motion.a
                  href="#form-section"
                  onTap={(e) => scrollToForm(e, 'offer_cta')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#004a5d', padding: '14px 28px', borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: 'none', width: 'fit-content', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                >
                  Cereți demonstrația clinică
                  <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>

                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0, paddingTop: 4 }}>
                  Acceptăm maxim 10 demonstrații pe săptămână.
                </p>
              </div>
            </FadeUp>

            {/* ── RIGHT ── */}
            <FadeIn delay={0.2}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Glow difuz din spate */}
                <div style={{ position: 'absolute', inset: '-20%', background: 'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(137,208,237,0.2) 0%, rgba(137,208,237,0.07) 50%, transparent 80%)', pointerEvents: 'none' }} />
                {/* Reflexie subtila jos */}
                <div style={{ position: 'absolute', bottom: '-5%', left: '50%', transform: 'translateX(-50%)', width: '70%', height: '25%', background: 'radial-gradient(ellipse at center, rgba(137,208,237,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                {/* Product image */}
                <img
                  src="/starter-kit.png"
                  alt="AUGMA Starter Kit — 6 seringi Bond Apatite + Augma Shield"
                  style={{ width: '100%', maxWidth: 520, display: 'block', position: 'relative', filter: 'drop-shadow(0 40px 56px rgba(0,0,0,0.5)) drop-shadow(0 0 40px rgba(137,208,237,0.15))' }}
                />

                {/* Badge Bond Apatite */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ position: 'absolute', bottom: '18%', left: '-4%', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#89d0ed', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>6× Bond Apatite</span>
                </motion.div>

                {/* Badge Augma Shield */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                  style={{ position: 'absolute', top: '12%', right: '-4%', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#89d0ed', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>Augma Shield</span>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Lead Form ─── */
function LeadForm() {
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const submittingRef = useRef(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true
    setSubmitting(true)

    const fd = new FormData(e.target)
    const name   = fd.get('name')
    const phone  = fd.get('phone')
    const clinic = fd.get('clinic') || '—'

    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, clinic }),
    }).catch(() => {})

    posthog.capture('demo_form_submitted', { has_clinic: clinic !== '—' })
    if (window.fbq) window.fbq('track', 'Lead')
    setSubmitted(true)
  }

  const inputStyle = (id) => ({
    width: '100%',
    background: 'transparent',
    borderBottom: `2px solid ${focused === id ? '#004a5d' : '#e5e2e1'}`,
    borderTop: 'none', borderLeft: 'none', borderRight: 'none',
    padding: '12px 0',
    fontSize: 14,
    color: '#1c1b1b',
    transition: 'border-color 0.2s',
    fontFamily: 'Inter, sans-serif',
  })

  const labelStyle = {
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'rgba(0,74,93,0.75)',
    display: 'block',
    marginBottom: 4,
  }

  return (
    <section id="form-section" className="section-pad" style={{ background: '#fcf9f8' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#00637c', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 16 }}>LA CABINETUL DUMNEAVOASTRĂ · 20 DE MINUTE</span>
            <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.1, marginBottom: 16 }}>
              Demonstrație gratuită la cabinetul dumneavoastră.
            </h2>
            <p style={{ color: '#3f484c', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Un specialist Bonesphere vine la cabinetul dumneavoastră pregătit pentru o sesiune <em>hands-on</em> de 20 de minute.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.08}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(0,74,93,0.06)', border: '1px solid rgba(0,74,93,0.12)', borderRadius: 999, padding: '8px 16px' }}>
              <motion.span
                animate={{ opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#00a86b', boxShadow: '0 0 0 3px rgba(0,168,107,0.18)', flexShrink: 0 }}
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#004a5d', letterSpacing: '0.01em' }}>
                Acceptăm <strong style={{ color: '#00637c' }}>maxim 10 demonstrații</strong> pe săptămână
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="form-card" style={{ background: 'white', borderRadius: 20, boxShadow: '0 8px 40px rgba(0,74,93,0.08)' }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#004a5d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg style={{ width: 28, height: 28, color: 'white' }} fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: 28, fontWeight: 700, color: '#004a5d' }}>Mulțumim!</h3>
                <p style={{ color: '#3f484c', lineHeight: 1.7 }}>Vă scriem sau sunăm în maxim 24h pentru a stabili o oră convenabilă. Demonstrația durează ~20 de minute, la cabinetul dumneavoastră.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div>
                  <label style={labelStyle}>Nume complet <span style={{ color: '#004a5d' }}>*</span></label>
                  <input required name="name" type="text" placeholder="Ex: Dr. Andrei Popescu" onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={inputStyle('name')} />
                </div>
                <div>
                  <label style={labelStyle}>Telefon <span style={{ color: '#004a5d' }}>*</span></label>
                  <input required name="phone" type="tel" placeholder="07xx xxx xxx" onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={inputStyle('phone')} />
                </div>
                <div>
                  <label style={labelStyle}>Clinică / Oraș <span style={{ color: '#004a5d' }}>*</span></label>
                  <input required name="clinic" type="text" placeholder="Ex: Clinica Dent, Cluj-Napoca" onFocus={() => setFocused('clinic')} onBlur={() => setFocused(null)} style={inputStyle('clinic')} />
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <input required type="checkbox" id="gdpr" name="gdpr" style={{ marginTop: 3, flexShrink: 0, accentColor: '#004a5d', width: 16, height: 16, cursor: 'pointer' }} />
                  <label htmlFor="gdpr" style={{ fontSize: 12, color: '#3f484c', lineHeight: 1.6, cursor: 'pointer' }}>
                    Sunt de acord cu prelucrarea datelor personale conform{' '}
                    <a href="/confidentialitate" target="_blank" style={{ color: '#004a5d', textDecoration: 'underline' }}>Politicii de Confidențialitate</a>.
                  </label>
                </div>
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={submitting ? {} : { y: -2, boxShadow: '0 20px 40px rgba(0,74,93,0.25)' }}
                  whileTap={submitting ? {} : { scale: 0.98 }}
                  style={{ background: '#004a5d', color: 'white', padding: '18px 0', borderRadius: 2, fontWeight: 600, fontSize: 16, border: 'none', cursor: submitting ? 'wait' : 'pointer', transition: 'all 0.3s', fontFamily: 'Inter, sans-serif', width: '100%', opacity: submitting ? 0.7 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
                >
                  {submitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', display: 'inline-block' }}
                      />
                      Se trimite…
                    </>
                  ) : 'Cereți demonstrația clinică'}
                </motion.button>
              </form>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── Final CTA ─── */
function FinalCTA() {
  return (
    <section className="section-cta-pad" style={{ textAlign: 'center', background: '#fcf9f8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(0,99,124,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <FadeUp>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: 'clamp(28px, 6vw, 80px)', fontWeight: 700, color: '#004a5d', lineHeight: 1.15, letterSpacing: '-0.02em', maxWidth: 900, margin: '0 auto 40px' }}>
          Mai puține variabile. Mai mult control.{' '}
          <em style={{ color: '#00637c', fontStyle: 'italic' }}>Rezultate pe care le puteți reproduce de fiecare dată.</em>
        </h2>
        <motion.a
          href="#form-section"
          onTap={(e) => scrollToForm(e, 'final_cta')}
          whileHover={{ y: -4, boxShadow: '0 24px 48px rgba(0,74,93,0.3)' }}
          whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-block', background: '#004a5d', color: 'white', padding: '20px 40px', borderRadius: 2, fontSize: 16, fontWeight: 600, boxShadow: '0 12px 32px rgba(0,74,93,0.2)', textDecoration: 'none', transition: 'all 0.3s' }}
          className="cta-btn"
        >
          Cereți demonstrația clinică
        </motion.a>
      </FadeUp>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  const linkStyle = { color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }
  return (
    <footer style={{ background: '#004a5d', color: 'white', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>

        {/* Top: logo + date firmă */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <img src="/logo-white.png" alt="Bonesphere" style={{ height: 24, width: 'auto', display: 'block' }} />
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9 }}>
              <p style={{ margin: 0 }}>BONESPHERE S.R.L.</p>
              <p style={{ margin: 0 }}>Bd. Iuliu Maniu 6L, Campus 6.1, București, 061103</p>
              <p style={{ margin: 0 }}>Reg. Com: J40/506/2018 · CUI: RO38700141</p>
              <p style={{ margin: 0 }}>office@bonesphere.ro · 0737 178 774</p>
            </div>
          </div>

          {/* Linkuri legale */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Legal</p>
            <a href="/termeni-si-conditii" style={linkStyle}>Termeni și Condiții</a>
            <a href="/confidentialitate" style={linkStyle}>Politică de Confidențialitate</a>
            <a href="/politica-cookies" style={linkStyle}>Politică Cookies</a>
          </div>
        </div>

        {/* ANPC buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: 'white', color: '#004a5d', borderRadius: 12, padding: '12px 20px', textDecoration: 'none', minWidth: 180 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.4 }}>Soluționarea Online<br />a Litigiilor</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#004a5d', border: '1px solid #004a5d', borderRadius: 999, padding: '2px 12px' }}>DETALII</span>
          </a>
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'white', color: '#004a5d', borderRadius: 12, padding: '12px 20px', textDecoration: 'none', minWidth: 180 }}>
            <img src="https://anpc.ro/wp-content/uploads/2021/06/logo-ANPC-SAL.png" alt="ANPC" style={{ height: 36 }} onError={e => e.target.style.display='none'} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.4 }}>Soluționarea Alternativă<br />a Litigiilor</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#004a5d', border: '1px solid #004a5d', borderRadius: 999, padding: '2px 12px', width: 'fit-content' }}>DETALII</span>
            </div>
          </a>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 SC Bonesphere SRL. Toate drepturile rezervate.</p>
          <a href="https://www.bonesphere.ro" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
            www.bonesphere.ro
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─── Mobile-first responsive styles ─── */
const style = document.createElement('style')
style.textContent = `
  *, *::before, *::after { box-sizing: border-box; }

  /* ── Base: mobile (320px+) ── */
  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    max-width: 1536px;
    margin: 0 auto;
  }
  .desktop-nav { display: none !important; }
  .desktop-cta { display: none !important; }
  .hamburger { display: flex !important; }

  .hero-inner {
    max-width: 1536px;
    margin: 0 auto;
    padding: 110px 20px 64px;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero-badge { display: none; }
  .hero-cta { text-align: center; }
  .hero-left-col { grid-template-columns: 1fr !important; padding: 120px 24px 80px !important; }

  .section-pad { padding: 72px 20px; }
  .section-cta-pad { padding: 96px 20px; }

  .two-col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .benefits-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .three-col {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .form-card { padding: 24px 20px; }

  .offer-card { border-radius: 20px; }
  .offer-inner { padding: 36px 24px; gap: 40px; }
  .offer-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cta-btn { display: block; text-align: center; }

  /* ── Mobile: seringă înainte de text în ProductExplanation ── */
  .product-syringe { order: -1; }
  .product-text { order: 0; }

  /* ── Mobile: ascunde diagrama din hero ── */
  .hero-chem-diagram { display: none !important; }
  /* Ascunde <br> forțate din titlu și subtitlu pe mobil */
  .hero-title br { display: none; }
  .subtitle-br { display: none; }
  .hero-overlay {
    background: linear-gradient(to right,
      rgba(0,10,20,0.97) 0%,
      rgba(0,10,20,0.92) 60%,
      rgba(0,10,20,0.85) 100%
    ) !important;
  }
  /* Secțiunea chimie separată: vizibilă pe mobil, ascunsă pe desktop */
  .chem-section-mobile { display: block; }
  .chem-section-desktop { display: none; }

  .footer-inner { flex-direction: column; gap: 10px; text-align: center; }

  /* ── Tablet (640px+) ── */
  @media (min-width: 640px) {
    .footer-inner { flex-direction: row; text-align: left; gap: 0; }
    .section-pad { padding: 96px 32px; }
    .section-cta-pad { padding: 128px 32px; }
    .hero-inner { padding: 120px 32px 72px; }

    .benefits-grid { grid-template-columns: repeat(2, 1fr); }
    .three-col { grid-template-columns: repeat(2, 1fr); gap: 28px; }
    .form-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .offer-items { grid-template-columns: 1fr 1fr; }

    .hero-badge { display: block; }
    .cta-btn { display: inline-block; }
  }

  /* ── Desktop (1024px+) ── */
  @media (min-width: 1024px) {
    .nav-inner { padding: 20px 56px; }
    .desktop-nav { display: flex !important; }
    .desktop-cta { display: inline-flex !important; }
    .hamburger { display: none !important; }

    .hero-inner { padding: 128px 56px 80px; }
    .hero-grid { grid-template-columns: repeat(2, 1fr); gap: 96px; }
    .hero-cta { text-align: left; }

    .section-pad { padding: 144px 56px; }
    .section-cta-pad { padding: 192px 56px; }

    .two-col { grid-template-columns: 1fr 1fr; gap: 64px; }
    .benefits-grid { grid-template-columns: repeat(5, 1fr); }
    .three-col { grid-template-columns: repeat(3, 1fr); gap: 32px; }

    .form-card { padding: 48px; }

    .offer-card { border-radius: 40px; }
    .offer-inner { padding: 80px; gap: 64px; }

    /* Restore desktop diagram position */
    .hero-chem-diagram {
      display: block !important;
      left: 46% !important;
      top: 50% !important;
      transform: translateY(-50%) !important;
      width: min(52vw, 700px) !important;
    }
    .hero-overlay {
      background: linear-gradient(to right,
        rgba(0,10,20,0.95) 0%,
        rgba(0,10,20,0.92) 34%,
        rgba(0,10,20,0.35) 52%,
        rgba(0,10,20,0.02) 100%
      ) !important;
    }
    .chem-section-mobile { display: none; }
    .hero-title br { display: inline; }
    .product-syringe { order: 0; }
    .product-text { order: 0; }
    .subtitle-br { display: inline; }
  }
`
document.head.appendChild(style)

/* ─── App root ─── */
/* ─── Cookie Banner ─── */
function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie_consent'))

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#004a5d', color: 'white', padding: '20px 24px', boxShadow: '0 -8px 32px rgba(0,0,0,0.2)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: 700 }}>
          Folosim cookie-uri pentru a analiza traficul și a îmbunătăți experiența pe site. Prin continuarea navigării, ești de acord cu utilizarea acestora. {' '}
          <a href="/politica-cookies" style={{ color: '#89d0ed', textDecoration: 'underline' }}>Politică Cookies</a>
        </p>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          <button
            onClick={() => { localStorage.setItem('cookie_consent', 'rejected'); setVisible(false) }}
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', padding: '10px 20px', borderRadius: 2, fontSize: 13, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
          >
            Refuz
          </button>
          <button
            onClick={accept}
            style={{ background: 'white', color: '#004a5d', padding: '10px 24px', borderRadius: 2, fontSize: 13, fontWeight: 700, cursor: 'pointer', border: 'none', fontFamily: 'Inter, sans-serif' }}
          >
            Accept
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function App() {
  useEffect(() => {
    document.title = 'Demonstrație Gratuită AUGMA Bond Apatite | Bonesphere România'
    const setMeta = (sel, val, attr = 'content') => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute(attr, val)
    }
    setMeta('meta[name="description"]', 'Vedeți Bond Apatite în acțiune la cabinetul dvs. 20 de minute, fără obligații. Augmentare osoasă cu Sulfat de Calciu Bifazic — singurul brevetat din lume, premiat cu Thomas Edison Award 2019.')
    setMeta('link[rel="canonical"]', 'https://start.bonesphere.ro/demonstratie', 'href')
    setMeta('meta[property="og:url"]', 'https://start.bonesphere.ro/demonstratie')
    setMeta('meta[property="og:title"]', 'Demonstrație Gratuită AUGMA Bond Apatite | Bonesphere')
    setMeta('meta[property="og:description"]', 'Vedeți Bond Apatite în acțiune la cabinetul dvs. 20 de minute, fără obligații.')
    setMeta('meta[name="twitter:title"]', 'Demonstrație Gratuită AUGMA Bond Apatite | Bonesphere')
    setMeta('meta[name="twitter:description"]', 'Vedeți Bond Apatite în acțiune la cabinetul dvs. 20 de minute, fără obligații.')
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ChemistrySection />
        <ProductExplanation />
        <Benefits />
        <SolutionsCarousel />
        <Protocol />
        <Proof />
        <Testimonials />
        <Offer />
        <LeadForm />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
