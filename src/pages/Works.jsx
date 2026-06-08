import s from './Works.module.css'

const WORKS = [
  {
    id: '01',
    title: 'LG U+ AR Retail',
    category: 'Enterprise AR',
    year: '2025',
    desc: 'AR product visualization for 500+ LG stores. Customers see 3D appliances in their own space before buying. Reduced returns by 34%.',
    tags: ['ARKit', 'Unity', 'iOS', 'Enterprise'],
    stat: { value: '34%', label: 'Return reduction' },
  },
  {
    id: '02',
    title: 'Naver Map AR',
    category: 'Consumer App',
    year: '2024',
    desc: 'Live AR navigation overlay for NAVER Maps. Points of interest, walking directions, and real-time business info rendered in camera view.',
    tags: ['ARCore', 'WebAR', 'AI', 'Maps API'],
    stat: { value: '1.2M', label: 'Monthly users' },
  },
  {
    id: '03',
    title: 'Hyundai Factory AR',
    category: 'Industrial AR',
    year: '2024',
    desc: 'AR maintenance guide for Hyundai assembly lines. Technicians see step-by-step overlays on actual machinery, reducing training time by 60%.',
    tags: ['HoloLens 2', 'Azure Remote Rendering', 'Industrial'],
    stat: { value: '60%', label: 'Training time cut' },
  },
  {
    id: '04',
    title: 'K-Museum AR Guide',
    category: 'Cultural / Education',
    year: '2024',
    desc: 'National Museum of Korea AR audio guide. Scan any artifact for 3D reconstruction, historical context, and AI-generated expert narration.',
    tags: ['iOS', 'Claude AI', 'Core ML', 'Culture'],
    stat: { value: '50K', label: 'App installs' },
  },
  {
    id: '05',
    title: 'POSCO Safety AR',
    category: 'Industrial AR',
    year: '2023',
    desc: 'Hazard detection and safety procedure overlay for POSCO steel plants. Real-time AI detection flags unsafe conditions before incidents occur.',
    tags: ['Computer Vision', 'Edge AI', 'Android', 'Safety'],
    stat: { value: '0', label: 'Incidents post-launch' },
  },
]

export default function Works() {
  return (
    <div>

      <section className={s.header}>
        <div className="container">
          <span className="section-label">Selected work</span>
          <h1 className={s.title}>
            Projects we're<br />
            <span className={s.titleAccent}>proud to have built.</span>
          </h1>
          <p className={s.subtitle}>
            A selection of client and internal projects from 2022–2026.
          </p>
        </div>
      </section>

      <section className={s.list}>
        <div className="container">
          {WORKS.map(({ id, title, category, year, desc, tags, stat }) => (
            <div key={id} className={s.workItem}>
              <div className={s.workLeft}>
                <span className={s.workId}>{id}</span>
              </div>
              <div className={s.workBody}>
                <div className={s.workMeta}>
                  <span className={s.workCategory}>{category}</span>
                  <span className={s.workYear}>{year}</span>
                </div>
                <h2 className={s.workTitle}>{title}</h2>
                <p className={s.workDesc}>{desc}</p>
                <div className={s.tagRow}>
                  {tags.map(t => (
                    <span key={t} className={s.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={s.workStat}>
                <span className={s.statValue}>{stat.value}</span>
                <span className={s.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
