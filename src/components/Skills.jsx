import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  GitBranch,
  Layers,
  Zap,
  Globe,
  ShieldCheck,
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Arsenal' },
    { id: 'frontend', label: 'Frontend & Creative' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Data & Architecture' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const skillsData = [
    {
      id: 'react',
      name: 'React.js / Next.js',
      category: 'frontend',
      level: 95,
      icon: Code,
      color: '#00f0ff',
      details: 'Deep mastery of Concurrent Mode, custom hooks, memoization, Server Components, and atomic design systems.',
      experience: '4+ Years',
      context: 'Core engine behind BookBridge and interactive portfolio architectures.',
    },
    {
      id: 'js-ts',
      name: 'JavaScript (ES6+) & TypeScript',
      category: 'frontend',
      level: 94,
      icon: Zap,
      color: '#fbbf24',
      details: 'Async event loop, functional programming, strict typing, closures, and high-performance DOM manipulation.',
      experience: '4+ Years',
      context: 'Clean architectural patterns powering client state machines and animations.',
    },
    {
      id: 'node',
      name: 'Node.js & Express',
      category: 'backend',
      level: 90,
      icon: Server,
      color: '#22c55e',
      details: 'Non-blocking I/O, RESTful controller patterns, middleware pipelines, JWT auth, and rate-limiting.',
      experience: '3+ Years',
      context: 'Backend backbone for BookBridge and custom services.',
    },
    {
      id: 'springboot',
      name: 'Java & Spring Boot',
      category: 'backend',
      level: 91,
      icon: Server,
      color: '#6db33f',
      details: 'RESTful microservices, Spring Security, Spring Data JPA, Hibernate ORM, and Google OAuth 2.0 integration.',
      experience: '3+ Years',
      context: 'Backend core powering the Tapua Makhana D2C e-commerce platform.',
    },
    {
      id: 'mongo',
      name: 'MongoDB & Mongoose',
      category: 'database',
      level: 88,
      icon: Database,
      color: '#10b981',
      details: 'Document schema design, indexing strategies, aggregation pipelines, and ACID transactions.',
      experience: '3+ Years',
      context: 'High-throughput data storage for community and transactional workflows.',
    },
    {
      id: 'mysql',
      name: 'MySQL & Relational SQL',
      category: 'database',
      level: 90,
      icon: Database,
      color: '#00758f',
      details: 'Relational data modeling, complex joins, indexing strategies, ACID transactional integrity, and normalized schemas.',
      experience: '3+ Years',
      context: 'High-integrity transactional catalog & inventory database for Tapua Makhana.',
    },
    {
      id: 'canvas-motion',
      name: 'HTML5 Canvas & Motion Design',
      category: 'frontend',
      level: 92,
      icon: Sparkles,
      color: '#a855f7',
      details: '60fps procedural particle engines, Web Audio API synthesis, 3D CSS math, and mathematical spring physics.',
      experience: '3+ Years',
      context: 'F1 Nitro Overdrive, generative audio synth, and particle canvases.',
    },
    {
      id: 'css-tailwind',
      name: 'Modern CSS3 & Vanilla Styling',
      category: 'frontend',
      level: 96,
      icon: Layout,
      color: '#38bdf8',
      details: 'CSS Grid, Flexbox, Custom Variables, glassmorphism, responsive breakpoints, and GPU-accelerated transforms.',
      experience: '4+ Years',
      context: 'Fluid design systems supporting tri-mode transitions.',
    },
    {
      id: 'rest-api',
      name: 'RESTful API Engineering',
      category: 'backend',
      level: 94,
      icon: Globe,
      color: '#f97316',
      details: 'Stateless endpoints, sanitization, OpenAPI specification, error handling matrices, and HTTP caching.',
      experience: '3+ Years',
      context: 'Powering interoperable service layers across projects.',
    },
    {
      id: 'git',
      name: 'Git & Version Control',
      category: 'tools',
      level: 92,
      icon: GitBranch,
      color: '#ef4444',
      details: 'Branching models, interactive rebasing, merge conflicts resolution, CI/CD automated deployment workflows.',
      experience: '4+ Years',
      context: 'Robust daily development and open-source contribution flows.',
    },
    {
      id: 'system-arch',
      name: 'System Design & Architecture',
      category: 'database',
      level: 86,
      icon: Layers,
      color: '#8b5cf6',
      details: 'Microservice vs monolithic trade-offs, state synchronization, caching layers, and decoupled design patterns.',
      experience: '2+ Years',
      context: 'End-to-end planning of scalable web applications.',
    },
    {
      id: 'tools-devops',
      name: 'Vite, Webpack & Tooling',
      category: 'tools',
      level: 91,
      icon: Terminal,
      color: '#06b6d4',
      details: 'Modern bundler configurations, tree-shaking, code-splitting, environment setups, and Lighthouse optimization.',
      experience: '3+ Years',
      context: 'Ultra-fast HMR and production bundle optimization.',
    },
    {
      id: 'robotics-arduino',
      name: 'Arduino & Embedded Robotics',
      category: 'tools',
      level: 90,
      icon: Cpu,
      color: '#00f0ff',
      details: 'ATmega328P microcontrollers, optical IR reflectance sensing, L298N H-Bridge actuation, differential drive algorithms.',
      experience: 'College Engineering',
      context: 'Autonomous 4WD line-following robotics and mechatronics prototyping.',
    },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
            <span className="glass-pill">
              <Sparkles size={13} color="var(--accent-primary)" /> COMPETENCIES & PROFICIENCY
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Technical <span className="text-gradient">Arsenal</span> & Mastery
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A battle-tested stack honed across real production builds, performance audits, and high-impact web ecosystems.
          </p>
        </div>

        {/* Filter Badges Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                background: activeTab === cat.id ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                color: activeTab === cat.id ? '#050508' : 'var(--text-secondary)',
                border: activeTab === cat.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                className="glass-panel"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  padding: '1.5rem',
                  borderRadius: '20px',
                  border: isHovered ? `1px solid ${skill.color}` : '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  boxShadow: isHovered ? `0 15px 35px rgba(0,0,0,0.5), 0 0 20px ${skill.color}33` : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${skill.color}44`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: skill.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', margin: 0 }}>
                        {skill.name}
                      </h4>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: skill.color,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Proficiency Meter Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                      borderRadius: '3px',
                      boxShadow: `0 0 10px ${skill.color}`,
                      transition: 'width 0.8s ease-out',
                    }}
                  />
                </div>

                {/* Brief description */}
                <p
                  style={{
                    marginTop: '0.9rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {skill.context}
                </p>

                {/* Holographic Tooltip on Hover */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 12px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '280px',
                      background: 'rgba(8, 12, 20, 0.95)',
                      backdropFilter: 'blur(16px)',
                      border: `1px solid ${skill.color}`,
                      borderRadius: '14px',
                      padding: '1rem',
                      boxShadow: `0 15px 40px rgba(0,0,0,0.8), 0 0 20px ${skill.color}44`,
                      zIndex: 200,
                      pointerEvents: 'none',
                      animation: 'tooltipPop 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: skill.color,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '0.35rem',
                      }}
                    >
                      HOLOGRAPHIC TELEMETRY
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: 1.5, margin: 0 }}>
                      {skill.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes tooltipPop {
          from { opacity: 0; transform: translate(-50%, 6px) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, 0) scale(1); }
        }
      `}</style>
    </section>
  );
}
