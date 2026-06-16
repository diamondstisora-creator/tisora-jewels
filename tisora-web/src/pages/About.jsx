import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import useReveal from '../hooks/useReveal';

const values = [
  {
    num: '01',
    name: 'Designing 3D CAD',
    desc: 'The whole process starts with designing. Craftsmen need to put the idea on the digital model. Using CAD (Computer Aided Design) software, the 3d designer will make a digital render of your jewelry.',
    image: '/about11.webp',
  },
  {
    num: '02',
    name: 'Wax Printing Jewelry',
    desc: 'That 3d model from the last step wasn’t only for you to see a sample ahead of time; it also serves as the basis for the next step, the wax model. In most modern jewelry production, the we uses a 3d printing machine to print a wax model made out of resin.',
    image: '/about12.webp',
  },
  {
    num: '03',
    name: 'Casting into Metal',
    desc: 'In the next step, the jewelry goes through the casting process.. At this stage, your piece starts looking more like the jewelry you might see in a store. The wax is melted away and is replaced with your metal of choice in molten form, usually gold, silver, or platinum. The metal then dries into the shape on your jewelry.',
    image: '/about13.webp',
  },
  {
    num: '04',
    name: 'Stone Setting Process',
    desc: 'For this step, the diamond setter finally adds the diamonds or other gemstones onto your piece. He carefully sets the central stone into the mount. If side stones are involved, the setter needs to hand drill for these before setting. Using a microscope, they then set each separate stone.',
    image: '/about14.webp',
  },
  {
    num: '05',
    name: 'Polishing, Finishing',
    desc: 'In the final stage, a polisher works to make sure the metal is polished to perfection so it’s as shiny as possible. Any final additions such as engravings are also applied. Finally, the jewelry is inspected and each detail is analyzed to make sure production was successful.',
    image: '/about15.webp',
  },
];



export default function About() {
  useReveal();

  return (
    <main>

      {/* ══════════════════════════════════ PAGE HERO ═══ */}
      <section
        className="about-page-hero"
        aria-labelledby="about-hero-heading"
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
      >
        <img
          src="/about-hero.webp"
          alt="Fine jewellery crafted by hand"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'calc(var(--space-6) + 40px)', paddingBottom: 'var(--space-7)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <SectionLabel>About Tisora</SectionLabel>
            <h1 id="about-hero-heading" className="page-hero__title" style={{ color: 'var(--color-white)', margin: '0 auto', maxWidth: '680px' }}>
              Direct From The<br />
              <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>
                Manufacturer.
              </em>
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8, maxWidth: '620px', margin: 'var(--space-3) auto 0', fontWeight: 300 }}>
              Direct from the factory to your store. Save time, cut extra costs, and grow your business with Tisore Jewels.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ BRAND STORY ═══ */}
      <section className="section section--alt" id="brand-story" aria-labelledby="brand-story-heading">
        <div className="container">
          <div className="brand-story-grid">
            <div className="brand-story-img reveal">
              <img
                src="/about2.webp"
                alt="Tisora artisan shaping a piece of fine gold jewellery"
                loading="lazy"
              />
            </div>
            <div className="reveal reveal-delay-2">
              <SectionLabel>The Beginning</SectionLabel>
              <h2
                id="brand-story-heading"
                className="section__title"
                style={{ textAlign: 'left', fontSize: 'clamp(32px, 3.8vw, 50px)' }}
              >
                Born in a Single<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Workshop.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  Welcome to Tisora Jewels, where cutting-edge technological innovation meets timeless fine jewelry craftsmanship. Founded with a bold vision to revolutionize the global diamond market, we have evolved into a premier destination for exquisite, ethical, and eco-friendly custom diamond jewelry.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  Our journey began with a fundamental belief: you should never have to choose between breathtaking brilliance and environmental integrity. By bypassing the immense ecological and ethical complications of traditional open-pit diamond mining, Tisora Jewels delivers pure luxury that respects both people and the planet. We are dedicated to bringing you magnificent jewelry through innovative, sustainable, and responsible manufacturing practices.
                </p>
                <blockquote style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '20px',
                  color: 'var(--color-gold-primary)',
                  borderLeft: '2px solid var(--color-gold-primary)',
                  paddingLeft: 'var(--space-3)',
                  marginTop: 'var(--space-2)',
                  lineHeight: 1.65,
                }}>
                  "Jewellery is not an accessory. It is an emotion made visible. A memory you can hold."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ VALUES ═══ */}
      <section className="section section--alt" id="values" aria-labelledby="values-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 id="values-heading" className="section__title">
              How Jewelry Manufacturing works
            </h2>
          </div>
          <div className="mobile-stack-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-3)' }}>
            {values.map((v, i) => (
              <div key={v.name} className={`reveal reveal-delay-${i + 1}`} style={{ textAlign: 'center' }}>
                <div className="value-card__image-wrapper">
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="value-card__img"
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(26,17,8,0.7) 0%, transparent 50%)',
                  }} />
                  <span style={{
                    position: 'absolute', bottom: '12px', left: 0, right: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 500,
                    color: 'var(--color-white)',
                    letterSpacing: '0.02em',
                  }}>
                    {v.name}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
