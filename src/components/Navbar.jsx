import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Navbar({ onLaunchF1 }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Milestones', href: '#story' },
    { label: 'Grad Book', href: '#graduation-book' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: '3D Lab', href: '#cad-lab' },
    { label: 'Writing', href: '#writing' },
    { label: 'Arsenal', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 400,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(8px)',
        backgroundColor: scrolled ? 'var(--bg-elevated)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand & Status Pill */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              color: '#050508',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              boxShadow: '0 0 15px var(--accent-glow)',
            }}
          >
            AK
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Abhishek Kumar
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                    animation: 'pulse 1.8s infinite',
                  }}
                />
                OPEN TO WORK
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Full-Stack & Frontend Creative Dev
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}

          <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a
              href="https://github.com/abhishek838"
              target="_blank"
              rel="noreferrer"
              title="Abhishek's GitHub"
              style={{
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/abhishek-kumar-4o4"
              target="_blank"
              rel="noreferrer"
              title="Abhishek's LinkedIn"
              style={{
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="https://www.instagram.com/abhii.abhishek_404?stkn=ZWM4eXp0cnhnZ2Zr"
              target="_blank"
              rel="noreferrer"
              title="Abhishek's Instagram"
              style={{
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          {/* Overdrive Trigger */}
          <button
            onClick={onLaunchF1}
            className="btn-f1-nitro"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.78rem',
              borderRadius: '9999px',
            }}
          >
            <span>🏎️ Overdrive</span>
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            margin: '0.75rem 1.25rem 0',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.4rem 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
            <a
              href="https://github.com/abhishek838"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishek-kumar-4o4"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/abhii.abhishek_404?stkn=ZWM4eXp0cnhnZ2Zr"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <InstagramIcon size={15} /> Instagram
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onLaunchF1();
            }}
            className="btn-f1-nitro"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            🏎️ ENGAGE F1 OVERDRIVE
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </header>
  );
}
