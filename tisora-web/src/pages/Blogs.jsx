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

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <main>

      {/* ═════════════════════════════ ARTICLES ═══ */}
      <section className="section section--alt" id="blog-list" aria-labelledby="blog-list-heading" style={{ paddingTop: 'calc(var(--space-6) + 50px)' }}>
        <div className="container">
          <h2 id="blog-list-heading" className="sr-only">Blog Articles</h2>

          {/* Grid */}
          <div className="reveal" style={{ marginBottom: 'var(--space-3)' }}>
            <SectionLabel>Latest Articles</SectionLabel>
          </div>
          <div className="blogs-grid">
            {blogs.map((b, i) => (
              <div key={b.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <BlogCard blog={b} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Certification Logo Strip */}
      <section className="reveal" style={{ 
        backgroundColor: '#ffffff', 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%'
      }}>
        <img src="/blogs/IGI.webp" alt="IGI Certified Diamonds" style={{ maxWidth: '200px', display: 'block' }} />
      </section>

    </main>
  );
}
