import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import SectionLabel from '../components/SectionLabel';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)' }}>Article Not Found</h2>
        <Link to="/blogs" className="btn-primary" style={{ marginTop: '24px' }}>Back to Journal</Link>
      </div>
    );
  }

  return (
    <article style={{ paddingTop: '160px', paddingBottom: 'var(--space-8)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
          <SectionLabel>{blog.category}</SectionLabel>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.15, margin: 'var(--space-3) 0', color: 'var(--color-text-primary)' }}>
            {blog.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--color-text-muted)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto var(--space-6)' }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
      </div>
      <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
          <p style={{ marginBottom: 'var(--space-4)', fontSize: '22px', fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>
            {blog.excerpt}
          </p>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--color-text-primary)', margin: 'var(--space-5) 0 var(--space-3)' }}>The Golden Rule</h3>
          <p style={{ marginBottom: 'var(--space-4)' }}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', margin: 'var(--space-6) 0' }}>
            <Link to="/blogs" className="btn-outlined">Read More Articles</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
