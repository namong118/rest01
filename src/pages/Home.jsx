import { Link } from 'react-router-dom'
import s from './Home.module.css'

const SERVICES = [
  {
    icon: '◈',
    title: 'AR App Development',
    desc: 'Native iOS & Android AR apps powered by ARKit, ARCore, and AR Foundation. From concept to App Store.',
  },
  {
    icon: '◇',
    title: 'AI Integration',
    desc: 'Embed computer vision and generative AI into your product. Object recognition, real-time overlay, LLM-powered features.',
  },
  {
    icon: '○',
    title: 'WebAR & 3D',
    desc: 'Browser-based AR experiences with Three.js and WebXR. No app install required — just open and experience.',
  },
  {
    icon: '△',
    title: 'Consulting',
    desc: 'AR/XR strategy, technical roadmap, and prototyping. We help teams evaluate and adopt spatial computing.',
  },
]

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '12', label: 'Team Members' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '4yr', label: 'In Business' },
]

const CLIENTS = ['Samsung', 'LG U+', 'NAVER', 'Kakao', 'Hyundai', 'POSCO']

export default function Home() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={`container ${s.heroInner}`}>
          <div className={s.heroContent}>
            <div className={s.badge}>
              <span className={s.badgeDot} />
              Now hiring · Seoul &amp; Remote
            </div>
            <h1 className={s.heroTitle}>
              We build AR experiences<br />
              <span className={s.heroAccent}>people can't forget.</span>
            </h1>
            <p className={s.heroDesc}>
              ArcNova is an AR &amp; AI development studio. We turn bold ideas into
              immersive apps that bridge the physical and digital worlds.
            </p>
            <div className={s.heroCta}>
              <Link to="/works" className="btn-primary">View our work</Link>
              <Link to="/about" className="btn-outline">Learn about us</Link>
            </div>
          </div>

          <div className={s.heroVisual}>
            <div className={s.orb} />
            <div className={s.floatCard} style={{ '--delay': '0s' }}>
              <span className={s.cardIcon}>◈</span>
              <div>
                <div className={s.cardTitle}>AR Recognition</div>
                <div className={s.cardSub}>99.2% accuracy</div>
              </div>
            </div>
            <div className={s.floatCard} style={{ '--delay': '0.8s' }}>
              <span className={s.cardIconAmber}>△</span>
              <div>
                <div className={s.cardTitle}>Real-time 3D</div>
                <div className={s.cardSub}>60fps rendering</div>
              </div>
            </div>
            <div className={s.floatCard} style={{ '--delay': '1.6s' }}>
              <span className={s.cardIcon}>○</span>
              <div>
                <div className={s.cardTitle}>AI-Powered</div>
                <div className={s.cardSub}>Claude API</div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.scrollIndicator}>
          <div className={s.scrollLine} />
          <span>scroll</span>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className={s.stats}>
        <div className="container">
          <div className={s.statsGrid}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={s.statItem}>
                <span className={s.statValue}>{value}</span>
                <span className={s.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className={s.services}>
        <div className="container">
          <div className={s.sectionHead}>
            <span className="section-label">What we do</span>
            <h2 className="section-title">End-to-end AR &amp; AI<br />development</h2>
          </div>
          <div className={s.serviceGrid}>
            {SERVICES.map(({ icon, title, desc }) => (
              <div key={title} className={s.serviceCard}>
                <span className={s.serviceIcon}>{icon}</span>
                <h3 className={s.serviceTitle}>{title}</h3>
                <p className={s.serviceDesc}>{desc}</p>
                <Link to="/services" className={s.serviceLink}>
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ───────────────────────────────────── */}
      <section className={s.clients}>
        <div className="container">
          <p className={s.clientsLabel}>Trusted by teams at</p>
          <div className={s.clientsList}>
            {CLIENTS.map(c => (
              <span key={c} className={s.clientName}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className={s.cta}>
        <div className="container">
          <div className={s.ctaBox}>
            <h2 className={s.ctaTitle}>Ready to build something extraordinary?</h2>
            <p className={s.ctaDesc}>Let's talk about your project. Free consultation, no strings attached.</p>
            <Link to="/contact" className="btn-primary">Start a project</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
