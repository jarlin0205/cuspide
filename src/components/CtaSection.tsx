import ContactForm from './ContactForm'

export default function CtaSection() {
  return (
    <section className="cta-sec" id="contacto">
      <div className="sec-tag">¿Listo para subir?</div>
      <h2 className="cta-title reveal">
        <span>Lleva tu empresa</span>
        <span className="outline">a la cúspide</span>
      </h2>
      <p className="cta-sub reveal">
        Desde Maicao al mundo. Hablemos sobre tu próximo proyecto tecnológico y construyamos algo que dure.
      </p>

      <ContactForm />

      <div className="hero-btns reveal" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
        <a href="https://wa.me/573004879915" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ width: 'auto', minWidth: '220px' }}>
          <span>WhatsApp <span className="arr">→</span></span>
        </a>
      </div>
    </section>
  )
}
