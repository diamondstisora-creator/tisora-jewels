import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import useReveal from '../hooks/useReveal';
import { products } from '../data/products';


export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  useReveal();

  const displayProducts = Array.from({ length: 16 }, (_, i) => {
    const baseProduct = products[i % products.length];
    return {
      ...baseProduct,
      uid: `prod-${i + 1}`,
      video: `/products/PRODUCT${i + 1}.webm`
    };
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.setProperty('overflow', 'hidden', 'important');
      document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    } else {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    };
  }, [selectedProduct]);

  return (
    <main>
      <style>{`
        @media (max-width: 768px) {
          .mobile-hidden {
            display: none !important;
          }
          #products-hero {
            align-items: flex-start !important;
            padding-top: 120px !important;
            min-height: auto !important;
          }
          .brand-story-img img {
            min-height: 350px !important;
          }
        }
      `}</style>

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

          {/* Products Grid */}
          <div className="products-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-5)'
          }}>
            {displayProducts.map((p, i) => (
              <div 
                key={p.uid} 
                className={`product-card reveal reveal-delay-${(i % 4) + 1}`}
                onClick={() => setSelectedProduct(p)}
                style={{ cursor: 'pointer', display: 'block', boxShadow: 'none' }}
              >
                <div className="product-card__image">
                  <video
                    src={p.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="product-card__img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'none', transform: 'none' }}
                  />
                  <div className="product-card__overlay" style={{ backdropFilter: 'none', WebkitBackdropFilter: 'none', backgroundColor: 'transparent' }}>
                    <span className="btn-outlined" style={{ fontSize: '12px', padding: '10px 20px', color: '#fff', borderColor: '#fff' }}>
                      View Details
                    </span>
                  </div>
                </div>
                <div className="product-card__body">
                  <span className="product-card__tag">Customized</span>
                  <h3 className="product-card__name">{p.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedProduct && (
            <div 
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-4)'
              }}
              onClick={() => setSelectedProduct(null)}
            >
              <div 
                style={{
                  backgroundColor: '#000000',
                  borderRadius: '12px',
                  maxWidth: '1000px',
                  width: '100%',
                  maxHeight: '90vh',
                  display: 'flex',
                  flexWrap: 'wrap',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProduct(null)}
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(0,0,0,0.5)', color: '#fff',
                    border: 'none', borderRadius: '50%',
                    width: '32px', height: '32px',
                    cursor: 'pointer', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                >
                  ✕
                </button>
                
                {/* Left side: Video */}
                <div style={{ flex: '1 1 300px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
                  <video
                    src={selectedProduct.video}
                    autoPlay
                    controls
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: '90vh' }}
                  />
                </div>
                
                {/* Right side: Product Info */}
                <div style={{ flex: '1 1 300px', padding: 'var(--space-5)', overflowY: 'auto', maxHeight: '90vh', color: '#ffffff' }}>
                  <span className="product-card__tag mobile-hidden" style={{ display: 'inline-block', marginBottom: 'var(--space-2)', color: '#ffffff', borderColor: '#ffffff' }}>Customized</span>
                  <h2 style={{ fontSize: '32px', marginBottom: 'var(--space-2)', fontFamily: 'var(--font-display)', fontWeight: 400, color: '#ffffff' }}>{selectedProduct.name}</h2>
                  
                  <div className="mobile-hidden" style={{ marginBottom: 'var(--space-4)' }}>
                    <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', color: '#ffffff' }}>Description</h4>
                    <p style={{ lineHeight: 1.6, color: '#ffffff' }}>{selectedProduct.overview}</p>
                  </div>
                  

                  
                  <div className="mobile-hidden" style={{ display: 'flex', gap: '16px' }}>
                    <a href={`https://wa.me/916359956385?text=${encodeURIComponent(`Hi, I'm interested in the ${selectedProduct.name}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none' }}>
                      INQUIRE NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>



      {/* ════════════════════════════ CUSTOM CTA ═══ */}
      <section className="section" id="custom-order-cta" aria-labelledby="custom-cta-heading">
        <div className="container">
          <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'center', border: '1px solid rgba(197, 168, 128, 0.3)', borderRadius: '8px', padding: 'var(--space-6)' }}>
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
              <Link to="/contact" className="btn-primary" style={{ marginTop: 'var(--space-5)', display: 'inline-block' }}>Begin a Custom Commission</Link>
            </div>
            <div className="reveal reveal-delay-2" style={{ overflow: 'hidden', borderRadius: '4px', maxWidth: '450px', margin: '0 auto', width: '100%' }}>
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
