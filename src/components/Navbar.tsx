import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'

const LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Casos', to: '/casos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      borderBottom: `1px solid ${scrolled ? '#2a2520' : 'transparent'}`,
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#c8a96e', letterSpacing: 1 }}>VC</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 400, color: '#f0ece3', letterSpacing: 5, textTransform: 'uppercase' }}>Abogados</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: 12,
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 500,
                color: isActive ? '#c8a96e' : '#d4cfc8',
                borderBottom: `1px solid ${isActive ? '#c8a96e' : 'transparent'}`,
                paddingBottom: 2,
                transition: 'color 0.2s, border-color 0.2s',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contacto" className="btn-gold" style={{ padding: '10px 22px', fontSize: 11 }}>
            Consulta Gratis
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menú"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#c8a96e', transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#c8a96e', transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 16, height: 2, background: '#c8a96e', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(3px,-4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden',
        maxHeight: menuOpen ? 400 : 0,
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        background: '#0e0d0b',
        borderTop: menuOpen ? '1px solid #2a2520' : 'none',
      }}>
        <div style={{ padding: '16px 24px 28px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {LINKS.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                padding: '12px 0',
                fontSize: 13,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: isActive ? '#c8a96e' : '#f0ece3',
                borderBottom: '1px solid #1a1816',
                fontWeight: isActive ? 600 : 400,
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
