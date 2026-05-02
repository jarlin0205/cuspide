import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  return (
    <nav>
      <a href="#" className="logo">
        <div className="logo-mark" />
        Cúspide Digital
      </a>

      {/* Botón Hamburguesa Móvil */}
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú Desktop */}
      <ul className="nav-links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#identidad">Identidad</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li>
          <a href="/admin" className="nav-admin" title="Panel de Administración">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </a>
        </li>
        <li><a href="#contacto" className="nav-cta">Contáctanos</a></li>
      </ul>

      {/* Menú Móvil Overlay */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#identidad" onClick={() => setIsOpen(false)}>Identidad</a>
          <a href="#proceso" onClick={() => setIsOpen(false)}>Proceso</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="mobile-cta">Contáctanos</a>
          
          <a href="/admin" className="mobile-admin" onClick={() => setIsOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Acceso Admin
          </a>
        </div>
      </div>
    </nav>
  )
}
