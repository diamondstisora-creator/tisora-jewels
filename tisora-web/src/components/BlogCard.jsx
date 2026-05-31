export default function BlogCard({ blog, featured = false }) {
  if (featured) {
    return (
      <div className="blog-featured reveal" style={{ display: 'grid' }}>
        <div className="blog-featured__image">
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
          />
        </div>
        <div className="blog-featured__body">
          <div className="blog-card__meta" style={{ marginBottom: '12px' }}>
            <span className="blog-card__category">{blog.category}</span>
            <span className="blog-card__date">{blog.date}</span>
          </div>
          <h2 className="blog-featured__title" style={{ transition: 'none' }}>{blog.title}</h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            {blog.excerpt}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-card reveal" style={{ display: 'block' }}>
      <div className="blog-card__image">
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card__img"
          loading="lazy"
        />
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__category">{blog.category}</span>
          <span className="blog-card__date">{blog.date}</span>
        </div>
        <h3 className="blog-card__title" style={{ transition: 'none' }}>{blog.title}</h3>
        <p className="blog-card__excerpt">{blog.excerpt}</p>
      </div>
    </div>
  );
}
