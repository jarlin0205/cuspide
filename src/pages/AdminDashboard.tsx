import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

type Lead = {
  id: string
  nombre: string
  email: string
  telefono: string | null
  servicio: string | null
  mensaje: string | null
  created_at: string
}

const SERVICIOS = ['Todos', 'Desarrollo de Software', 'Apps Móviles', 'Análisis de Datos', 'Soporte IT', 'Cloud & DevOps', 'Inteligencia Artificial', 'Otro']

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CO', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function thisWeek(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)
  return diff <= 7
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterServicio, setFilterServicio] = useState('Todos')
  const [selected, setSelected] = useState<Lead | null>(null)
  const [adminEmail, setAdminEmail] = useState('')

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      console.error(error)
    } else {
      setLeads(data || [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/admin')
      } else {
        setAdminEmail(data.session.user.email || '')
        fetchLeads()
      }
    })
  }, [navigate, fetchLeads])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin')
  }

  const filtered = leads.filter((l) => {
    const matchSearch =
      l.nombre.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.telefono || '').toLowerCase().includes(search.toLowerCase())
    const matchServicio =
      filterServicio === 'Todos' || l.servicio === filterServicio
    return matchSearch && matchServicio
  })

  const total = leads.length
  const semana = leads.filter((l) => thisWeek(l.created_at)).length
  const servicioTop = leads.length
    ? Object.entries(
        leads.reduce((acc: Record<string, number>, l) => {
          const s = l.servicio || 'Otro'
          acc[s] = (acc[s] || 0) + 1
          return acc
        }, {})
      ).sort((a, b) => b[1] - a[1])[0][0]
    : '—'

  return (
    <div className="admin-wrap">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="admin-logo" style={{ marginBottom: '2.5rem' }}>
          <div className="logo-mark" />
          <span>Cúspide</span>
        </div>

        <nav className="admin-nav">
          <a href="#" className="admin-nav-item active">
            <span className="admin-nav-ico">📋</span>
            Leads
          </a>
          <a href="/" className="admin-nav-item" target="_blank" rel="noopener noreferrer">
            <span className="admin-nav-ico">🌐</span>
            Ver Sitio
          </a>
        </nav>

        <div className="admin-user">
          <div className="admin-user-dot" />
          <div>
            <div className="admin-user-label">Administrador</div>
            <div className="admin-user-email">{adminEmail}</div>
          </div>
        </div>
        <button className="admin-logout" onClick={handleLogout}>
          Cerrar Sesión →
        </button>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        {/* HEADER */}
        <div className="admin-header">
          <div>
            <h1 className="admin-page-title">Solicitudes <span style={{ color: 'var(--gold)' }}>& Leads</span></h1>
            <p className="admin-page-sub">Formularios de contacto recibidos desde el sitio web</p>
          </div>
          <button className="btn-s" onClick={fetchLeads} style={{ fontSize: '.6rem' }}>
            ↻ Actualizar
          </button>
        </div>

        {/* STATS */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-num">{total}</div>
            <div className="admin-stat-label">Total Leads</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num" style={{ color: 'var(--cyan)' }}>{semana}</div>
            <div className="admin-stat-label">Esta Semana</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num" style={{ fontSize: '1.1rem', paddingTop: '.5rem' }}>{servicioTop}</div>
            <div className="admin-stat-label">Servicio más solicitado</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num">{filtered.length}</div>
            <div className="admin-stat-label">Resultados filtrados</div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="admin-filters">
          <input
            className="admin-search"
            type="text"
            placeholder="🔍  Buscar por nombre, email o teléfono..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="admin-filter-btns">
            {SERVICIOS.map((s) => (
              <button
                key={s}
                className={`admin-filter-btn ${filterServicio === s ? 'active' : ''}`}
                onClick={() => setFilterServicio(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        {loading ? (
          <div className="admin-loading">Cargando leads...</div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">
            <span style={{ fontSize: '2.5rem' }}>📭</span>
            <p>No hay leads con los filtros actuales.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Servicio</th>
                  <th>Fecha</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l, i) => (
                  <tr key={l.id} className={thisWeek(l.created_at) ? 'lead-new' : ''}>
                    <td className="lead-index">{i + 1}</td>
                    <td className="lead-nombre">{l.nombre}</td>
                    <td>
                      <a href={`mailto:${l.email}`} className="lead-email">{l.email}</a>
                    </td>
                    <td>
                      {l.telefono
                        ? <a href={`https://wa.me/${l.telefono.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="lead-wa">{l.telefono}</a>
                        : <span className="lead-null">—</span>}
                    </td>
                    <td>
                      {l.servicio
                        ? <span className="lead-tag">{l.servicio}</span>
                        : <span className="lead-null">—</span>}
                    </td>
                    <td className="lead-date">
                      {thisWeek(l.created_at) && <span className="badge-new">NUEVO</span>}
                      {fmtDate(l.created_at)}
                    </td>
                    <td>
                      <button className="lead-ver-btn" onClick={() => setSelected(l)}>Ver →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* MODAL detalle */}
      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">Detalle del Lead</h2>
              <button className="admin-modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-modal-row"><span>Nombre</span><strong>{selected.nombre}</strong></div>
              <div className="admin-modal-row">
                <span>Email</span>
                <a href={`mailto:${selected.email}`} className="lead-email">{selected.email}</a>
              </div>
              <div className="admin-modal-row">
                <span>Teléfono</span>
                <span>{selected.telefono || '—'}</span>
              </div>
              <div className="admin-modal-row">
                <span>Servicio</span>
                {selected.servicio
                  ? <span className="lead-tag">{selected.servicio}</span>
                  : <span className="lead-null">—</span>}
              </div>
              <div className="admin-modal-row">
                <span>Fecha</span>
                <span>{fmtDate(selected.created_at)}</span>
              </div>
              <div className="admin-modal-mensaje">
                <span>Mensaje</span>
                <p>{selected.mensaje || '—'}</p>
              </div>
            </div>
            <div className="admin-modal-footer">
              <a href={`mailto:${selected.email}?subject=Re: Solicitud Cúspide Digital&body=Hola ${selected.nombre},%0A%0A`} className="btn-p" style={{ textDecoration: 'none' }}>
                <span>Responder por Email</span>
              </a>
              {selected.telefono && (
                <a 
                  href={`https://wa.me/${selected.telefono.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${selected.nombre}, soy de Cúspide Digital. 👋\n\nRecibimos tu solicitud sobre "${selected.servicio || 'tus proyectos tecnológicos'}". ¿En qué horario te queda bien que hablemos para darte más detalles?`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-s" 
                  style={{ textDecoration: 'none' }}
                >
                  WhatsApp <span className="arr">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
