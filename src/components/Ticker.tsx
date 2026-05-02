const items = [
  'Desarrollo de Software',
  'Apps Móviles iOS & Android',
  'Análisis de Datos & BI',
  'Soporte IT 24/7',
  'Cloud & DevOps',
  'Inteligencia Artificial',
  'Maicao · La Guajira · Colombia',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="tick-wrap">
      <div className="tick">
        {doubled.map((item, i) => (
          <span className="tick-item" key={i}>
            <span className="tick-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
