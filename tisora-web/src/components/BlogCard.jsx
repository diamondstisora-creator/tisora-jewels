import { Link } from 'react-router-dom';

export default function BlogCard({ blog, featured = false }) {
  if (featured) {
    return (
      <Link to={`/blog/${blog.id}`} className="blog-featured reveal" style={{ display: 'grid' }}>
        <div className="blog-featured__image">
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
          />
        </div>
        <div className="blog-featured__body">
          {blog.category && (
            <div className="blog-card__meta" style={{ marginBottom: '12px' }}>
              <span className="blog-card__category">{blog.category}</span>
              <span className="blog-card__date">{blog.date}</span>
            </div>
          )}
          <h2 className="blog-featured__title" style={{ transition: 'none' }}>{blog.title}</h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            {blog.excerpt}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${blog.id}`} className="blog-card reveal" style={{ display: 'block', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="blog-card__image" style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card__img"
          loading="lazy"
          style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }}
        />
      </div>
      <div className="blog-card__body" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {blog.category && (
          <div className="blog-card__meta">
            <span className="blog-card__category">{blog.category}</span>
            <span className="blog-card__date">{blog.date}</span>
          </div>
        )}
        <h3 className="blog-card__title" style={{ transition: 'none', fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.3 }}>{blog.title}</h3>
        <p className="blog-card__excerpt" style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '24px', flexGrow: 1 }}>{blog.excerpt}</p>
        <div>
          <span className="blog-read-more">
            Read More &raquo;
          </span>
        </div>
      </div>
    </Link>
  );
}
