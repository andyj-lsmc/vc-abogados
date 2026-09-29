import { Link } from 'react-router'
import { useAnimate } from '../hooks/useAnimate'

const TEAM = [
  {
    name: 'Lic. Valentina Castillo Ríos',
    role: 'Socia Fundadora',
    specialty: 'Derecho Corporativo · Fusiones y Adquisiciones',
    bio: 'Licenciada en Derecho por la UNAM con maestría en Derecho Empresarial por la Universidad de Barcelona. Fundó VC-Abogados en 2004 tras una década en el área jurídica de Grupo Bimbo. Ha participado en más de 120 transacciones corporativas.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&auto=format',
    years: '18 años de experiencia',
    colegio: 'Barra Mexicana, Colegio de Abogados',
  },
  {
    name: 'Lic. Rodrigo Vega Montoya',
    role: 'Socio',
    specialty: 'Litigio Civil · Amparo',
    bio: 'Egresado del ITAM y con posgrado en el Instituto de Investigaciones Jurídicas de la UNAM. Ha litigado más de 300 juicios civiles, mercantiles y de amparo. Conferencista en la Escuela Judicial Electoral.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop&auto=format',
    years: '14 años de experiencia',
    colegio: 'ANADE · Ilustre y Nacional Colegio de Abogados',
  },
  {
    name: 'Lic. Camila Orozco Fuentes',
    role: 'Asociada Senior',
    specialty: 'Derecho Laboral · Compliance',
    bio: 'Especialista en derecho laboral con doble titulación en la Universidad Iberoamericana y certificación en Compliance por CUMPLEN. Asesora a más de 40 empresas en materia de reestructuras laborales.',
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=600&fit=crop&auto=format',
    years: '9 años de experiencia',
    colegio: 'Barra Mexicana · AMLA',
  },
  {
    name: 'Lic. Fernando Ávila Quiroz',
    role: 'Asociado Senior',
    specialty: 'Derecho Fiscal · Contencioso',
    bio: 'Abogado fiscalista graduado de la Escuela Libre de Derecho con maestría en Derecho Fiscal por la UDEM. Experiencia en litigio fiscal ante el TFJA, SAT y PRODECON. Certificado como Contador Público.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&auto=format',
    years: '11 años de experiencia',
    colegio: 'IMCP · Barra Mexicana',
  },
]

const VALUES = [
  { title: 'Integridad', desc: 'Actuamos con honestidad absoluta frente a clientes y tribunales. Nuestra reputación es nuestro activo más valioso.' },
  { title: 'Excelencia', desc: 'Nos exigimos el mismo estándar que esperamos de los tribunales: precisión, profundidad y rigor en cada argumento.' },
  { title: 'Confidencialidad', desc: 'El secreto profesional es inviolable. Cada caso se trata con la discreción que merece su importancia.' },
  { title: 'Resultados', desc: 'No prometemos lo que no podemos cumplir, pero cuando tomamos un caso, lo llevamos hasta las últimas consecuencias.' },
]

function AnimBlock({ children, cls = 'anim-fade-up', delay = '' }: { children: React.ReactNode, cls?: string, delay?: string }) {
  const ref = useAnimate() as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Nosotros() {
  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 100, background: '#0e0d0b', paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 0, opacity: 0.15 }}>
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=900&fit=crop&auto=format" alt="" aria-hidden style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ animation: 'fadeIn 0.6s both' }}>Quiénes Somos</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,72px)', maxWidth: 640, animation: 'fadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
            Dos décadas construyendo justicia en México
          </h1>
          <p style={{ fontSize: 17, color: '#7a7470', maxWidth: 560, marginTop: 20, fontWeight: 300, lineHeight: 1.8, animation: 'fadeUp 0.8s 0.3s both' }}>
            VC-Abogados es un despacho de boutique que combina la profundidad analítica de los grandes corporativos con la agilidad y personalización del trato cercano.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div className="grid-2col" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <AnimBlock cls="anim-slide-left">
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', background: '#1a1816', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=875&fit=crop&auto=format" alt="Oficinas VC-Abogados" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'transform 0.6s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ position: 'absolute', bottom: -32, right: -32, background: '#c8a96e', padding: '28px 36px', color: '#0a0a0a' }}>
                <div className="display" style={{ fontSize: 40 }}>2004</div>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, marginTop: 4 }}>año de<br />fundación</div>
              </div>
            </div>
          </AnimBlock>
          <AnimBlock cls="anim-slide-right">
            <span className="section-label">Nuestra Historia</span>
            <h2 className="display" style={{ fontSize: 'clamp(26px,3.5vw,40px)', marginBottom: 28 }}>
              Nació de la convicción, creció por la excelencia
            </h2>
            <p style={{ fontSize: 15, color: '#9a9490', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
              En 2004, Valentina Castillo y Rodrigo Vega fundaron el despacho con una visión clara: crear un espacio jurídico donde la profundidad técnica y el compromiso humano fueran inseparables. Ambos habían trabajado en grandes corporativos y conocían sus fortalezas — pero también sus limitaciones.
            </p>
            <p style={{ fontSize: 15, color: '#6a6560', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
              Hoy, VC-Abogados cuenta con 12 abogados especializados, oficinas en Polanco, CDMX, y presencia en Monterrey y Guadalajara. Atendemos a más de 200 clientes activos de 18 países.
            </p>
            <p style={{ fontSize: 15, color: '#6a6560', lineHeight: 1.85, fontWeight: 300 }}>
              Somos miembros activos de la Barra Mexicana, la Asociación Nacional de Abogados de Empresa (ANADE) y el International Bar Association (IBA).
            </p>
          </AnimBlock>
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: '100px 24px', background: '#0e0d0b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimBlock>
            <span className="section-label">Nuestros Valores</span>
            <h2 className="display" style={{ fontSize: 'clamp(26px,4vw,46px)', marginBottom: 64, maxWidth: 500 }}>
              Los principios que guían cada caso
            </h2>
          </AnimBlock>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 1, background: '#2a2520' }}>
            {VALUES.map((v, i) => (
              <AnimBlock key={i} delay={`delay-${(i + 1) * 100}`}>
                <div style={{ background: '#0e0d0b', padding: '44px 36px', height: '100%', borderTop: '3px solid transparent', transition: 'border-color 0.3s, background 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderTopColor = '#c8a96e'; (e.currentTarget as HTMLElement).style.background = '#111' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderTopColor = 'transparent'; (e.currentTarget as HTMLElement).style.background = '#0e0d0b' }}
                >
                  <h3 className="display" style={{ fontSize: 22, color: '#c8a96e', marginBottom: 16 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: '#7a7470', lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
                </div>
              </AnimBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimBlock>
            <span className="section-label">El Equipo</span>
            <h2 className="display" style={{ fontSize: 'clamp(26px,4vw,46px)', marginBottom: 64 }}>
              Abogados de confianza, resultados de primer nivel
            </h2>
          </AnimBlock>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 2, background: '#2a2520' }}>
            {TEAM.map((m, i) => (
              <AnimBlock key={i} delay={`delay-${(i % 4 + 1) * 100}`} cls="anim-scale-in">
                <div style={{ background: '#0a0a0a', overflow: 'hidden', height: '100%' }}>
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#1a1816' }}>
                    <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', transition: 'transform 0.5s, filter 0.5s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(30%)' }}
                    />
                  </div>
                  <div style={{ padding: '28px 28px 36px' }}>
                    <span className="gold-rule" style={{ marginBottom: 16 }} />
                    <h3 className="display" style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{m.name}</h3>
                    <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a96e', fontWeight: 500, marginBottom: 10 }}>{m.role}</p>
                    <p style={{ fontSize: 13, color: '#7a7470', marginBottom: 14, lineHeight: 1.5 }}>{m.specialty}</p>
                    <p style={{ fontSize: 13, color: '#5a5248', lineHeight: 1.65, fontWeight: 300 }}>{m.bio}</p>
                    <p style={{ fontSize: 11, color: '#3a3530', marginTop: 14 }}>{m.colegio}</p>
                  </div>
                </div>
              </AnimBlock>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#0e0d0b', borderTop: '1px solid #2a2520' }}>
        <AnimBlock cls="anim-fade-up">
          <h2 className="display" style={{ fontSize: 'clamp(24px,3.5vw,40px)', marginBottom: 20 }}>
            ¿Listo para trabajar con nosotros?
          </h2>
          <p style={{ fontSize: 15, color: '#6a6560', maxWidth: 440, margin: '0 auto 36px', fontWeight: 300, lineHeight: 1.75 }}>
            La primera consulta es sin costo y sin compromiso. Cuéntenos su caso.
          </p>
          <Link to="/contacto" className="btn-gold">Agendar consulta</Link>
        </AnimBlock>
      </section>
    </div>
  )
}
