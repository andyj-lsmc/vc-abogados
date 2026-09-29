import { useState } from 'react'
import { Link } from 'react-router'
import { useAnimate } from '../hooks/useAnimate'

const CATEGORIES = ['Todos', 'Corporativo', 'Litigio', 'Inmobiliario', 'Fiscal', 'Laboral']

const CASES = [
  {
    cat: 'Corporativo',
    title: 'Adquisición transfronteriza en sector retail',
    result: 'Transacción de $280 MDP cerrada en 90 días',
    desc: 'Representamos a un grupo inversor español en la adquisición de una cadena mexicana de 18 tiendas. Coordinamos due diligence, negociamos el SPA y obtuvimos aprobación de COFECE.',
    year: '2023',
    color: '#c8a96e',
  },
  {
    cat: 'Litigio',
    title: 'Juicio mercantil por incumplimiento de contrato',
    result: 'Sentencia favorable · $45 MDP recuperados',
    desc: 'Defendimos a una constructora en un litigio de 3 años. Logramos sentencia de primera instancia confirmada en apelación, con pago total de daños y costas.',
    year: '2023',
    color: '#a08050',
  },
  {
    cat: 'Inmobiliario',
    title: 'Fideicomiso inmobiliario zona federal',
    result: 'Operación de $120 MDP en zona restringida',
    desc: 'Estructuramos un fideicomiso para permitir la inversión extranjera en un desarrollo turístico en Los Cabos. El proceso se completó en tiempo récord gracias a nuestra gestión con RAN y SEMARNAT.',
    year: '2022',
    color: '#7a9060',
  },
  {
    cat: 'Fiscal',
    title: 'Defensa fiscal ante auditoría del SAT',
    result: 'Crédito fiscal de $22 MDP cancelado',
    desc: 'Representamos a una empresa manufacturera en un proceso de revisión de auditoría por parte del SAT. Logramos la cancelación total del crédito mediante recurso de revocación.',
    year: '2022',
    color: '#6080a0',
  },
  {
    cat: 'Laboral',
    title: 'Reestructura laboral para empresa farmacéutica',
    result: '340 contratos renegociados sin conflicto colectivo',
    desc: 'Diseñamos e implementamos una estrategia de reestructura laboral que permitió actualizar 340 contratos individuales bajo la reforma de 2021, sin incidentes sindicales ni demandas.',
    year: '2023',
    color: '#906080',
  },
  {
    cat: 'Corporativo',
    title: 'Joint venture con empresa alemana de tecnología',
    result: 'JV operativo en 6 meses',
    desc: 'Estructuramos jurídicamente la alianza entre una fintech mexicana y un socio tecnológico alemán, incluyendo acuerdo de accionistas, licencias de IP y cumplimiento regulatorio financiero.',
    year: '2021',
    color: '#c8a96e',
  },
  {
    cat: 'Litigio',
    title: 'Amparo contra decreto municipal en CDMX',
    result: 'Decreto suspendido · Cliente protegido',
    desc: 'Obtuvimos suspensión definitiva de un decreto municipal que afectaba los derechos de uso de suelo de una cadena hotelera. El juicio de amparo está en etapa de resolución de fondo.',
    year: '2023',
    color: '#a08050',
  },
  {
    cat: 'Fiscal',
    title: 'Planeación fiscal internacional para holding',
    result: 'Ahorro fiscal validado de $8 MDP anuales',
    desc: 'Diseñamos la estructura fiscal de un holding con subsidiarias en México, Estados Unidos y España. La planeación incluyó precios de transferencia y convenios para evitar doble tributación.',
    year: '2022',
    color: '#6080a0',
  },
]

function AnimBlock({ children, cls = 'anim-fade-up', delay = '' }: { children: React.ReactNode, cls?: string, delay?: string }) {
  const ref = useAnimate() as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Casos() {
  const [filter, setFilter] = useState('Todos')
  const filtered = CASES.filter(c => filter === 'Todos' || c.cat === filter)

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: '#0e0d0b', borderBottom: '1px solid #2a2520', paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label" style={{ animation: 'fadeIn 0.6s both' }}>Casos de Éxito</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,72px)', maxWidth: 660, animation: 'fadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
            Resultados que hablan por sí solos
          </h1>
          <p style={{ fontSize: 17, color: '#7a7470', maxWidth: 540, marginTop: 20, fontWeight: 300, lineHeight: 1.8, animation: 'fadeUp 0.8s 0.3s both' }}>
            Una selección de casos representativos. Por confidencialidad, los nombres de los clientes han sido omitidos o generalizados.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '48px 24px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? '#c8a96e' : 'transparent',
                  color: filter === cat ? '#0a0a0a' : '#6a6560',
                  border: `1px solid ${filter === cat ? '#c8a96e' : '#2a2520'}`,
                  padding: '8px 20px',
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  fontWeight: filter === cat ? 600 : 400,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section style={{ padding: '48px 24px 100px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 2, background: '#2a2520' }}>
            {filtered.map((c, i) => (
              <AnimBlock key={`${filter}-${i}`} delay={`delay-${(i % 3 + 1) * 100}`}>
                <div style={{ background: '#0a0a0a', padding: '36px 32px', height: '100%', borderTop: `3px solid ${c.color}`, transition: 'background 0.25s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0e0d0b')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', fontWeight: 500 }}>{c.cat}</span>
                    <span style={{ fontSize: 12, color: '#3a3530' }}>{c.year}</span>
                  </div>
                  <h3 className="display" style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, lineHeight: 1.3 }}>{c.title}</h3>
                  <div style={{ background: '#111', padding: '12px 16px', marginBottom: 16, borderLeft: `2px solid ${c.color}` }}>
                    <p style={{ fontSize: 13, color: '#c8a96e', fontWeight: 500 }}>{c.result}</p>
                  </div>
                  <p style={{ fontSize: 14, color: '#7a7470', lineHeight: 1.7, fontWeight: 300 }}>{c.desc}</p>
                </div>
              </AnimBlock>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: '80px 0', textAlign: 'center', color: '#3a3530' }}>
              <p style={{ fontSize: 15 }}>No hay casos en esta categoría por el momento.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#0e0d0b', borderTop: '1px solid #2a2520' }}>
        <AnimBlock cls="anim-scale-in">
          <h2 className="display" style={{ fontSize: 'clamp(24px,3.5vw,40px)', marginBottom: 20 }}>
            Su caso puede ser el siguiente
          </h2>
          <p style={{ fontSize: 15, color: '#6a6560', maxWidth: 400, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.75 }}>
            Cuéntenos su situación y le diremos con honestidad qué podemos hacer por usted.
          </p>
          <Link to="/contacto" className="btn-gold">Consulta gratuita</Link>
        </AnimBlock>
      </section>
    </div>
  )
}
