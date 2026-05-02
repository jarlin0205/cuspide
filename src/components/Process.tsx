const steps = [
  { n: '01', name: 'Diagnóstico', desc: 'Entendemos su negocio, sus retos y sus metas en profundidad. Nada genérico: todo nace de la realidad de su empresa.' },
  { n: '02', name: 'Arquitectura', desc: 'Diseñamos la solución técnica óptima. Stack correcto, escalabilidad desde el día uno y sin deuda técnica futura.' },
  { n: '03', name: 'Construcción', desc: 'Desarrollo ágil con entregas incrementales. Usted ve progreso real cada semana, no al final del contrato.' },
  { n: '04', name: 'Lanzamiento', desc: 'Despliegue controlado, QA riguroso y acompañamiento post-entrega. Su éxito es nuestra reputación.' },
]

export default function Process() {
  return (
    <section className="sec" id="proceso">
      <div className="sec-head reveal">
        <div>
          <div className="sec-tag">Metodología</div>
          <h2 className="sec-title">Proceso<br />Probado</h2>
        </div>
        <p className="sec-intro">Un enfoque claro de inicio a fin. Sin sorpresas, con entregas reales en cada etapa.</p>
      </div>

      <div className="proc-grid">
        {steps.map((s) => (
          <div className="proc-step reveal" key={s.n}>
            <div className="proc-num">{s.n}</div>
            <div className="proc-name">{s.name}</div>
            <p className="proc-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
