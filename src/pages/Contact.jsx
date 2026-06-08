import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import s from './Contact.module.css'

const TYPES = [
  { value: 'ar-app',     label: 'AR App Development' },
  { value: 'ai',         label: 'AI Integration' },
  { value: 'web-ar',     label: 'WebAR / 3D' },
  { value: 'enterprise', label: 'Enterprise Solution' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'other',      label: 'Other' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>

      <section className={s.header}>
        <div className="container">
          <span className="section-label">Get in touch</span>
          <h1 className={s.title}>
            Let's build something<br />
            <span className={s.titleAccent}>great together.</span>
          </h1>
          <p className={s.subtitle}>
            Tell us about your project. We'll get back within one business day.
          </p>
        </div>
      </section>

      <section className={s.body}>
        <div className="container">
          <div className={s.grid}>

            {/* Info panel */}
            <div className={s.info}>
              <div className={s.infoBlock}>
                <span className={s.infoTitle}>Email</span>
                <a href="mailto:hello@arcnova.io" className={s.infoValue}>hello@arcnova.io</a>
              </div>
              <div className={s.infoBlock}>
                <span className={s.infoTitle}>Location</span>
                <span className={s.infoValue}>Seoul, Korea</span>
              </div>
              <div className={s.infoBlock}>
                <span className={s.infoTitle}>Hours</span>
                <span className={s.infoValue}>Mon–Fri · 09:00–18:00 KST</span>
              </div>
              <div className={s.infoBlock}>
                <span className={s.infoTitle}>Response time</span>
                <span className={s.infoValue}>Within 1 business day</span>
              </div>

              <div className={s.note}>
                <span className={s.noteDot} />
                <p>Free initial consultation. No commitment required.</p>
              </div>
            </div>

            {/* Form */}
            <div className={s.formWrap}>
              {sent ? (
                <div className={s.success}>
                  <FontAwesomeIcon icon={faCircleCheck} className={s.successIcon} />
                  <h3>Message received!</h3>
                  <p>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form className={s.form} onSubmit={submit}>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label className={s.label}>Full name *</label>
                      <input className={s.input} name="name" value={form.name} onChange={set} placeholder="Jane Smith" required />
                    </div>
                    <div className={s.field}>
                      <label className={s.label}>Work email *</label>
                      <input className={s.input} name="email" type="email" value={form.email} onChange={set} placeholder="jane@company.com" required />
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.field}>
                      <label className={s.label}>Company</label>
                      <input className={s.input} name="company" value={form.company} onChange={set} placeholder="Your company" />
                    </div>
                    <div className={s.field}>
                      <label className={s.label}>Project type *</label>
                      <select className={s.input} name="type" value={form.type} onChange={set} required>
                        <option value="">Select a type</option>
                        {TYPES.map(({ value, label }) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={s.field}>
                    <label className={s.label}>Tell us about your project *</label>
                    <textarea className={`${s.input} ${s.textarea}`} name="message" value={form.message} onChange={set} rows={5} placeholder="What are you trying to build? What's the timeline and budget?" required />
                  </div>
                  <button type="submit" className="btn-primary">
                    Send message →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
