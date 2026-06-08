import s from './About.module.css'

const TEAM = [
  { name: 'James Oh',    role: 'CEO & Co-founder',     bio: 'Former AR lead at Kakao. 10yr in spatial computing.' },
  { name: 'Sarah Yoon',  role: 'CTO & Co-founder',     bio: 'PhD Computer Vision, KAIST. Ex-Samsung Research.' },
  { name: 'Kevin Park',  role: 'Lead AR Engineer',      bio: 'Unity ARF & ARKit specialist. Shipped 20+ AR apps.' },
  { name: 'Mina Choi',   role: 'AI Research Lead',      bio: 'LLM & CV integration. Previously at NAVER AI Lab.' },
  { name: 'Tom Lee',     role: 'Fullstack Developer',   bio: 'React, Node, Firebase. Loves clean architecture.' },
  { name: 'Jiu Shin',    role: 'UX / Product Designer', bio: 'Human-centered design for spatial interfaces.' },
]

const HISTORY = [
  { year: '2022', event: 'Founded in Seoul with 3 engineers.' },
  { year: '2023', event: 'First enterprise client — LG U+ AR retail pilot.' },
  { year: '2024', event: 'Team grew to 12. Launched 4 consumer AR apps.' },
  { year: '2025', event: 'Integrated Claude AI across all products.' },
  { year: '2026', event: '50+ projects. Series A in progress.' },
]

export default function About() {
  return (
    <div>

      {/* Header */}
      <section className={s.header}>
        <div className="container">
          <span className="section-label">About ArcNova</span>
          <h1 className={s.title}>
            A small studio doing<br />
            <span className={s.titleAccent}>extraordinary things in AR.</span>
          </h1>
          <p className={s.subtitle}>
            We're a Seoul-based AR & AI development studio founded in 2022.
            Our mission: make augmented reality accessible, useful, and genuinely delightful.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={s.values}>
        <div className="container">
          <div className={s.valuesGrid}>
            {[
              { icon: '◈', title: 'Craft first',      desc: 'We sweat every interaction. Good enough is not in our vocabulary.' },
              { icon: '◇', title: 'Honest work',      desc: "No hype. We tell clients what's possible, not what they want to hear." },
              { icon: '○', title: 'Move fast',        desc: 'Prototype in days, ship in weeks. Iteration beats perfection.' },
              { icon: '△', title: 'Stay curious',     desc: 'AR is young. We experiment constantly and share what we learn.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={s.valueCard}>
                <span className={s.valueIcon}>{icon}</span>
                <h3 className={s.valueTitle}>{title}</h3>
                <p className={s.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={s.team}>
        <div className="container">
          <span className="section-label">The team</span>
          <h2 className="section-title">Built by people who<br />love what they make.</h2>
          <div className={s.teamGrid}>
            {TEAM.map(({ name, role, bio }) => (
              <div key={name} className={s.memberCard}>
                <div className={s.avatar}>
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={s.memberInfo}>
                  <div className={s.memberName}>{name}</div>
                  <div className={s.memberRole}>{role}</div>
                  <p className={s.memberBio}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className={s.history}>
        <div className="container">
          <div className={s.historyInner}>
            <div>
              <span className="section-label">Timeline</span>
              <h2 className="section-title">How we got here.</h2>
            </div>
            <div className={s.timeline}>
              {HISTORY.map(({ year, event }) => (
                <div key={year} className={s.timelineItem}>
                  <span className={s.timelineYear}>{year}</span>
                  <div className={s.timelineDot} />
                  <p className={s.timelineEvent}>{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
