import React, { useState } from 'react';
import { BookOpen, ExternalLink, ShieldAlert, Sparkles, Terminal, ArrowUpRight, Lock, Eye, Bug, FileCode, Newspaper } from 'lucide-react';

export default function WritingBlog() {
  const [activeArticle, setActiveArticle] = useState(null);

  const blogBaseUrl = 'https://itsabhishekblog6.blogspot.com/2023/04/';

  const articles = [
    {
      id: 'data-protection',
      title: 'How To Protect Yourself & Your Data In The Digital World?',
      date: 'April 29, 2023',
      readTime: '5 min read',
      category: 'DATA PRIVACY & DEFENSE',
      icon: Lock,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/how-to-protect-yourself-your-data-in.html',
      summary:
        'A comprehensive guide to personal digital hygiene, threat surface reduction, encryption practices, password hygiene, and protecting personal identity from modern surveillance and data aggregation brokers.',
      topics: ['Data Privacy', 'Multi-Factor Auth', 'Zero-Trust Practices', 'Endpoint Defense'],
      featured: true,
    },
    {
      id: 'email-header',
      title: 'E-mail Header Analysis & Threat Forensics',
      date: 'April 28, 2023',
      readTime: '6 min read',
      category: 'FORENSICS & PROTOCOLS',
      icon: Terminal,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/e-mail-header-analysis.html',
      summary:
        'Deep technical inspection of raw RFC 5322 MIME headers. Deciphering SPF records, DKIM cryptographic signatures, DMARC alignment, Received-From IP hops, and unmasking sophisticated email spoofing attempts.',
      topics: ['SPF / DKIM / DMARC', 'MIME Protocols', 'Phishing Dissection', 'Forensic Routing'],
      featured: true,
    },
    {
      id: 'social-engineering',
      title: '9 Examples of Social Engineering Attacks (Parts 1 & 2)',
      date: 'April 27, 2023',
      readTime: '8 min read',
      category: 'HUMAN FACTOR SECURITY',
      icon: Eye,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/9-examples-of-social-engineering_27.html',
      summary:
        'Breaking down the psychology of human manipulation in cyber breaches. Analyzing real-world execution of spear phishing, baiting, pretexting, waterholing, and rogue USB drops that bypass traditional firewalls.',
      topics: ['Spear Phishing', 'Pretexting', 'Psychological Exploits', 'Threat Awareness'],
      featured: false,
    },
    {
      id: 'hacker-types',
      title: 'White Hat, Gray Hat, and Black Hat: The Ethical Spectrum',
      date: 'April 19, 2023',
      readTime: '5 min read',
      category: 'ETHICS & RED TEAMING',
      icon: ShieldAlert,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/what-are-white-hat-gray-hat-and-black.html',
      summary:
        'An examination of ethical boundaries in cybersecurity. Comparing legal penetration testing and vulnerability disclosure programs against gray-hat freelancing and malicious black-hat cybercrime syndicates.',
      topics: ['Penetration Testing', 'Bug Bounties', 'Ethical Hacking', 'Responsible Disclosure'],
      featured: false,
    },
    {
      id: 'melissa-virus',
      title: 'The Melissa Virus: A Macro Malware Retrospective',
      date: 'April 14, 2023',
      readTime: '7 min read',
      category: 'MALWARE ARCHAEOLOGY',
      icon: Bug,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/the-melissa-virus.html',
      summary:
        'Historical post-mortem of the infamous 1999 Melissa macro virus. How a Visual Basic script embedded in an innocent Word doc triggered mass Microsoft Outlook replication, paralyzing corporate networks worldwide.',
      topics: ['VBA Macros', 'Self-Replicating Code', 'Malware Forensics', 'Historic Epidemics'],
      featured: false,
    },
    {
      id: 'hybrid-war',
      title: 'Are Cyber Attacks A Hybrid System Of War In The World?',
      date: 'April 02, 2023',
      readTime: '6 min read',
      category: 'GEOPOLITICAL CYBER DOCTRINE',
      icon: Newspaper,
      url: 'https://itsabhishekblog6.blogspot.com/2023/04/are-cyber-attacks-hybrid-system-of-war.html',
      summary:
        'Analyzing fifth-domain warfare and critical infrastructure vulnerability. Exploring how state-sponsored APTs, SCADA disruptions, and offensive cyber campaigns have transformed traditional kinetic military doctrine.',
      topics: ['Hybrid Warfare', 'SCADA / ICS Security', 'Nation-State Threats', 'Geopolitics'],
      featured: true,
    },
  ];

  return (
    <section
      id="writing"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span className="glass-pill">
              <BookOpen size={13} color="var(--accent-primary)" /> CYBER DEFENSE & TECHNICAL WRITING
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Technical Insights & <span className="text-gradient">Cyber Intelligence</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            Before and alongside building full-stack applications, I actively published deep dives into cybersecurity, threat
            forensics, social engineering, and decentralized protocols on my publication blog.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <a
              href={blogBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{
                textDecoration: 'none',
                padding: '6px 16px',
                fontSize: '0.84rem',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent-primary)',
              }}
            >
              <span>Visit Official Blog (itsabhishekblog6.blogspot.com)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem',
          }}
        >
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <article
                key={article.id}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: article.featured ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Featured Badge if applicable */}
                {article.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(0, 240, 255, 0.12)',
                      border: '1px solid var(--border-accent)',
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                    }}
                  >
                    FEATURED
                  </div>
                )}

                {/* Header info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                      }}
                    >
                      {article.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {article.date} • {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.28rem',
                    lineHeight: 1.35,
                    marginBottom: '0.85rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {article.summary}
                </p>

                {/* Topic Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                  {article.topics.map((topic) => (
                    <span key={topic} className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Direct Blog Link Button */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{
                    textDecoration: 'none',
                    justifyContent: 'space-between',
                    fontSize: '0.86rem',
                    padding: '0.75rem 1.25rem',
                  }}
                >
                  <span>Read Full Article on Blog</span>
                  <ExternalLink size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
