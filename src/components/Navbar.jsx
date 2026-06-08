import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/works',    label: 'Works' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>

        <NavLink to="/" className={s.logo} onClick={() => setOpen(false)}>
          <span className={s.logoMark}>A</span>
          <span className={s.logoText}>ArcNova</span>
        </NavLink>

        <nav className={`${s.nav} ${open ? s.open : ''}`}>
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" className={`btn-primary ${s.ctaLink}`} onClick={() => setOpen(false)}>
            Get in touch
          </NavLink>
        </nav>

        <button
          className={`${s.burger} ${open ? s.burgerOpen : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

      </div>
    </header>
  )
}
