import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Code2,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function Experience() {
  const [activeCompany, setActiveCompany] = useState('all');

  const experiences = [
    {
      id: 'infoz',
      role: 'Trainee Engineer',
      company: 'Infoz Consulting Services',
      type: 'Full-Time Engineering',
      period: 'Jan 2026 – Present',
      status: 'Current Role',
      isPresent: true,
      location: 'Pune, India',
      accentColor: '#10b981', // Emerald
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(0, 240, 255, 0.15) 100%)',
      summary:
        'Developing high-performance enterprise RESTful APIs, securing distributed microservices with Spring Security, integrating Google OAuth identity and payment gateways, and building responsive React interfaces across the full stack.',
      bullets: [
        'Developing and maintaining REST APIs using Spring Boot to power core application features and backend microservices.',
        'Implemented Spring Security with JWT and session cookie–based authentication to robustly secure application endpoints.',
        'Integrated Google OAuth authentication and a third-party payment gateway to enable secure sign-in and seamless transactions.',
        'Built frontend interfaces using React.js to consume and display backend APIs, contributing across the full stack with clean architectural patterns.',
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT Auth',
        'Session Cookies',
        'Google OAuth 2.0',
        'Payment Gateway',
        'React.js',
        'REST APIs',
        'Microservices',
      ],
      impactStats: [
        { label: 'STACK', val: 'Spring Boot + React' },
        { label: 'AUTH', val: 'OAuth 2.0 + JWT' },
        { label: 'STATUS', val: 'Active Contributor' },
      ],
    },
    {
      id: 'yugayatra',
      role: 'Software Engineer Intern',
      company: 'YugaYatra Retail (OPC) Pvt. Ltd.',
      type: 'Engineering Internship',
      period: 'May 2025 – Nov 2025',
      status: 'Completed',
      isPresent: false,
      location: 'India',
      accentColor: '#00f0ff', // Cyber Cyan
      gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
      summary:
        'Designed and developed the official corporate web presence, architected the flagship BookBridge literature donation platform with reusable modular components reducing development time by ~30%, and accelerated client-side performance in Agile sprints.',
      bullets: [
        "Designed and developed the company's official website using React.js and Bootstrap, delivering a fully responsive layout across desktop, tablet, and mobile screens.",
        'Built BookBridge, a web platform for book donations and free access for underprivileged users; architected reusable React components that reduced development time by ~30%.',
        'Improved frontend performance through lazy loading, code splitting, and image compression pipelines, boosting Core Web Vitals.',
        'Collaborated in Agile sprints with daily stand-ups, iterative sprint planning, and peer code reviews to ensure production-grade code quality.',
      ],
      skills: [
        'React.js',
        'Bootstrap 5',
        'BookBridge Platform',
        'Reusable Component Architecture',
        'Lazy Loading & Code Splitting',
        'Performance Optimization',
        'Agile Sprints',
        'Code Reviews',
      ],
      impactStats: [
        { label: 'EFFICIENCY', val: '~30% Faster Dev' },
        { label: 'PRODUCT', val: 'BookBridge Platform' },
        { label: 'VELOCITY', val: 'Agile Sprints' },
      ],
    },
    {
      id: 'we5',
      role: 'Web Developer Intern',
      company: 'We5 Mobility Solution Pvt. Ltd. (MonkBike)',
      type: 'Mobility & Fleet Internship',
      period: 'Mar 2022 – Sep 2022',
      status: 'Completed',
      isPresent: false,
      location: 'Pune, India',
      accentColor: '#f59e0b', // Amber
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%)',
      summary:
        'Engineered MonkBike (two-wheeler rental platform) and SuperMonk.store (grocery e-commerce application) using React.js and Bootstrap, ensuring cross-browser compatibility and managing product catalog schemas.',
      bullets: [
        'Developed Monk Bike, a bike rental platform, and SuperMonk.store, a grocery e-commerce app, using React.js, Bootstrap, and REST APIs.',
        'Ensured cross-browser and cross-device UI compatibility across both production applications, implementing responsive layouts and interactive UI elements.',
        'Managed product catalogue data and contributed within a 4-member Agile team through sprint planning, feature development, and code reviews.',
      ],
      skills: [
        'React.js',
        'Bootstrap',
        'REST APIs',
        'MonkBike Platform',
        'SuperMonk.store App',
        'Cross-Browser Testing',
        'Catalogue Data Schemas',
        'Agile Teamwork',
      ],
      impactStats: [
        { label: 'APPS DELIVERED', val: '2 Production Apps' },
        { label: 'TEAM SIZE', val: '4-Member Agile' },
        { label: 'PLATFORM', val: 'Fleet & E-Commerce' },
      ],
    },
  ];

  const filtered =
    activeCompany === 'all'
      ? experiences
      : experiences.filter((exp) => exp.id === activeCompany);

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span className="glass-pill">
              <Briefcase size={13} color="var(--accent-primary)" /> CAREER & INDUSTRY EMPLOYMENT
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Work <span className="text-gradient">Experience</span> & Roles
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Production engineering spanning full-stack Spring Boot REST microservices, Google OAuth 2.0 authentication,
            secure payment pipelines, and high-performance React web platforms.
          </p>
        </div>

        {/* Company Quick Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          <button
            onClick={() => setActiveCompany('all')}
            style={{
              background: activeCompany === 'all' ? 'var(--accent-primary)' : 'var(--bg-elevated)',
              color: activeCompany === 'all' ? '#050508' : 'var(--text-secondary)',
              border: activeCompany === 'all' ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
          >
            All Roles ({experiences.length})
          </button>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveCompany(exp.id)}
              style={{
                background: activeCompany === exp.id ? exp.accentColor : 'var(--bg-elevated)',
                color: activeCompany === exp.id ? '#050508' : 'var(--text-secondary)',
                border: activeCompany === exp.id ? `1px solid ${exp.accentColor}` : '1px solid var(--border-subtle)',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                transition: 'all 0.25s ease',
              }}
            >
              {exp.isPresent && (
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: activeCompany === exp.id ? '#050508' : '#10b981',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
              )}
              <span>{exp.company.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Vertical Interactive Career Timeline */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {/* Subtle central/side guide line */}
          <div
            style={{
              position: 'absolute',
              left: '28px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-primary) 0%, rgba(139, 92, 246, 0.5) 50%, rgba(245, 158, 11, 0.3) 100%)',
              opacity: 0.35,
              display: 'block',
            }}
          />

          {filtered.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                display: 'flex',
                gap: '1.75rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Timeline Glowing Node */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: `2px solid ${exp.accentColor}`,
                  boxShadow: `0 0 20px ${exp.accentColor}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '4px',
                }}
              >
                <Building2 size={24} color={exp.accentColor} />
                {exp.isPresent && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-3px',
                      right: '-3px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#10b981',
                      border: '2px solid var(--bg-card)',
                      boxShadow: '0 0 10px #10b981',
                    }}
                    title="Active Employment"
                  />
                )}
              </div>

              {/* Experience Card */}
              <div
                className="glass-panel"
                style={{
                  flex: 1,
                  borderRadius: '24px',
                  padding: '2rem 2.25rem',
                  border: `1px solid ${exp.accentColor}40`,
                  background: 'var(--bg-card)',
                  boxShadow: `0 12px 35px rgba(0, 0, 0, 0.65), 0 0 25px ${exp.accentColor}15`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle top accent gradient line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${exp.accentColor} 0%, transparent 80%)`,
                  }}
                />

                {/* Header Row: Role, Company, Period & Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                      <h3
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          fontFamily: 'var(--font-heading)',
                          margin: 0,
                        }}
                      >
                        {exp.role}
                      </h3>
                      {exp.isPresent && (
                        <span
                          style={{
                            background: 'rgba(16, 185, 129, 0.15)',
                            color: '#34d399',
                            border: '1px solid rgba(16, 185, 129, 0.4)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: '#10b981',
                              boxShadow: '0 0 6px #10b981',
                            }}
                          />
                          PRESENT
                        </span>
                      )}
                    </div>

                    <div
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: exp.accentColor,
                        fontFamily: 'var(--font-heading)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                      }}
                    >
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Period & Tenure Pill */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.35rem',
                    }}
                  >
                    <div
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Calendar size={13} color="var(--accent-primary)" />
                      <span>{exp.period}</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Brief Narrative Overview */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    marginBottom: '1.35rem',
                  }}
                >
                  {exp.summary}
                </p>

                {/* Impact Metric Chips */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '0.65rem',
                    marginBottom: '1.4rem',
                  }}
                >
                  {exp.impactStats.map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '12px',
                        padding: '0.55rem 0.85rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <div style={{ fontSize: '0.65rem', color: exp.accentColor, fontWeight: 700, letterSpacing: '0.05em' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff', marginTop: '2px' }}>
                        {stat.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points of Core Responsibilities & Achievements */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        lineHeight: 1.55,
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color={exp.accentColor}
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    TECHNOLOGIES & PLATFORMS:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '9999px',
                          padding: '3px 10px',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
