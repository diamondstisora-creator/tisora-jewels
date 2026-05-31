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
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
        aria-labelledby="products-hero-heading"
      >
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1800&q=85"
          alt="Tisora jewellery collection laid out on marble"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'calc(var(--space-6) + 40px)', paddingBottom: 'var(--space-7)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <SectionLabel>The Collections</SectionLabel>
            <h1 id="products-hero-heading" className="page-hero__title" style={{ color: 'var(--color-white)', margin: '0 auto', maxWidth: '620px' }}>
              Every Piece,<br />
              <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>
                Chosen with Intention.
              </em>
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8, maxWidth: '500px', margin: 'var(--space-3) auto 0', fontWeight: 300 }}>
              Fine jewellery for every occasion, every woman, every memory worth keeping.
            </p>
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
              <SectionLabel>Bespoke Orders</SectionLabel>
              <h2 id="custom-cta-heading" className="section__title" style={{ textAlign: 'left' }}>
                Nothing in the Collection<br />
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-primary)' }}>Feels Quite Right?</em>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.85, marginBottom: 'var(--space-4)', marginTop: 'var(--space-3)' }}>
                The most meaningful pieces are often the ones that did not exist until someone imagined them.
                Tell us what you have in mind — an occasion, an emotion, a memory — and our designers will
                bring it to life in gold.
              </p>
              <Link to="/contact" className="btn-primary">Begin a Custom Commission</Link>
            </div>
            <div className="reveal reveal-delay-2" style={{ overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80"
                alt="Custom jewellery design sketch and gold"
                loading="lazy"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
