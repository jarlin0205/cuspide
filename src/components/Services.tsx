const services = [
  { n: '01', ico: '⚡', name: 'Desarrollo de Software', desc: 'Aplicaciones web robustas y escalables. Desde MVPs hasta plataformas empresariales con arquitecturas modernas y código limpio.' },
  { n: '02', ico: '📱', name: 'Apps Móviles', desc: 'Aplicaciones iOS y Android nativas o multiplataforma con React Native y Flutter. Diseño, rendimiento y experiencia de usuario impecables.' },
  { n: '03', ico: '📊', name: 'Análisis de Datos', desc: 'Convertimos datos brutos en inteligencia accionable. Dashboards, modelos predictivos, pipelines de datos y Business Intelligence.' },
  { n: '04', ico: '🛡️', name: 'Soporte IT', desc: 'Mantenimiento preventivo, help desk, gestión de infraestructura y continuidad operacional garantizada para su empresa.' },
  { n: '05', ico: '☁️', name: 'Cloud & DevOps', desc: 'Migración y gestión en AWS, GCP y Azure. CI/CD, contenedores, Kubernetes y automatización de infraestructura a escala.' },
  { n: '06', ico: '🤖', name: 'Inteligencia Artificial', desc: 'IA aplicada a su negocio: automatización inteligente, chatbots, visión computacional, NLP y modelos de machine learning.' },
]

export default function Services() {
  return (
    <section className="sec" id="servicios">
      <div className="sec-head reveal">
        <div>
          <div className="sec-tag">Lo que hacemos</div>
          <h2 className="sec-title">Servicios<br />Digitales</h2>
        </div>
        <p className="sec-intro">
          Soluciones tecnológicas de clase mundial construidas desde la frontera norte de Colombia, con identidad propia y alcance global.
        </p>
      </div>

      <div className="srv-grid">
        {services.map((s) => (
          <div className="srv reveal" key={s.n}>
            <div className="srv-n">— {s.n}</div>
            <span className="srv-ico">{s.ico}</span>
            <div className="srv-name">{s.name}</div>
            <p className="srv-desc">{s.desc}</p>
            <div className="srv-arr">↗</div>
          </div>
        ))}
      </div>
    </section>
  )
}
