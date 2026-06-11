import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import useReveal from '../hooks/useReveal';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useReveal();

  useEffect(() => {
    // Find the blog by id
    const found = blogs.find(b => b.id === parseInt(id));
    setBlog(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', marginBottom: 'var(--space-3)' }}>Article Not Found</h1>
        <Link to="/blogs" className="btn-primary">Back to Journal</Link>
      </main>
    );
  }

  return (
    <main style={{ paddingBottom: 'var(--space-8)' }}>
      {/* Immersive Header */}
      <section style={{ 
        position: 'relative', 
        minHeight: '70vh', 
        display: 'flex', 
        alignItems: 'flex-end', 
        paddingTop: 'calc(var(--space-7) + 60px)', 
        paddingBottom: 'var(--space-6)' 
      }}>
        <img 
          src={blog.image} 
          alt={blog.title} 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ 
              display: 'inline-block', 
              fontSize: '13px', 
              fontWeight: 500, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--color-gold-light)', 
              marginBottom: 'var(--space-3)' 
            }}>
              {blog.category} &nbsp;•&nbsp; {blog.date} &nbsp;•&nbsp; {blog.readTime}
            </span>
            <h1 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(40px, 6vw, 72px)', 
              color: 'var(--color-white)', 
              lineHeight: 1.1, 
              marginBottom: 'var(--space-4)' 
            }}>
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="section" style={{ paddingBottom: 'var(--space-5)' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="reveal reveal-delay-2" style={{ 
            fontSize: '18px', 
            lineHeight: 1.8, 
            color: 'var(--color-text-secondary)' 
          }}>
            <p style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)' }}>
              {blog.excerpt}
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar id diam cursus porta. Nulla facilisi. Praesent et ante quis nunc elementum scelerisque at eu orci. In hac habitasse platea dictumst. Quisque facilisis dolor eu scelerisque commodo. 
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--color-text-primary)', marginTop: 'var(--space-5)', marginBottom: 'var(--space-3)' }}>
              The Golden Rule
            </h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Vestibulum rhoncus ex quis tellus efficitur, at interdum nulla scelerisque. Fusce varius elementum sapien vitae rutrum. Proin scelerisque urna aliquet nisl laoreet tincidunt. Phasellus ut lorem in elit tempus facilisis nec et felis.
            </p>
            <blockquote style={{ 
              borderLeft: '2px solid var(--color-gold-primary)', 
              paddingLeft: 'var(--space-4)', 
              margin: 'var(--space-5) 0', 
              fontStyle: 'italic', 
              fontSize: '24px', 
              fontFamily: 'var(--font-display)', 
              color: 'var(--color-text-primary)' 
            }}>
              "Jewellery has the power to be this one little thing that can make you feel unique."
            </blockquote>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Curabitur nec odio varius, dapibus nisl in, tristique nunc. Integer eu magna elit. Suspendisse sagittis dolor at tempor tempus. Cras facilisis elit est, congue iaculis sapien commodo non.
            </p>

            {/* Back Link */}
            <div style={{ marginTop: 'var(--space-6)', textAlign: 'center', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-5)' }}>
              <Link to="/blogs" className="btn-outlined">
                ← Back to Journal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
