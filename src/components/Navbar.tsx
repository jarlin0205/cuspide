export default function Navbar() {
  return (
    <nav>
      <a href="#" className="logo">
        <div className="logo-mark" />
        Cúspide Digital
      </a>
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
    </nav>
  )
}
