import { NavLink } from 'react-router-dom'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div className={s.brand}>
          <div className={s.logo}>
            <span className={s.logoMark}>A</span>
            <span className={s.logoText}>ArcNova</span>
          </div>
          <p className={s.tagline}>Building immersive AR experiences<br />that connect people with technology.</p>
        </div>

        <div className={s.links}>
          <span className={s.groupTitle}>Company</span>
          {[['/', 'Home'], ['/about', 'About'], ['/works', 'Works']].map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={s.link}>{label}</NavLink>
          ))}
        </div>

        <div className={s.links}>
          <span className={s.groupTitle}>Services</span>
          {[['/services', 'AR Development'], ['/services', 'AI Integration'], ['/contact', 'Consulting']].map(([to, label], i) => (
            <NavLink key={i} to={to} className={s.link}>{label}</NavLink>
          ))}
        </div>

        <div className={s.links}>
          <span className={s.groupTitle}>Contact</span>
          <a href="mailto:hello@arcnova.io" className={s.link}>hello@arcnova.io</a>
          <span className={s.link}>Seoul, Korea</span>
        </div>
      </div>

      <div className={s.bottom}>
        <div className="container">
          <span>© 2026 ArcNova Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
