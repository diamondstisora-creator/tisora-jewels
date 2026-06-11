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
          gridTemplateColumns: '2fr 1fr 1fr 1.4fr',
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
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '14px',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-3)',
            }}>
              Every piece, a promise.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.85, maxWidth: '300px' }}>
              Fine jewellery handcrafted in India since 2014. Worn by over 12,000 families — on the days that matter most, and every quiet day in between.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '14px', marginTop: 'var(--space-4)' }}>
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
                href="mailto:hello@tisorajewels.com"
                aria-label="Email Tisora Jewels"
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
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

          {/* Collections */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-primary)',
              marginBottom: 'var(--space-3)',
            }}>
              Collections
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {collections.map((l) => (
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
                  href="mailto:hello@tisorajewels.com"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  hello@tisorajewels.com
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
                <p style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Workshop</p>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
