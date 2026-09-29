import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useAnimate } from '../hooks/useAnimate'

const STATS = [
  { value: '20+', label: 'Años de trayectoria' },
  { value: '850+', label: 'Casos resueltos' },
  { value: '98%', label: 'Satisfacción' },
  { value: '200+', label: 'Clientes activos' },
]

const SERVICES_PREVIEW = [
  { icon: '⚖️', title: 'Derecho Corporativo', desc: 'Constitución, fusiones, gobierno corporativo y compliance para empresas nacionales e internacionales.' },
  { icon: '🏛️', title: 'Litigio Civil', desc: 'Representación experta ante tribunales federales y locales con estrategia sólida.' },
  { icon: '🏠', title: 'Derecho Inmobiliario', desc: 'Compraventa, arrendamiento, fideicomisos y regularización de inmuebles en CDMX.' },
  { icon: '📋', title: 'Derecho Fiscal', desc: 'Planeación fiscal, defensa ante el SAT y cumplimiento tributario.' },
]

const TESTIMONIALS = [
  {
    quote: 'VC-Abogados salvó nuestra empresa. Su manejo del proceso de reestructura fue impecable — rápido, discreto y con resultados que superaron nuestras expectativas.',
    name: 'Carlos Mendoza Torres',
    role: 'Director General, Grupo Mendoza',
  },
  {
    quote: 'Contraté al despacho para un litigio que parecía perdido. Valentina y su equipo encontraron los argumentos precisos. Recuperé lo que era mío.',
    name: 'Ing. Patricia Salinas',
    role: 'Empresaria independiente',
  },
  {
    quote: 'Excelencia profesional y trato humano. Me guiaron paso a paso en la adquisición de mi inmueble. Total transparencia en todo momento.',
    name: 'Dr. Alejandro Ríos',
    role: 'Médico, cliente desde 2018',
  },
]

function AnimBlock({ children, cls = 'anim-fade-up', delay = '', threshold = 0.15 }: {
  children: React.ReactNode
  cls?: string
  delay?: string
  threshold?: number
}) {
  const ref = useAnimate(threshold) as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeT, setActiveT] = useState(0)

  useEffect(() => {
    const fn = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActiveT(v => (v + 1) % TESTIMONIALS.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div ref={heroRef} style={{ position: 'absolute', inset: '-20%', zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&h=1000&fit=crop&auto=format"
            alt=""
            aria-hidden
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.4)' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg,rgba(10,10,10,0.94) 45%,rgba(10,10,10,0.70) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 3, background: 'linear-gradient(to bottom,transparent,#c8a96e 30%,#c8a96e 70%,transparent)', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '130px 24px 160px', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>
            <span className="section-label" style={{ animation: 'fadeIn 0.8s 0.1s both' }}>
              Despacho Jurídico · Ciudad de México · Est. 2004
            </span>
            <h1 className="display" style={{ fontSize: 'clamp(40px,7vw,82px)', color: '#f0ece3', marginBottom: 24, animation: 'fadeUp 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both' }}>
              Defensa Legal<br />
              <em style={{ color: '#c8a96e' }}>con Convicción</em>
            </h1>
            <p style={{ fontSize: 18, color: '#a09890', lineHeight: 1.75, maxWidth: 520, marginBottom: 48, fontWeight: 300, animation: 'fadeUp 0.9s 0.35s cubic-bezier(0.22,1,0.36,1) both' }}>
              Más de dos décadas acompañando a empresas y particulares con asesoría jurídica de alto nivel. Conocemos México — sus leyes, sus tribunales y su ritmo.
            </p>
            <div className="hero-ctas" style={{ display: 'flex', gap: 16, animation: 'fadeUp 0.9s 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
              <Link to="/contacto" className="btn-gold">Consulta Gratuita</Link>
              <Link to="/servicios" className="btn-outline">Ver Servicios</Link>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, background: 'rgba(14,13,11,0.92)', borderTop: '1px solid #2a2520', backdropFilter: 'blur(12px)', animation: 'fadeIn 1s 0.7s both' }}>
          <div className="grid-4stat" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ padding: '28px 20px', borderRight: i < 3 ? '1px solid #2a2520' : 'none', textAlign: 'center' }}>
                <div className="display" style={{ fontSize: 34, color: '#c8a96e' }}>{s.value}</div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimBlock>
            <span className="section-label">Áreas de Práctica</span>
            <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,50px)', maxWidth: 560, marginBottom: 64 }}>
              Soluciones jurídicas a la medida de sus necesidades
            </h2>
          </AnimBlock>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 1, background: '#2a2520' }}>
            {SERVICES_PREVIEW.map((s, i) => (
              <AnimBlock key={i} delay={`delay-${(i + 1) * 100}`}>
                <div
                  style={{ background: '#0a0a0a', padding: '44px 36px', height: '100%', transition: 'background 0.25s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#111')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
                >
                  <div style={{ fontSize: 30, marginBottom: 20 }}>{s.icon}</div>
                  <h3 className="display" style={{ fontSize: 20, fontWeight: 600, marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#7a7470', lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
                  <span className="gold-rule" style={{ marginTop: 24 }} />
                </div>
              </AnimBlock>
            ))}
          </div>
          <AnimBlock delay="delay-500">
            <div style={{ marginTop: 48, textAlign: 'center' }}>
              <Link to="/servicios" className="btn-outline">Ver todos los servicios</Link>
            </div>
          </AnimBlock>
        </div>
      </section>

      {/* ── NOSOTROS PREVIEW ── */}
      <section style={{ padding: '100px 0', background: '#0e0d0b' }}>
        <div className="grid-2col" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <AnimBlock cls="anim-slide-left">
            <div style={{ position: 'relative' }}>
              <div style={{ background: '#1a1816', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=875&fit=crop&auto=format"
                  alt="Oficinas VC-Abogados Polanco"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ position: 'absolute', bottom: -32, right: -32, background: '#c8a96e', padding: '28px 36px', color: '#0a0a0a' }}>
                <div className="display" style={{ fontSize: 40, fontWeight: 700 }}>20</div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, marginTop: 4 }}>años de<br />excelencia</div>
              </div>
            </div>
          </AnimBlock>
          <AnimBlock cls="anim-slide-right">
            <span className="section-label">Quiénes Somos</span>
            <h2 className="display" style={{ fontSize: 'clamp(26px,3.5vw,44px)', marginBottom: 28, lineHeight: 1.2 }}>
              Un despacho comprometido con la justicia
            </h2>
            <p style={{ fontSize: 16, color: '#9a9490', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
              Fundado en 2004 por Valentina Castillo y Rodrigo Vega, VC-Abogados nació con una premisa clara: ofrecer asesoría de primer nivel con el conocimiento profundo del sistema jurídico mexicano.
            </p>
            <p style={{ fontSize: 15, color: '#6a6560', lineHeight: 1.85, marginBottom: 40, fontWeight: 300 }}>
              Operamos desde Polanco, CDMX, con presencia en Monterrey y Guadalajara. Atendemos clientes nacionales e internacionales con la misma dedicación.
            </p>
            <Link to="/nosotros" className="btn-gold">Conocer al equipo</Link>
          </AnimBlock>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimBlock>
            <span className="section-label">Testimonios</span>
            <h2 className="display" style={{ fontSize: 'clamp(26px,4vw,46px)', marginBottom: 64 }}>Lo que dicen nuestros clientes</h2>
          </AnimBlock>
          <div style={{ position: 'relative', minHeight: 220 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: activeT === i ? 1 : 0,
                transform: activeT === i ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                pointerEvents: activeT === i ? 'auto' : 'none',
              }}>
                <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                  <div className="display" style={{ fontSize: 'clamp(17px,2.5vw,23px)', fontStyle: 'italic', color: '#d4cfc8', lineHeight: 1.75, marginBottom: 36 }}>
                    "{t.quote}"
                  </div>
                  <span className="gold-rule" style={{ margin: '0 auto 24px', display: 'block' }} />
                  <p style={{ fontSize: 14, color: '#c8a96e', fontWeight: 600, letterSpacing: 1 }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: '#6a6560', marginTop: 4 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 48 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveT(i)} style={{
                width: activeT === i ? 32 : 8, height: 8,
                background: activeT === i ? '#c8a96e' : '#3a3530',
                border: 'none', cursor: 'pointer',
                transition: 'width 0.3s ease, background 0.3s ease',
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#14120e,#0f0d0a)', borderTop: '1px solid #2a2520', textAlign: 'center' }}>
        <AnimBlock cls="anim-scale-in">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>¿Necesita asesoría legal?</span>
          <h2 className="display" style={{ fontSize: 'clamp(26px,4vw,46px)', marginBottom: 20 }}>
            Primera consulta <em style={{ color: '#c8a96e' }}>sin costo</em>
          </h2>
          <p style={{ fontSize: 15, color: '#6a6560', maxWidth: 480, margin: '0 auto 40px', fontWeight: 300, lineHeight: 1.75 }}>
            Evaluamos su caso con absoluta confidencialidad y le ofrecemos una estrategia clara desde el primer día.
          </p>
          <Link to="/contacto" className="btn-gold" style={{ padding: '18px 52px' }}>Agendar Consulta</Link>
        </AnimBlock>
      </section>
    </div>
  )
}
