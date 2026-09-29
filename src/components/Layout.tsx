import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="page-enter" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
