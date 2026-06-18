import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import useReveal from '../hooks/useReveal';
import SectionLabel from '../components/SectionLabel';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('overview'); // 'overview' | 'details' | null
  useReveal();

  useEffect(() => {
    // Find the product by id
    const found = products.find(p => p.id === parseInt(id));
    setProduct(found);
    window.scrollTo(0, 0); // ensure we start at the top
  }, [id]);

  if (!product) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', marginBottom: 'var(--space-3)' }}>Product Not Found</h1>
        <Link to="/products" className="btn-primary">Back to Collections</Link>
      </main>
    );
  }

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <main style={{ paddingTop: 'calc(var(--space-7) + 60px)', paddingBottom: 'var(--space-8)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-7)', alignItems: 'start' }}>
          
          {/* Left Column: Image */}
          <div className="reveal sticky-desktop">
            <div style={{ 
              backgroundColor: 'var(--color-bg-secondary)', 
              borderRadius: 'var(--radius-lg)', 
              padding: 'var(--space-2)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              position: 'relative'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: 'calc(var(--radius-lg) - 8px)' }}>
                <img 
                  src={(product.images && product.images.length > 0) ? product.images[currentImageIndex] : product.image} 
                  alt={product.name} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    aspectRatio: '1/1', 
                    objectFit: 'cover', 
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Carousel Controls */}
              {product.images && product.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)' }}
                    aria-label="Previous image"
                  >
                    ❮
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)' }}
                    aria-label="Next image"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            
            <div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 'var(--space-3)' }}>
                {product.name}
              </h1>
            </div>

            {/* Badges row */}
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {['Certified Gold', 'Insured Delivery', 'Premium Cut'].map(badge => (
                <span key={badge} style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  border: '1px solid var(--color-border)', 
                  padding: '8px 12px', 
                  borderRadius: '20px',
                  color: 'var(--color-text-secondary)' 
                }}>
                  {badge}
                </span>
              ))}
            </div>

            {/* Inquire Now Button */}
            <a href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" style={{ 
              display: 'block',
              textAlign: 'center',
              width: '100%', 
              backgroundColor: 'var(--color-text-primary)', 
              color: 'var(--color-white)', 
              border: 'none', 
              borderRadius: '30px', 
              padding: '16px 0', 
              fontSize: '14px', 
              fontWeight: 500, 
              letterSpacing: '0.1em', 
              textTransform: 'uppercase', 
              cursor: 'pointer',
              transition: 'background var(--transition-fast)',
              marginTop: 'var(--space-3)',
              textDecoration: 'none'
            }}>
              Inquire Now
            </a>

            {/* Accordions */}
            <div style={{ marginTop: 'var(--space-4)', borderTop: '1px solid var(--color-border)' }}>
              
              {/* Product Overview Accordion */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button 
                  onClick={() => toggleAccordion('overview')}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'none', 
                    border: 'none', 
                    padding: 'var(--space-3) 0', 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '20px', 
                    color: 'var(--color-text-primary)', 
                    cursor: 'pointer' 
                  }}
                >
                  Product Overview
                  <span>{openAccordion === 'overview' ? '−' : '+'}</span>
                </button>
                <div style={{ 
                  maxHeight: openAccordion === 'overview' ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height var(--transition-mid)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7
                }}>
                  <p style={{ paddingBottom: 'var(--space-3)' }}>
                    {product.overview || product.description}
                  </p>
                </div>
              </div>

              {/* Details & Ingredients Accordion */}
              <div style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button 
                  onClick={() => toggleAccordion('details')}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    background: 'none', 
                    border: 'none', 
                    padding: 'var(--space-3) 0', 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '20px', 
                    color: 'var(--color-text-primary)', 
                    cursor: 'pointer' 
                  }}
                >
                  Details & Materials
                  <span>{openAccordion === 'details' ? '−' : '+'}</span>
                </button>
                <div style={{ 
                  maxHeight: openAccordion === 'details' ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height var(--transition-mid)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7
                }}>
                  <p style={{ paddingBottom: 'var(--space-3)' }}>
                    {product.materials || 'Crafted with premium materials to ensure longevity and timeless elegance.'}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
