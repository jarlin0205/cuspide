import { useState, type FormEvent } from 'react'
import { supabase, supabaseReady } from '../lib/supabase'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const servicios = [
  'Desarrollo de Software',
  'Apps Móviles',
  'Análisis de Datos',
  'Soporte IT',
  'Cloud & DevOps',
  'Inteligencia Artificial',
  'Otro',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', servicio: '', mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')
  const [phoneError, setPhoneError] = useState(false)

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setPhoneError(false)

    if (!form.nombre || !form.email || !form.mensaje) {
      setStatus('err')
      return
    }

    if (form.telefono && !isValidPhoneNumber(form.telefono)) {
      setPhoneError(true)
      setStatus('err')
      return
    }

    if (!supabaseReady) {
      setStatus('err')
      return
    }
    setStatus('loading')
    const { error } = await supabase.from('leads').insert([form])
    if (error) {
      console.error(error)
      setStatus('err')
    } else {
      setStatus('ok')
      setForm({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })
    }
  }

  return (
    <div className="contact-form-wrap reveal">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cf-nombre">Nombre *</label>
            <input
              id="cf-nombre"
              type="text"
              placeholder="Tu nombre completo"
              value={form.nombre}
              onChange={(e) => set('nombre', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cf-email">Email *</label>
            <input
              id="cf-email"
              type="email"
              placeholder="tu@empresa.com"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group phone-group">
            <label htmlFor="cf-telefono">WhatsApp</label>
            <PhoneInput
              id="cf-telefono"
              defaultCountry="CO"
              placeholder="300 000 0000"
              value={form.telefono}
              onChange={(v) => set('telefono', v || '')}
              className={phoneError ? 'phone-error' : ''}
            />
            {phoneError && <span style={{color: '#E07B7B', fontSize: '0.6rem', marginTop: '4px'}}>Número inválido</span>}
          </div>
          <div className="form-group">
            <label htmlFor="cf-servicio">Servicio de interés</label>
            <select
              id="cf-servicio"
              value={form.servicio}
              onChange={(e) => set('servicio', e.target.value)}
            >
              <option value="">Selecciona un servicio</option>
              {servicios.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cf-mensaje">Mensaje *</label>
          <textarea
            id="cf-mensaje"
            rows={4}
            placeholder="Cuéntanos sobre tu proyecto..."
            value={form.mensaje}
            onChange={(e) => set('mensaje', e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-p" disabled={status === 'loading'} style={{ width: '100%' }}>
          <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}</span>
        </button>

        {status === 'ok' && (
          <p className="form-status ok">
            ✓ Mensaje enviado. Te contactaremos pronto.
          </p>
        )}
        {status === 'err' && (
          <p className="form-status err">
            ✕ Hubo un error. Verifica los campos o escríbenos directo al correo.
          </p>
        )}
      </form>
    </div>
  )
}
