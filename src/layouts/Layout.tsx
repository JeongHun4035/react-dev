import { Outlet } from 'react-router-dom'

import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

const Layout = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default Layout