import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Flame, ExternalLink, Terminal, Sparkles, Code2, MapPin, ShieldCheck, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function Hero({ onLaunchF1 }) {
  // Kinetic Headline Typing & Cycling
  const roles = [
    'Frontend Creative Developer',
    'Full-Stack Solutions Architect',
    'Published Blockchain Researcher',
    'Interactive Motion Specialist',
    'Web Audio & Systems Engineer',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  // 3D Card Tilt Interaction on Abhishek's Portrait
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    glarePos: { x: 50, y: 50, opacity: 0 },
  });

  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      glarePos: { x: glareX, y: glareY, opacity: 0.35 },
    });
  };

  const handleCardMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      glarePos: { x: 50, y: 50, opacity: 0 },
    });
  };

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        zIndex: 10,
      }}
    >
      <div className="container-custom" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Kinetic Introduction */}
          <div>
            {/* Tech Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="glass-pill">
                <Sparkles size={13} color="var(--accent-primary)" /> CREATIVE TECH ARCHITECT
              </span>
              <a
                href="https://openurl.ebsco.com/EPDB%3Agcd%3A11%3A19783659/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A162319875&crl=c"
                target="_blank"
                rel="noreferrer"
                className="glass-pill"
                style={{ textDecoration: 'none', border: '1px solid var(--accent-violet)', color: '#c084fc' }}
                title="View Published Research on EBSCOhost"
              >
                <GraduationCap size={13} color="var(--accent-violet)" /> PUBLISHED RESEARCHER • EBSCO INDEXED
              </a>
              <span className="glass-pill">
                <MapPin size={13} color="var(--accent-secondary)" /> PUNE, INDIA / REMOTE
              </span>
            </div>

            {/* Kinetic Title */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
              }}
            >
              Crafting Digital <br />
              <span className="text-gradient">Experiences</span> That{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Resonate.</span>
            </h1>

            {/* Kinetic Dynamic Role Subtitle */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                color: 'var(--accent-primary)',
                marginBottom: '1.6rem',
                minHeight: '2.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
              <span>{displayedText}</span>
              <span
                style={{
                  display: 'inline-block',
                  width: '9px',
                  height: '1.2em',
                  backgroundColor: 'var(--accent-primary)',
                  animation: 'cursorBlink 1s infinite',
                }}
              />
            </div>

            {/* Bio Narrative */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              I am <strong style={{ color: 'var(--text-primary)' }}>Abhishek Kumar</strong>, an engineering-driven
              frontend & full-stack creator bridging design precision and distributed scalability. Specializing in
              interactive canvas computing, real-time architectures, and modern web application ecosystems.
            </p>

            {/* Call to Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>Explore Featured Work</span>
                <ArrowDown size={17} />
              </a>

              <button
                onClick={onLaunchF1}
                className="btn-f1-nitro"
                title="Ignite F1 Overdrive Sequence"
              >
                <Flame size={18} />
                <span>Engage F1 Overdrive</span>
              </button>

              {/* Social Icon Pills */}
              <div style={{ display: 'flex', gap: '0.6rem', marginLeft: '0.5rem' }}>
                <a
                  href="https://github.com/abhishek838"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.85rem', textDecoration: 'none' }}
                  title="Visit Abhishek's GitHub"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  href="https://linkedin.com/in/abhishek-kumar-4o4"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.85rem', textDecoration: 'none' }}
                  title="Connect on LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
                <a
                  href="https://www.instagram.com/abhii.abhishek_404?stkn=ZWM4eXp0cnhnZ2Zr"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.85rem', textDecoration: 'none' }}
                  title="Follow on Instagram"
                >
                  <InstagramIcon size={19} />
                </a>
              </div>
            </div>

            {/* Micro Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '1.25rem',
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  PRODUCTION READY
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: '#c084fc' }}>
                  EBSCO
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  PEER-REVIEWED AUTHOR
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  Awwwards
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  MOTION & AESTHETICS
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Full-Stack
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  REACT • NODE • MONGO
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tilt Primary Portrait (Maroon Blazer Single Photo) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="glass-panel"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '410px',
                borderRadius: '28px',
                padding: '1rem',
                transform: tiltStyle.transform,
                transition: 'transform 0.15s ease-out, box-shadow 0.25s ease',
                cursor: 'pointer',
                transformStyle: 'preserve-3d',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, rgba(20, 26, 40, 0.85) 0%, rgba(8, 12, 20, 0.9) 100%)',
                border: '1px solid var(--border-accent)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.65), 0 0 35px var(--accent-glow-subtle)',
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  aspectRatio: '3 / 4',
                  backgroundColor: '#0a0e17',
                }}
              >
                <img
                  src="./images/profile-blazer.jpg"
                  alt="Abhishek Kumar — Full-Stack & Frontend Creative Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    filter: 'contrast(1.05) saturate(1.05)',
                  }}
                />

                {/* Cyber Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(6, 9, 15, 0.85) 85%, rgba(6, 9, 15, 0.98) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Specular 3D Holographic Glare */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: `radial-gradient(circle at ${tiltStyle.glarePos.x}% ${tiltStyle.glarePos.y}%, rgba(255, 255, 255, ${tiltStyle.glarePos.opacity}) 0%, transparent 65%)`,
                    mixBlendMode: 'overlay',
                    transition: 'opacity 0.2s ease',
                  }}
                />

                {/* Overlaid Badges on Image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    zIndex: 2,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '0.2rem',
                      }}
                    >
                      EXECUTIVE PROFILE
                    </span>
                    <h2 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                      Abhishek Kumar
                    </h2>
                  </div>

                  <span
                    style={{
                      background: 'rgba(0, 0, 0, 0.65)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#ffffff',
                    }}
                  >
                    🚀 LEAD DEV
                  </span>
                </div>
              </div>

              {/* Neo-brutalist Technical Footer on Card */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '0.85rem',
                  paddingLeft: '0.35rem',
                  paddingRight: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Code2 size={14} color="var(--accent-primary)" />
                  <span>Interactive 3D Matrix</span>
                </div>
                <span style={{ color: 'var(--accent-primary)' }}>SYS::READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
