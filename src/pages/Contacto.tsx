import { useState } from 'react'
import { useAnimate } from '../hooks/useAnimate'

const OFFICES = [
  { city: 'Ciudad de México', address: 'Av. Presidente Masaryk 111, Piso 8\nPolanco V Sección, CDMX 11560', phone: '+52 (55) 5280 3400', email: 'cdmx@vcabogados.mx', primary: true },
  { city: 'Monterrey', address: 'Blvd. Antonio L. Rodríguez 1883\nSanta María, Monterrey N.L. 64650', phone: '+52 (81) 8340 2200', email: 'mty@vcabogados.mx', primary: false },
  { city: 'Guadalajara', address: 'Av. Américas 1254, Piso 4\nCol. Providencia, Guadalajara 44630', phone: '+52 (33) 3615 4800', email: 'gdl@vcabogados.mx', primary: false },
]

const AREAS = ['Derecho Corporativo', 'Litigio Civil y Mercantil', 'Derecho Inmobiliario', 'Derecho Laboral', 'Derecho Fiscal', 'Amparo y Constitucional', 'Otro / No sé aún']

function AnimBlock({ children, cls = 'anim-fade-up', delay = '' }: { children: React.ReactNode, cls?: string, delay?: string }) {
  const ref = useAnimate() as React.RefObject<HTMLDivElement>
  return <div ref={ref} className={`${cls} ${delay}`}>{children}</div>
}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', area: '', mensaje: '', urgente: false })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.email.includes('@')) e.email = 'Email inválido'
    if (!form.mensaje.trim()) e.mensaje = 'Requerido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setSent(true)
    setForm({ nombre: '', email: '', telefono: '', area: '', mensaje: '', urgente: false })
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%', padding: '14px 16px',
    background: '#111', border: `1px solid ${errors[field] ? '#c04040' : '#2a2520'}`,
    color: '#f0ece3', fontSize: 15, outline: 'none',
    fontFamily: 'inherit', transition: 'border-color 0.2s',
  })

  return (
    <div>
      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80, background: '#0e0d0b', borderBottom: '1px solid #2a2520', paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label" style={{ animation: 'fadeIn 0.6s both' }}>Contacto</span>
          <h1 className="display" style={{ fontSize: 'clamp(36px,6vw,72px)', maxWidth: 600, animation: 'fadeUp 0.8s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}>
            Hablemos de su caso
          </h1>
          <p style={{ fontSize: 17, color: '#7a7470', maxWidth: 500, marginTop: 20, fontWeight: 300, lineHeight: 1.8, animation: 'fadeUp 0.8s 0.3s both' }}>
            La primera consulta es gratuita y confidencial. Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section style={{ padding: '80px 24px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimBlock>
            <span className="section-label">Nuestras Oficinas</span>
          </AnimBlock>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 2, background: '#2a2520', marginTop: 24 }}>
            {OFFICES.map((o, i) => (
              <AnimBlock key={i} delay={`delay-${(i + 1) * 100}`}>
                <div style={{ background: '#0a0a0a', padding: '36px 32px', borderTop: o.primary ? '3px solid #c8a96e' : '3px solid transparent', transition: 'background 0.25s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#0e0d0b')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#0a0a0a')}
                >
                  {o.primary && <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a96e', fontWeight: 600, display: 'block', marginBottom: 12 }}>Oficina Principal</span>}
                  <h3 className="display" style={{ fontSize: 22, fontWeight: 600, marginBottom: 20, color: o.primary ? '#f0ece3' : '#b5afa4' }}>{o.city}</h3>
                  <p style={{ fontSize: 14, color: '#6a6560', whiteSpace: 'pre-line', lineHeight: 1.7, marginBottom: 16 }}>{o.address}</p>
                  <p style={{ fontSize: 14, color: '#7a7470', marginBottom: 6 }}>{o.phone}</p>
                  <p style={{ fontSize: 14, color: '#c8a96e' }}>{o.email}</p>
                </div>
              </AnimBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '80px 24px 100px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80 }}>
            {/* Left */}
            <AnimBlock cls="anim-slide-left">
              <span className="section-label">Escribanos</span>
              <h2 className="display" style={{ fontSize: 'clamp(26px,3vw,40px)', marginBottom: 28, lineHeight: 1.2 }}>
                Cuéntenos su situación
              </h2>
              <p style={{ fontSize: 15, color: '#7a7470', lineHeight: 1.85, marginBottom: 40, fontWeight: 300 }}>
                Toda comunicación es estrictamente confidencial. Nuestro equipo analiza cada consulta con seriedad y le ofrece una evaluación honesta de su situación.
              </p>
              {[
                { label: 'Horario CDMX', value: 'Lunes a Viernes\n9:00 — 19:00 hrs' },
                { label: 'Urgencias', value: 'Disponibles 24/7\n+52 (55) 5280 3400' },
                { label: 'Correo general', value: 'contacto@vcabogados.mx' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 20, marginBottom: 28 }}>
                  <div style={{ width: 2, background: '#c8a96e', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#c8a96e', fontWeight: 500, marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontSize: 14, color: '#9a9490', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </AnimBlock>

            {/* Form */}
            <AnimBlock cls="anim-slide-right">
              {sent ? (
                <div style={{ background: '#111', border: '1px solid #2a2520', padding: '64px 48px', textAlign: 'center', animation: 'scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
                  <div style={{ width: 56, height: 56, border: '2px solid #c8a96e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 24, animation: 'pulse-gold 2s infinite' }}>✓</div>
                  <h3 className="display" style={{ fontSize: 26, color: '#c8a96e', marginBottom: 12 }}>Consulta recibida</h3>
                  <p style={{ fontSize: 15, color: '#7a7470', fontWeight: 300, lineHeight: 1.75 }}>
                    Gracias por contactarnos. Un abogado especialista revisará su caso y le responderá en menos de 24 horas hábiles.
                  </p>
                  <button onClick={() => setSent(false)} style={{ marginTop: 32, background: 'none', border: '1px solid #2a2520', color: '#6a6560', cursor: 'pointer', padding: '10px 24px', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'inherit', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c8a96e'; (e.currentTarget as HTMLElement).style.color = '#c8a96e' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a2520'; (e.currentTarget as HTMLElement).style.color = '#6a6560' }}
                  >Nueva consulta</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginBottom: 8, fontWeight: 500 }}>Nombre completo *</label>
                      <input type="text" value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))} style={inputStyle('nombre')}
                        onFocus={e => (e.target.style.borderColor = '#c8a96e')}
                        onBlur={e => (e.target.style.borderColor = errors.nombre ? '#c04040' : '#2a2520')}
                        placeholder="Lic. Ana García"
                      />
                      {errors.nombre && <p style={{ fontSize: 11, color: '#c04040', marginTop: 4 }}>{errors.nombre}</p>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginBottom: 8, fontWeight: 500 }}>Correo electrónico *</label>
                      <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle('email')}
                        onFocus={e => (e.target.style.borderColor = '#c8a96e')}
                        onBlur={e => (e.target.style.borderColor = errors.email ? '#c04040' : '#2a2520')}
                        placeholder="ana@empresa.com"
                      />
                      {errors.email && <p style={{ fontSize: 11, color: '#c04040', marginTop: 4 }}>{errors.email}</p>}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginBottom: 8, fontWeight: 500 }}>Teléfono</label>
                      <input type="tel" value={form.telefono} onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))} style={inputStyle('telefono')}
                        onFocus={e => (e.target.style.borderColor = '#c8a96e')}
                        onBlur={e => (e.target.style.borderColor = '#2a2520')}
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginBottom: 8, fontWeight: 500 }}>Área de interés</label>
                      <select value={form.area} onChange={e => setForm(p => ({ ...p, area: e.target.value }))} style={{ ...inputStyle('area'), appearance: 'none' as const }}>
                        <option value="">Seleccionar...</option>
                        {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: '#6a6560', marginBottom: 8, fontWeight: 500 }}>Describa su situación *</label>
                    <textarea rows={5} value={form.mensaje} onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))} style={{ ...inputStyle('mensaje'), resize: 'vertical' as const }}
                      onFocus={e => (e.target.style.borderColor = '#c8a96e')}
                      onBlur={e => (e.target.style.borderColor = errors.mensaje ? '#c04040' : '#2a2520')}
                      placeholder="Describa brevemente su situación legal o la consulta que desea realizar..."
                    />
                    {errors.mensaje && <p style={{ fontSize: 11, color: '#c04040', marginTop: 4 }}>{errors.mensaje}</p>}
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', marginBottom: 28 }}>
                    <input type="checkbox" checked={form.urgente} onChange={e => setForm(p => ({ ...p, urgente: e.target.checked }))}
                      style={{ width: 16, height: 16, accentColor: '#c8a96e' }}
                    />
                    <span style={{ fontSize: 13, color: '#7a7470' }}>Es un asunto urgente (respuesta prioritaria en &lt;4 horas)</span>
                  </label>
                  <button type="submit" className="btn-gold" style={{ padding: '16px 40px' }}>
                    Enviar consulta
                  </button>
                </form>
              )}
            </AnimBlock>
          </div>
        </div>
      </section>
    </div>
  )
}
