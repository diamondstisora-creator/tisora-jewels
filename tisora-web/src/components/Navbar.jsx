import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Customized Jewelry' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isProductPage = location.pathname.startsWith('/product/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount in case we are already scrolled
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll lock removed for dropdown menu

  return (
    <>
      <nav className={`navbar${(scrolled || isProductPage || menuOpen) ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
            <img src="/logo2.png" alt="Tisora Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain', marginRight: '10px' }} />
            TISORA <span>JEWELS</span>
          </Link>

          <ul className="navbar__links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__contact-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            <a href="https://wa.me/916359956385" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: 500,
              color: 'var(--color-gold-light)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              lineHeight: 1,
              transition: 'color var(--transition-fast)'
            }}
            onMouseEnter={e => e.target.style.color = '#ffffff'}
            onMouseLeave={e => e.target.style.color = 'var(--color-gold-light)'}
            >
              <img src="/whatsapp-icon.png" alt="WhatsApp" width="22" height="22" style={{ pointerEvents: 'none', objectFit: 'contain' }} />
              +91 6359 956 385
            </a>
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1
            }}>
              Worldwide Delivery
            </span>
          </div>

          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Dropdown Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          
          {/* Mobile Contact Info */}
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px', width: '100%' }}>
            <a href="https://wa.me/916359956385" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: 500,
              color: 'var(--color-gold-primary)',
              textDecoration: 'none'
            }}>
              <img src="/whatsapp-icon.png" alt="WhatsApp" width="20" height="20" style={{ pointerEvents: 'none', objectFit: 'contain' }} />
              +91 6359 956 385
            </a>
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)'
            }}>
              Worldwide Delivery
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
