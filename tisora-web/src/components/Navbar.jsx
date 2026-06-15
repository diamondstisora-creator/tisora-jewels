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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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

          <Link to="/products" className="navbar__cta" aria-label="Explore Collection">
            Explore Collection
          </Link>

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
      </nav>

      {/* Mobile overlay menu */}
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
      </div>
    </>
  );
}
