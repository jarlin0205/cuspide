const symbols = [
  { ico: '🌽', name: 'Barbas del Maíz', txt: 'Vida y abundancia guajira. Nuestras líneas de código brotan como la mazorca: orgánicas, fecundas y profundamente enraizadas.' },
  { ico: '🐦', name: 'El Rey Guajiro', txt: 'El Toche Pechiamarillo, ave insignia. Su vuelo sin fronteras inspira nuestra visión: alta, libre y siempre hacia la cúspide.' },
  { ico: '🧶', name: 'Tejido Wayuu', txt: 'El chinchorro tejido con patrón y propósito. Así construimos software: estructura precisa, color propio y personalidad.' },
  { ico: '📍', name: 'Punta Gallinas', txt: 'El punto más norte de Suramérica, en nuestra Guajira. Desde aquí, apuntamos hacia arriba y hacia el mundo entero.' },
]

export default function Identity() {
  return (
    <section className="identity" id="identidad">
      <div className="identity-grid">
        <div className="reveal">
          <div className="sec-tag">Nuestra Raíz</div>
          <p className="big-q">
            Nacimos en <em>Maicao</em>, la ciudad de la frontera norte de Colombia, donde el desierto guajiro abraza al Caribe.
          </p>
          <p className="identity-body">
            Somos hijos del territorio Wayuu. Llevamos en nuestro ADN la resistencia del pueblo indígena, la fertilidad del maíz con sus barbas doradas y el vuelo altísimo del Toche Pechiamarillo — el Rey Guajiro. Hacemos tecnología con alma territorial y visión de cúspide.
          </p>
        </div>
        <div className="sym-grid">
          {symbols.map((s) => (
            <div className="sym reveal" key={s.name}>
              <span className="sym-ico">{s.ico}</span>
              <div className="sym-name">{s.name}</div>
              <p className="sym-txt">{s.txt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
