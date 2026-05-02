import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'err'>('idle')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setErrMsg('Credenciales incorrectas. Verifica tu email y contraseña.')
      setStatus('err')
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <div className="admin-login-wrap">
      {/* Background grid */}
      <div className="admin-bg-grid" />

      <div className="admin-login-card">
        {/* Logo */}
        <div className="admin-logo">
          <div className="logo-mark" />
          <span>Cúspide Digital</span>
        </div>

        <div className="admin-login-header">
          <h1 className="admin-login-title">Panel de<br /><span className="admin-login-title-outline">Administración</span></h1>
          <p className="admin-login-sub">Acceso restringido · Solo personal autorizado</p>
        </div>

        <form onSubmit={handleLogin} className="admin-form" noValidate>
          <div className="form-group">
            <label htmlFor="admin-email">Email</label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              placeholder="admin@cuspidedigital.co"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password">Contraseña</label>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errMsg && (
            <p className="form-status err" style={{ textAlign: 'left', marginBottom: '.8rem' }}>
              ✕ {errMsg}
            </p>
          )}

          <button type="submit" className="btn-p" disabled={status === 'loading'} style={{ width: '100%' }}>
            <span>{status === 'loading' ? 'Verificando...' : 'Ingresar al Panel'}</span>
          </button>
        </form>

        <p className="admin-login-note">
          ← <a href="/" style={{ color: 'rgba(212,168,67,.4)', textDecoration: 'none' }}>Volver al sitio</a>
        </p>
      </div>
    </div>
  )
}
