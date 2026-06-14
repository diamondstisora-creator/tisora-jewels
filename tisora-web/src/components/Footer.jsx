import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

const collections = [
  { label: 'Rings', to: '/products' },
  { label: 'Necklaces', to: '/products' },
  { label: 'Earrings', to: '/products' },
  { label: 'Bracelets', to: '/products' },
  { label: 'Bangles', to: '/products' },
  { label: 'Pendants', to: '/products' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      {/* Main footer grid */}
      <div className="container" style={{ padding: 'var(--space-7) var(--space-4)' }}>
        <div className="mobile-stack" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 'var(--space-6)',
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
              <img src="/logo.jpg" alt="Tisora Logo" style={{ height: '32px', width: '32px', objectFit: 'cover', marginRight: '12px', borderRadius: '50%' }} />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: 'var(--color-text-primary)',
              }}>
                TISORA <span style={{ color: 'var(--color-gold-primary)' }}>JEWELS</span>
              </p>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.85, maxWidth: '300px' }}>
              Cristal Diamonds, 201, Aashram Char Rasta, Bambavadi, Tunki, Katargam, Surat, Gujarat 395004
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '14px', marginTop: 'var(--space-4)' }}>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gold-primary)'; e.currentTarget.style.color = 'var(--color-gold-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tisorajewels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tisora Jewels on Instagram"
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gold-primary)'; e.currentTarget.style.color = 'var(--color-gold-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tisora Jewels on Facebook"
                style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--color-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gold-primary)'; e.currentTarget.style.color = 'var(--color-gold-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-primary)',
              marginBottom: 'var(--space-3)',
            }}>
              Navigate
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                    onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                    onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-primary)',
              marginBottom: 'var(--space-3)',
            }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Email</p>
                <a
                  href="mailto:tisorajewels@gmail.com"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  tisorajewels@gmail.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Instagram</p>
                <a
                  href="https://www.instagram.com/tisorajewels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  @tisorajewels
                </a>
              </div>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>WhatsApp</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
