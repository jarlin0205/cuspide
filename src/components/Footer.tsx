export default function Footer() {
  return (
    <>
      <footer>
        <div className="f-brand">
          <div className="logo" style={{ marginBottom: '1.5rem' }}>
            <div className="logo-mark" />
            Cúspide Digital
          </div>
          <p className="f-tagline">
            Tecnología de frontera con visión de futuro. Maicao, La Guajira — Colombia.
          </p>
        </div>

        <div className="f-col">
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">Software a Medida</a></li>
            <li><a href="#servicios">Apps Móviles</a></li>
            <li><a href="#servicios">Análisis de Datos</a></li>
            <li><a href="#servicios">Soporte IT</a></li>
            <li><a href="#servicios">Cloud & DevOps</a></li>
            <li><a href="#servicios">Inteligencia Artificial</a></li>
          </ul>
        </div>

        <div className="f-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#identidad">Nosotros</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Blog Tech</a></li>
            <li><a href="/admin">Acceso Admin</a></li>
          </ul>
        </div>

        <div className="f-col">
          <h4>Contacto</h4>
          <ul>
            <li><a href="#">Maicao, La Guajira</a></li>
            <li><a href="mailto:hola@cuspidedigital.co">hola@cuspidedigital.co</a></li>
            <li><a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </footer>

      <div className="f-bottom">
        <span>© 2025 Cúspide Digital — Todos los derechos reservados</span>
        <span>Hecho con orgullo en el norte de Colombia 🇨🇴</span>
        <span>Ingenieros Jarlin Esquivel & Carlos Bastidas</span>
      </div>
    </>
  )
}
