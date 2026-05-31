import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import useReveal from '../hooks/useReveal';

const values = [
  {
    num: '01',
    name: 'Integrity',
    desc: 'We price honestly, source ethically, and never compromise on the materials that go into your piece — because you deserve to know exactly what you are wearing.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
  },
  {
    num: '02',
    name: 'Elegance',
    desc: 'Beauty is not decoration — it is intention. Every proportion, every finish, every clasp on a Tisora piece has been considered with a precision that only the eye truly notices.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  },
  {
    num: '03',
    name: 'Heritage',
    desc: 'India has been making extraordinary jewellery for five thousand years. We carry that tradition forward — not as a relic, but as a living, breathing craft that grows with the times.',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=700&q=80',
  },
  {
    num: '04',
    name: 'Innovation',
    desc: 'We revisit classical forms through a contemporary lens — pushing silhouettes, rethinking proportions, and introducing techniques that make the familiar feel thrillingly new.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
  },
  {
    num: '05',
    name: 'Love',
    desc: 'It sounds simple. It is the most complex thing we do. Every single piece leaves our workshop carrying the care, time, and genuine feeling of the person who made it.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
  },
];


const teamImages = [
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80',
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
          src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=1800&q=85"
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
              A Story Written<br />
              <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>
                in Gold and Time.
              </em>
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8, maxWidth: '520px', margin: 'var(--space-3) auto 0', fontWeight: 300 }}>
              We did not start a jewellery brand. We started a belief — that beauty made with integrity is beauty that lasts.
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
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=700&q=80"
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
                  Tisora Jewels was founded on a conviction that has never changed: truly beautiful jewellery should be accessible to every woman who deserves to feel extraordinary. Not as a luxury reserved for a few — but as a quiet, everyday act of honouring yourself.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  The name Tisora means treasury — a gathering of the most precious things. That is precisely what our collections are. Every ring, necklace, earring, and bangle in our range has been chosen not because it is expensive, but because it is worth something far more lasting.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  We started in a single workshop with a handful of designs and a team of three. Today, Tisora pieces are worn by over 12,000 families across India — at weddings, anniversary dinners, morning routines, and quiet evenings. That breadth of trust is something we take more seriously than any number.
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


      {/* ══════════════════════════ MISSION & VISION ═══ */}
      <section className="section" id="mission-vision" aria-labelledby="mission-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>Our Purpose</SectionLabel>
            <h2 id="mission-heading" className="section__title">
              The Reason We<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Show Up Every Day.</em>
            </h2>
          </div>
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
            <div className="promise-item reveal reveal-delay-1" style={{ padding: 'var(--space-6)' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--color-gold-primary)', marginBottom: 'var(--space-3)' }}>
                Our Mission
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '24px', color: 'var(--color-text-primary)', lineHeight: 1.55 }}>
                "To craft jewellery that carries genuine meaning — pieces that mark the milestones, hold the memories, and become part of a woman's most personal story."
              </p>
            </div>
            <div className="promise-item reveal reveal-delay-2" style={{ padding: 'var(--space-6)' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--color-gold-primary)', marginBottom: 'var(--space-3)' }}>
                Our Vision
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '24px', color: 'var(--color-text-primary)', lineHeight: 1.55 }}>
                "To be the most trusted name in fine jewellery for the modern Indian woman — where the oldest traditions and the sharpest contemporary instincts meet in perfect form."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ VALUES ═══ */}
      <section className="section section--alt" id="values" aria-labelledby="values-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 id="values-heading" className="section__title">
              Five Values.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Non-Negotiable.</em>
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



      {/* ══════════════════════════ TEAM / WORKSHOP ═══ */}
      <section className="section section--alt" id="workshop" aria-labelledby="workshop-heading">
        <div className="container">
          <div className="section__header reveal">
            <SectionLabel>Behind the Pieces</SectionLabel>
            <h2 id="workshop-heading" className="section__title">
              The Hands That<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Make It Real.</em>
            </h2>
            <p className="section__sub">
              Every artisan in our workshop has spent years — often decades — refining a craft that cannot be taught in a classroom.
            </p>
          </div>
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)' }}>
            {teamImages.map((src, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{ overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <img
                  src={src}
                  alt={`Tisora workshop scene ${i + 1}`}
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 600ms ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOUNDER NOTE ═══ */}
      <section className="section" id="founder-note" aria-labelledby="founder-heading">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <SectionLabel>From the Founder</SectionLabel>
            <h2 id="founder-heading" className="section__title">
              A Note on Why<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>We Do This.</em>
            </h2>
            <GoldDivider />
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2.6vw, 30px)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.75,
              marginBottom: 'var(--space-4)',
              marginTop: 'var(--space-3)',
            }}>
              "When I first imagined Tisora, I imagined a woman standing in front of a mirror, putting on a piece of jewellery she loves — and feeling, for a moment, that the world is exactly as it should be. Every ring, every necklace, every bangle we make is made for that moment. Thank you for letting us be part of yours."
            </blockquote>
            <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-gold-primary)' }}>
              — Founder, Tisora Jewels
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CTA ═══ */}
      <section className="section section--alt" id="about-cta" aria-labelledby="about-cta-heading" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="reveal">
            <SectionLabel>Explore Our Work</SectionLabel>
            <h2 id="about-cta-heading" className="section__title">
              Ready to Find<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Your Piece?</em>
            </h2>
            <p className="section__sub" style={{ marginBottom: 'var(--space-5)' }}>
              Browse our full collection and discover the piece that was quietly waiting for you.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn-primary">Explore the Collection</Link>
              <Link to="/contact" className="btn-outlined">Commission a Custom Piece</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
