import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../data/mockData';
import { useState } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentCat = pathname === '/' ? 'home' : pathname.replace('/', '');

  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <span style={styles.logoMark}>N</span>
          <span style={styles.logoText}>ews<em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Flow</em></span>
        </Link>

        {/* Desktop Nav */}
        <nav style={styles.nav}>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={cat.id === 'home' ? '/' : `/${cat.id}`}
              style={{
                ...styles.navLink,
                ...(currentCat === cat.id ? styles.navActive : {}),
                ...(cat.isPrimary ? styles.navPrimary : {})
              }}
            >
              {cat.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger for mobile */}
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={cat.id === 'home' ? '/' : `/${cat.id}`}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {cat.icon} {cat.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky', top: 0, zIndex: 100,
    background: 'rgba(12,12,14,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--border)',
  },
  inner: {
    maxWidth: 'var(--max-w)', margin: '0 auto',
    padding: '0 20px', height: 'var(--nav-h)',
    display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'space-between'
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0,
    fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900
  },
  logoMark: {
    background: 'var(--accent)', color: '#0c0c0e',
    width: 30, height: 30, borderRadius: 6,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 16, fontWeight: 900
  },
  logoText: { letterSpacing: '-0.5px' },
  nav: { display: 'flex', gap: 4, alignItems: 'center' },
  navLink: {
    padding: '6px 14px', borderRadius: 6, fontSize: 14, fontWeight: 400,
    color: 'var(--muted)', transition: 'all 0.2s',
  },
  navActive: { color: 'var(--text)', background: 'var(--surface2)' },
  navPrimary: { color: 'var(--accent)', fontWeight: 500 },
  hamburger: {
    display: 'none', flexDirection: 'column', gap: 5, padding: 8,
    '@media(max-width:600px)': { display: 'flex' }
  },
  mobileMenu: {
    background: 'var(--surface)', borderTop: '1px solid var(--border)',
    display: 'flex', flexDirection: 'column',
  },
  mobileLink: {
    padding: '14px 20px', fontSize: 15,
    borderBottom: '1px solid var(--border)', color: 'var(--text)'
  }
};
