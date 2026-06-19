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
              Vyas compaund, 201, Aashram Char Rasta, Bambavadi, Tunki, Katargam, Bambavadi, Surat, Gujarat 395004
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '16px', marginTop: 'var(--space-4)' }}>
              <a
                href="https://wa.me/916359956385"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src="/whatsapp-icon.png" alt="WhatsApp" width="40" height="40" style={{ objectFit: 'contain' }} />
              </a>
              <a
                href="https://www.instagram.com/tisorajewels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tisora Jewels on Instagram"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src="/instagram-logo.svg" alt="Instagram" width="32" height="32" style={{ objectFit: 'contain' }} />
              </a>
              <a
                href="https://www.facebook.com/people/Tisora-Jewels/61585129438602/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tisora Jewels on Facebook"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src="/facebook-logo.svg" alt="Facebook" width="32" height="32" style={{ objectFit: 'contain' }} />
              </a>
              <a
                href="https://in.pinterest.com/tisorajewels/?actingBusinessId=974185100554339009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tisora Jewels on Pinterest"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 200ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img src="/pinterest-logo.svg" alt="Pinterest" width="32" height="32" style={{ objectFit: 'contain' }} />
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
                  href="https://wa.me/916359956385"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'var(--color-text-secondary)', transition: 'color 200ms ease' }}
                  onMouseEnter={e => (e.target.style.color = 'var(--color-gold-primary)')}
                  onMouseLeave={e => (e.target.style.color = 'var(--color-text-secondary)')}
                >
                  +91 6359 956 385
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
