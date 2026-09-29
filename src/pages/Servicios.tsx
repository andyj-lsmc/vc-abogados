import { useState } from 'react'
import { Link } from 'react-router'
import { useAnimate } from '../hooks/useAnimate'

const SERVICES = [
  {
    icon: '⚖️',
    title: 'Derecho Corporativo',
    short: 'Constitución de empresas, fusiones y adquisiciones, gobierno corporativo y compliance.',
    details: [
      'Constitución y estructuración de sociedades mercantiles',
      'Fusiones, adquisiciones y due diligence',
      'Gobierno corporativo y acuerdos de accionistas',
      'Contratos comerciales y negociación',
      'Cumplimiento normativo y compliance',
      'Reestructuras y joint ventures',
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=500&fit=crop&auto=format',
  },
  {
    icon: '🏛️',
    title: 'Litigio Civil y Mercantil',
    short: 'Representación experta ante tribunales federales y locales con resultados comprobados.',
    details: [
      'Juicios civiles y mercantiles',
      'Cobro de deudas y ejecución de contratos',
      'Responsabilidad civil extracontractual',
      'Nulidades y rescisiones contractuales',
      'Procedimientos arbitrales nacionales e internacionales',
      'Ejecución de laudos y sentencias extranjeras',
    ],
    img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=700&h=500&fit=crop&auto=format',
  },
  {
    icon: '🏠',
    title: 'Derecho Inmobiliario',
    short: 'Compraventa, arrendamiento, fideicomisos y regularización de inmuebles en CDMX.',
    details: [
      'Compraventa de inmuebles residenciales y comerciales',
      'Fideicomisos inmobiliarios (zonas restringidas)',
      'Contratos de arrendamiento y comodato',
      'Regularización y escrituración',
      'Asesóría en desarrollos inmobiliarios',
      'Due diligence jurídico de propiedades',
    ],
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=500&fit=crop&auto=format',
  },
  {
    icon: '👥',
    title: 'Derecho Laboral',
    short: 'Asesoría integral a empresas e individuos en materia de trabajo y seguridad social.',
    details: [
      'Contratos colectivos e individuales de trabajo',
      'Terminaciones laborales estratégicas',
      'Auditorías laborales preventivas',
      'Defensa ante STPS y juntas de conciliación',
      'Outsourcing y subcontratación (reforma 2021)',
      'Planes de beneficios y compensación variable',
    ],
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=500&fit=crop&auto=format',
  },
  {
    icon: '📋',
    title: 'Derecho Fiscal',
    short: 'Planeación fiscal, defensa ante el SAT y cumplimiento de obligaciones tributarias.',
    details: [
      'Planeación fiscal para personas físicas y morales',
      'Defensa jurídica ante el SAT',
      'Recursos administrativos y juicio contencioso',
      'Precios de transferencia',
      'Regularización de obligaciones fiscales',
      'Estructura fiscal internacional',
    ],
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=500&fit=crop&auto=format',
  },
  {
    icon: '🛡️',
    title: 'Amparo y Constitucional',
    short: 'Defensa de derechos fundamentales mediante juicio de amparo ante la SCJN.',
    details: [
      'Amparo indirecto y directo',
      'Controversias constitucionales',
      'Acciones de inconstitucionalidad',
      'Defensa penal estratégica',
      'Derechos humanos ante organismos internacionales',
      'Revisión constitucional de normas',
    ],
    img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=700&h=500&fit=crop&auto=format',
  },
]

function AnimBlock({ children, cls = 'anim-fade-up', delay = '' }: { children: React.ReactNode, cls?: string, delay?: string }) {
  const ref = useAnimate() as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Servicios() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: '#0e0d0b', borderBottom: '1px solid #2a2520', paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label" style={{ animation: 'fadeIn 0.6s both' }}>Áreas de Práctica</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,72px)', maxWidth: 700, animation: 'fadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
            Expertise jurídico en cada área del derecho
          </h1>
          <p style={{ fontSize: 17, color: '#7a7470', maxWidth: 560, marginTop: 20, fontWeight: 300, lineHeight: 1.8, animation: 'fadeUp 0.8s 0.3s cubic-bezier(0.22,1,0.36,1) both' }}>
            Cada área de práctica cuenta con especialistas dedicados. No somos generalistas — somos expertos que trabajan en equipo.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '80px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 2, background: '#2a2520' }}>
            {SERVICES.map((s, i) => (
              <AnimBlock key={i} delay={`delay-${Math.min((i % 3 + 1) * 100, 300)}`}>
                <div
                  onClick={() => setActive(active === i ? null : i)}
                  style={{ background: '#0a0a0a', cursor: 'pointer', transition: 'background 0.25s', overflow: 'hidden' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0e0d0b')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
                >
                  {/* Image */}
                  <div style={{ height: 180, overflow: 'hidden', background: '#1a1816' }}>
                    <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.7)', transition: 'transform 0.5s, filter 0.5s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(10%) brightness(0.8)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(40%) brightness(0.7)' }}
                    />
                  </div>
                  {/* Content */}
                  <div style={{ padding: '32px 32px 28px' }}>
                    <div style={{ fontSize: 26, marginBottom: 14 }}>{s.icon}</div>
                    <h3 className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, color: '#7a7470', lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>{s.short}</p>

                    {/* Expandable details */}
                    <div style={{ maxHeight: active === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
                      <div style={{ borderTop: '1px solid #2a2520', paddingTop: 20, marginTop: 4 }}>
                        <ul style={{ listStyle: 'none' }}>
                          {s.details.map(d => (
                            <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                              <span style={{ color: '#c8a96e', flexShrink: 0, marginTop: 2 }}>›</span>
                              <span style={{ fontSize: 13, color: '#9a9490', lineHeight: 1.5 }}>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                      <span className="gold-rule" />
                      <span style={{ fontSize: 12, color: '#c8a96e', letterSpacing: 1 }}>{active === i ? '— Cerrar' : '+ Detalles'}</span>
                    </div>
                  </div>
                </div>
              </AnimBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#0e0d0b', borderTop: '1px solid #2a2520' }}>
        <AnimBlock cls="anim-scale-in">
          <h2 className="display" style={{ fontSize: 'clamp(24px,3.5vw,40px)', marginBottom: 20 }}>
            ¿No encuentra su área? <em style={{ color: '#c8a96e' }}>Consúltenos</em>
          </h2>
          <p style={{ fontSize: 15, color: '#6a6560', maxWidth: 440, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.75 }}>
            Nuestro equipo cubre prácticamente todas las ramas del derecho mexicano. Escríbanos.
          </p>
          <Link to="/contacto" className="btn-gold">Contactar ahora</Link>
        </AnimBlock>
      </section>
    </div>
  )
}
