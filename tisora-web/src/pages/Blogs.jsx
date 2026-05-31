import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import GoldDivider from '../components/GoldDivider';
import BlogCard from '../components/BlogCard';
import useReveal from '../hooks/useReveal';
import { blogs } from '../data/blogs';

export default function Blogs() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  useReveal();

  const featured = blogs[0];
  const rest = blogs.slice(1);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <main>

      {/* ══════════════════════════════════ HERO ═══ */}
      <section
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
        aria-labelledby="blogs-hero-heading"
      >
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800&q=85"
          alt="Jewellery and editorial styling"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.6) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 'calc(var(--space-6) + 40px)', paddingBottom: 'var(--space-7)' }}>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <SectionLabel>The Journal</SectionLabel>
            <h1 id="blogs-hero-heading" className="page-hero__title" style={{ color: 'var(--color-white)', margin: '0 auto', maxWidth: '640px' }}>
              Words on Gold,<br />
              <em style={{ color: 'var(--color-gold-light)', fontStyle: 'italic' }}>
                Craft, and Beauty.
              </em>
            </h1>
            <p style={{ fontSize: '19px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.8, maxWidth: '500px', margin: 'var(--space-3) auto 0', fontWeight: 300 }}>
              Style guides, care rituals, jewellery wisdom, and stories from inside our workshop — written for the woman who takes the things she wears seriously.
            </p>
          </div>
        </div>
      </section>


      {/* ═════════════════════════════ ARTICLES ═══ */}
      <section className="section section--alt" id="blog-list" aria-labelledby="blog-list-heading">
        <div className="container">
          <h2 id="blog-list-heading" className="sr-only">Blog Articles</h2>

          {/* Featured */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <div className="reveal" style={{ marginBottom: 'var(--space-3)' }}>
              <SectionLabel>Editor's Pick</SectionLabel>
            </div>
            <BlogCard blog={featured} featured />
          </div>

          <GoldDivider />

          {/* Grid */}
          <div className="reveal" style={{ marginBottom: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
            <SectionLabel>Latest Articles</SectionLabel>
          </div>
          <div className="blogs-grid">
            {rest.map((b, i) => (
              <div key={b.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
