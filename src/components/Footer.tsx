import { NavLink } from 'react-router'

const COLS = [
  {
    title: 'Servicios',
    links: ['Derecho Corporativo', 'Litigio Civil', 'Derecho Inmobiliario', 'Derecho Laboral', 'Derecho Fiscal', 'Amparo'],
  },
  {
    title: 'Despacho',
    links: ['Nosotros', 'Equipo', 'Casos de Éxito', 'Blog Jurídico'],
  },
  {
    title: 'Contacto',
    links: ['Masaryk 111, Piso 8, Polanco', 'CDMX 11560, México', '+52 (55) 5280 3400', 'contacto@vcabogados.mx'],
    noLink: true,
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1a1715' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#c8a96e' }}>VC</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, letterSpacing: 5, textTransform: 'uppercase', color: '#f0ece3' }}>Abogados</span>
            </div>
            <p style={{ fontSize: 14, color: '#6a6560', lineHeight: 1.8, maxWidth: 260, fontWeight: 300 }}>
              Despacho jurídico de alto nivel en Ciudad de México. Fundado en 2004, comprometido con la excelencia y la justicia.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['in', 'tw', 'ig'].map(s => (
                <div key={s} style={{
                  width: 36, height: 36, border: '1px solid #2a2520',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: '#6a6560', cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                  textTransform: 'uppercase', letterSpacing: 1,
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c8a96e'; (e.currentTarget as HTMLElement).style.color = '#c8a96e' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2520'; (e.currentTarget as HTMLElement).style.color = '#6a6560' }}
                >{s}</div>
              ))}
            </div>
          </div>

          {COLS.map(col => (
            <div key={col.title}>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#c8a96e', fontWeight: 500, marginBottom: 20 }}>{col.title}</p>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    {col.noLink ? (
                      <span style={{ fontSize: 13, color: '#5a5248' }}>{l}</span>
                    ) : (
                      <span
                        style={{ fontSize: 13, color: '#5a5248', cursor: 'pointer', transition: 'color 0.2s' }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#c8a96e')}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#5a5248')}
                      >{l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #1a1715', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#3a3530' }}>© 2024 VC-Abogados S.C. · Todos los derechos reservados</p>
          <p style={{ fontSize: 12, color: '#3a3530' }}>Cédula Profesional · Barra Mexicana · ANADE</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
