import { Link } from 'react-router-dom'
import s from './Services.module.css'

const SERVICES = [
  {
    tag: '01',
    title: 'AR App Development',
    desc: 'Full-cycle iOS and Android AR app development. We handle everything from ARKit/ARCore integration and 3D asset pipelines to App Store submission.',
    items: ['ARKit / ARCore / AR Foundation', 'Unity & Unreal Engine', '3D model integration', 'App Store & Play Store deployment'],
    accent: 'primary',
  },
  {
    tag: '02',
    title: 'AI & Computer Vision',
    desc: 'Embed intelligent recognition and generative AI into your product. Real-time object detection, image classification, and LLM-powered AR overlays.',
    items: ['Object & image recognition', 'Claude AI API integration', 'On-device ML (CoreML, TFLite)', 'Custom model fine-tuning'],
    accent: 'amber',
  },
  {
    tag: '03',
    title: 'WebAR & Three.js',
    desc: 'Browser-based AR with no app install required. We build WebXR experiences that work on any modern smartphone.',
    items: ['WebXR / 8thWall', 'Three.js & React Three Fiber', 'USDZ / model-viewer', 'Cross-platform optimization'],
    accent: 'primary',
  },
  {
    tag: '04',
    title: 'Enterprise Solutions',
    desc: 'AR for retail, manufacturing, training, and tourism. We design, build, and deploy AR systems at scale with full SDK and white-label options.',
    items: ['Custom SDK development', 'CMS for AR content', 'White-label solutions', 'SLA & ongoing support'],
    accent: 'amber',
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery',  desc: 'We start with your goal — not the tech. A focused workshop to define scope, constraints, and success metrics.' },
  { step: '02', title: 'Prototype',  desc: 'A working prototype in 2 weeks. You see and touch the experience before any large investment.' },
  { step: '03', title: 'Build',      desc: "Agile sprints, weekly demos. You're always in the loop. No surprises at launch." },
  { step: '04', title: 'Ship & Scale', desc: 'Deploy to production, monitor, iterate. We stay on as your AR partner, not just a vendor.' },
]

export default function Services() {
  return (
    <div>

      {/* Header */}
      <section className={s.header}>
        <div className="container">
          <span className="section-label">Services</span>
          <h1 className={s.title}>
            Everything you need<br />
            <span className={s.titleAccent}>to ship great AR.</span>
          </h1>
          <p className={s.subtitle}>
            From a single feature to a full product, we cover the entire AR development lifecycle.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className={s.list}>
        <div className="container">
          {SERVICES.map(({ tag, title, desc, items, accent }) => (
            <div key={tag} className={`${s.serviceRow} ${s[accent]}`}>
              <div className={s.serviceLeft}>
                <span className={s.serviceTag}>{tag}</span>
                <h2 className={s.serviceTitle}>{title}</h2>
                <p className={s.serviceDesc}>{desc}</p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: 24 }}>
                  Discuss this service
                </Link>
              </div>
              <div className={s.serviceRight}>
                <ul className={s.featureList}>
                  {items.map(item => (
                    <li key={item} className={s.featureItem}>
                      <span className={s.featureDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={s.process}>
        <div className="container">
          <div className={s.processHead}>
            <span className="section-label">How we work</span>
            <h2 className="section-title">Our process, simplified.</h2>
          </div>
          <div className={s.processGrid}>
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className={s.processCard}>
                <span className={s.processStep}>{step}</span>
                <h3 className={s.processTitle}>{title}</h3>
                <p className={s.processDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
