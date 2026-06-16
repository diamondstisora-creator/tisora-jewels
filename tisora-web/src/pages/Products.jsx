import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import ProductCard from '../components/ProductCard';
import useReveal from '../hooks/useReveal';
import { products, categories } from '../data/products';


export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  useReveal();

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <main>

      {/* ═══════════════════════════════ PAGE HERO ═══ */}
      <section
        className="section section--alt"
        id="products-hero"
        aria-labelledby="products-hero-heading"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: 'var(--space-6)' }}
      >
        <div className="container">
          <div className="brand-story-grid">

            {/* Left side: Image */}
            <div className="brand-story-img reveal">
              <img
                src="/jewellery-img.webp"
                alt="All Lab Grown Diamond Fine Jewelry"
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '500px', borderRadius: '4px' }}
                loading="eager"
              />
            </div>

            {/* Right side: Text */}
            <div className="reveal reveal-delay-2">
              <SectionLabel>The Collections</SectionLabel>
              <h1 id="products-hero-heading" className="section__title" style={{ textAlign: 'left', marginBottom: 'var(--space-4)', fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2 }}>
                All Lab Grown<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Diamond Fine Jewelry.</em>
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  Discover the complete <strong>Lab Grown Diamond Fine Jewelry</strong> collection, where ethical sourcing meets spectacular brilliance. This extensive range includes everything from classic <strong>solitaire engagement rings</strong> and luxurious <strong>eternity bracelets</strong> to dazzling <strong>pendant necklaces</strong> and sophisticated earrings.
                </p>

                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                  Our <strong>lab-created diamonds</strong> are chemically, physically, and optically identical to mined diamonds, offering guaranteed quality and exceptional fire. Choosing lab grown is a conscious commitment to sustainability and conflict-free luxury.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ PRODUCTS ═══ */}
      <section className="section" id="products-grid" aria-labelledby="products-grid-heading">
        <div className="container">
          <h2 id="products-grid-heading" className="sr-only">Product Collection</h2>

          {/* Filter Bar */}
          <div className="filter-bar" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 'var(--space-7) 0', color: 'var(--color-text-muted)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 400 }}>
                No pieces found in this category.
              </p>
              <p style={{ fontSize: '16px', marginTop: 'var(--space-2)' }}>
                Try another filter or browse the full collection.
              </p>
            </div>
          )}
        </div>
      </section>



      {/* ════════════════════════════ CUSTOM CTA ═══ */}
      <section className="section" id="custom-order-cta" aria-labelledby="custom-cta-heading">
        <div className="container">
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'center' }}>
            <div className="reveal">
              <h2 id="custom-cta-heading" className="section__title" style={{ textAlign: 'left', marginBottom: 'var(--space-4)', color: 'var(--color-gold-primary)' }}>
                Customized
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> Share your designs or concept to get instant quotes
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> Freedom to customize your Jewelry and designs according to your requirements.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> 3d CAD designing
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> High quality jewelry renders image.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> Custom Text engraving for your loved ones.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> Engrave your company's Logo on Jewelry.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--color-gold-primary)', marginTop: '2px' }}>•</span> Professional Photos and videos of Products.
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ overflow: 'hidden', border: '1px solid var(--color-border)', borderRadius: '4px', maxWidth: '320px', margin: '0 auto', width: '100%' }}>
              <video
                src="/jewellery-video.webm"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', aspectRatio: '9/16', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
