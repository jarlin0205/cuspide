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
        <a href="mailto:hola@cuspidedigital.co" className="btn-p">
          <span>hola@cuspidedigital.co</span>
        </a>
        <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer" className="btn-s">
          WhatsApp <span className="arr">→</span>
        </a>
      </div>
    </section>
  )
}
