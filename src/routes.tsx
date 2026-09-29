import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Nosotros from './pages/Nosotros'
import Casos from './pages/Casos'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', paddingTop: 72 }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 100, fontWeight: 700, color: '#2a2520', lineHeight: 1 }}>404</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, marginTop: 16, marginBottom: 12 }}>Página no encontrada</h2>
      <p style={{ fontSize: 15, color: '#6a6560', marginBottom: 36 }}>La página que busca no existe o fue movida.</p>
      <a href="/" className="btn-gold">Volver al inicio</a>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'servicios', Component: Servicios },
      { path: 'nosotros', Component: Nosotros },
      { path: 'casos', Component: Casos },
      { path: 'blog', Component: Blog },
      { path: 'contacto', Component: Contacto },
      { path: '*', Component: NotFound },
    ],
  },
])
