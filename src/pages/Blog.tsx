import { useState } from 'react'
import { useAnimate } from '../hooks/useAnimate'

const POSTS = [
  {
    cat: 'Derecho Corporativo',
    title: 'Reforma a la Ley General de Sociedades Mercantiles 2024: Lo que toda empresa debe saber',
    excerpt: 'Las modificaciones aprobadas en septiembre de 2024 introducen nuevos requisitos de gobierno corporativo para sociedades anónimas con más de 50 socios. Analizamos el impacto práctico.',
    author: 'Lic. Valentina Castillo Ríos',
    date: '15 Sep 2024',
    read: '8 min',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=380&fit=crop&auto=format',
    featured: true,
  },
  {
    cat: 'Derecho Fiscal',
    title: 'SAT 2024: Nuevas facultades de comprobación y cómo prepararse',
    excerpt: 'El SAT ha ampliado sus herramientas de fiscalización digital. Te explicamos qué documentación debes tener en orden y cómo responder a un requerimiento de información.',
    author: 'Lic. Fernando Ávila Quiroz',
    date: '2 Sep 2024',
    read: '6 min',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    cat: 'Derecho Laboral',
    title: 'Teletrabajo en México: obligaciones patronales que muchas empresas ignoran',
    excerpt: 'A tres años de la reforma sobre teletrabajo, muchas empresas siguen incumpliendo sus obligaciones. Repasamos los puntos críticos y las sanciones que arriesgan.',
    author: 'Lic. Camila Orozco Fuentes',
    date: '20 Ago 2024',
    read: '5 min',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    cat: 'Amparo',
    title: 'El amparo adhesivo: estrategia defensiva subutilizada en el litigio mexicano',
    excerpt: 'El amparo adhesivo, introducido en la reforma de 2013, sigue siendo una herramienta poco comprendida. Explicamos cuándo interponerlo y qué ventajas ofrece a la parte tercero interesada.',
    author: 'Lic. Rodrigo Vega Montoya',
    date: '8 Ago 2024',
    read: '10 min',
    img: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    cat: 'Derecho Inmobiliario',
    title: 'Fideicomisos inmobiliarios para extranjeros: guía actualizada 2024',
    excerpt: 'Adquirir propiedad en zona restringida requiere un fideicomiso bancario. Esta guía explica el proceso, los costos reales y los errores más comunes que cometen los compradores extranjeros.',
    author: 'Lic. Valentina Castillo Ríos',
    date: '25 Jul 2024',
    read: '7 min',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
  {
    cat: 'Derecho Corporativo',
    title: 'Acuerdos de accionistas: las cláusulas que su abogado debe incluir sí o sí',
    excerpt: 'Un acuerdo de accionistas mal redactado puede destruir una empresa. Estas son las 8 cláusulas esenciales que todo pacto entre socios debe contener para proteger a todas las partes.',
    author: 'Lic. Valentina Castillo Ríos',
    date: '10 Jul 2024',
    read: '9 min',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=380&fit=crop&auto=format',
    featured: false,
  },
]

function AnimBlock({ children, cls = 'anim-fade-up', delay = '' }: { children: React.ReactNode, cls?: string, delay?: string }) {
  const ref = useAnimate() as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Blog() {
  const [activePost, setActivePost] = useState<typeof POSTS[0] | null>(null)
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  if (activePost) {
    return (
      <div style={{ paddingTop: 100 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 100px' }}>
          <button onClick={() => setActivePost(null)} style={{ background: 'none', border: 'none', color: '#c8a96e', cursor: 'pointer', fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 36, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 8 }}>
            ← Volver al blog
          </button>
          <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#c8a96e', display: 'block', marginBottom: 16 }}>{activePost.cat}</span>
          <h1 className="display" style={{ fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.2, marginBottom: 20 }}>{activePost.title}</h1>
          <div style={{ display: 'flex', gap: 20, marginBottom: 36, color: '#6a6560', fontSize: 13 }}>
            <span>{activePost.author}</span>
            <span>·</span>
            <span>{activePost.date}</span>
            <span>·</span>
            <span>{activePost.read} de lectura</span>
          </div>
          <div style={{ height: 300, overflow: 'hidden', marginBottom: 48, background: '#1a1816' }}>
            <img src={activePost.img} alt={activePost.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
          </div>
          <div style={{ fontSize: 16, color: '#9a9490', lineHeight: 1.85, fontWeight: 300 }}>
            <p style={{ marginBottom: 24 }}>{activePost.excerpt}</p>
            <p style={{ marginBottom: 24 }}>
              El panorama jurídico en México evoluciona de manera constante. Las empresas y personas que no se mantienen actualizadas corren el riesgo de incumplir con nuevas obligaciones o perder derechos adquiridos. En VC-Abogados, monitoreamos continuamente los cambios legislativos y jurisprudenciales para ofrecer asesoría oportuna y preventiva.
            </p>
            <p style={{ marginBottom: 24 }}>
              Desde nuestra experiencia en litigio y consultoría, hemos identificado que los problemas más costosos para nuestros clientes son los que pudieron prevenirse con información adecuada y asesoría temprana. Este artículo es parte de nuestro compromiso con la difusión del conocimiento jurídico accesible y práctico.
            </p>
            <blockquote style={{ borderLeft: '2px solid #c8a96e', paddingLeft: 24, margin: '32px 0', fontFamily: "'Playfair Display', serif", fontSize: 18, fontStyle: 'italic', color: '#d4cfc8' }}>
              "El derecho no es solo para los abogados. Una sociedad informada es una sociedad más justa."
            </blockquote>
            <p>
              Si tiene dudas sobre cómo esta reforma o normativa afecta su situación particular, le invitamos a agendar una consulta sin costo con alguno de nuestros especialistas. En VC-Abogados cada caso es único y merece análisis personalizado.
            </p>
          </div>
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid #2a2520', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => setActivePost(null)} style={{ background: 'none', border: '1px solid #2a2520', color: '#6a6560', cursor: 'pointer', padding: '12px 24px', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'inherit', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c8a96e'; (e.currentTarget as HTMLElement).style.color = '#c8a96e' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2520'; (e.currentTarget as HTMLElement).style.color = '#6a6560' }}
            >← Más artículos</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: '#0e0d0b', borderBottom: '1px solid #2a2520', paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label" style={{ animation: 'fadeIn 0.6s both' }}>Blog Jurídico</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,72px)', maxWidth: 640, animation: 'fadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
            Análisis legal para decisiones inteligentes
          </h1>
          <p style={{ fontSize: 17, color: '#7a7470', maxWidth: 520, marginTop: 20, fontWeight: 300, lineHeight: 1.8, animation: 'fadeUp 0.8s 0.3s both' }}>
            Artículos de análisis jurídico escritos por nuestros especialistas. Sin jerga innecesaria, con aplicación práctica.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '80px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimBlock>
            <div
              className="grid-2col"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: '#1a1816', cursor: 'pointer', transition: 'opacity 0.2s' }}
              onClick={() => setActivePost(featured)}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              <div style={{ overflow: 'hidden', minHeight: 360 }}>
                <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', transition: 'transform 0.6s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <span style={{ background: '#c8a96e', color: '#0a0a0a', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', padding: '4px 10px', fontWeight: 600 }}>Destacado</span>
                  <span style={{ fontSize: 11, color: '#6a6560', letterSpacing: 1 }}>{featured.cat}</span>
                </div>
                <h2 className="display" style={{ fontSize: 'clamp(22px,2.5vw,32px)', marginBottom: 16, lineHeight: 1.3 }}>{featured.title}</h2>
                <p style={{ fontSize: 14, color: '#7a7470', lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#5a5248' }}>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.read}</span>
                </div>
                <div style={{ marginTop: 28 }}>
                  <span style={{ fontSize: 12, color: '#c8a96e', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500 }}>Leer artículo →</span>
                </div>
              </div>
            </div>
          </AnimBlock>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 24px 100px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 2, background: '#2a2520' }}>
            {rest.map((p, i) => (
              <AnimBlock key={i} delay={`delay-${(i % 3 + 1) * 100}`}>
                <div
                  style={{ background: '#0a0a0a', overflow: 'hidden', cursor: 'pointer', height: '100%', transition: 'background 0.25s' }}
                  onClick={() => setActivePost(p)}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0e0d0b')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
                >
                  <div style={{ height: 200, overflow: 'hidden', background: '#1a1816' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', transition: 'transform 0.5s, filter 0.5s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(30%)' }}
                    />
                  </div>
                  <div style={{ padding: '28px 28px 32px' }}>
                    <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a96e', fontWeight: 500 }}>{p.cat}</span>
                    <h3 className="display" style={{ fontSize: 18, fontWeight: 600, marginTop: 10, marginBottom: 10, lineHeight: 1.35 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: '#6a6560', lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: '#4a4540' }}>{p.date} · {p.read}</span>
                      <span style={{ fontSize: 11, color: '#c8a96e', letterSpacing: 1 }}>Leer →</span>
                    </div>
                  </div>
                </div>
              </AnimBlock>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
