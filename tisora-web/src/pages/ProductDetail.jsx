import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import SectionLabel from '../components/SectionLabel';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)' }}>Product Not Found</h2>
        <Link to="/products" className="btn-primary" style={{ marginTop: '24px' }}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '160px', paddingBottom: 'var(--space-8)' }}>
      <div className="container">
        <div className="product-detail-grid">
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: '0 12px 40px var(--color-shadow)' }}
            />
          </div>
          <div className="product-detail-content">
            <SectionLabel>{product.category}</SectionLabel>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', lineHeight: 1.1 }}>
              {product.name}
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              {product.description}
            </p>
            <div style={{ margin: 'var(--space-4) 0', fontSize: '24px', color: 'var(--color-gold-primary)' }}>
              $950
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contact for Inquiry</button>
            <div style={{ marginTop: 'var(--space-5)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-4)' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '16px', fontSize: '20px' }}>Details</h4>
              <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 2 }}>
                <li>• 18k Solid Gold</li>
                <li>• Ethically Sourced Diamonds</li>
                <li>• Complimentary Worldwide Shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
