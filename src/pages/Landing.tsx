import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Services from '../components/Services'
import Identity from '../components/Identity'
import Process from '../components/Process'
import TechStrip from '../components/TechStrip'
import CtaSection from '../components/CtaSection'
import Footer from '../components/Footer'

export default function Landing() {
  useScrollReveal()

  // Floating particles
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes particleRise {
        to { transform: translateY(-105vh) translateX(var(--dx)); opacity: 0; }
      }
      .particle {
        position: fixed; width: 2px; height: 2px;
        background: var(--gold); border-radius: 50%;
        pointer-events: none; z-index: 100;
        animation: particleRise var(--dur) linear forwards;
      }
    `
    document.head.appendChild(style)

    const spawn = () => {
      const p = document.createElement('div')
      p.className = 'particle'
      const dx = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 60
      p.style.setProperty('--dx', `${dx}px`)
      p.style.setProperty('--dur', `${10 + Math.random() * 10}s`)
      p.style.left = Math.random() * 100 + 'vw'
      p.style.bottom = '-4px'
      p.style.opacity = String(Math.random() * 0.4 + 0.1)
      document.body.appendChild(p)
      setTimeout(() => p.remove(), 22000)
    }

    const interval = setInterval(spawn, 900)
    return () => {
      clearInterval(interval)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <div className="stripe" />
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Identity />
      <Process />
      <TechStrip />
      <CtaSection />
      <Footer />
      <div className="stripe" />
    </>
  )
}
