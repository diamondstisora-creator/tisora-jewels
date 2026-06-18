import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card reveal" aria-label={product.name} style={{ display: 'block' }}>
      <div className="product-card__image">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
        />
        <div className="product-card__overlay">
          <span className="btn-outlined" style={{ fontSize: '10px', padding: '10px 20px' }}>
            Inquire Now
          </span>
        </div>
      </div>
      <div className="product-card__body">
        <span className="product-card__tag">Customized</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
      </div>
    </Link>
  );
}
