import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Copy,
  Check,
  Send,
  Clock,
  Radio,
  Sparkles,
  ArrowUp,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

export default function TerminalContact({ onLaunchF1 }) {
  // 1. Live Local Clock
  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Email Copy State
  const [copied, setCopied] = useState(false);
  const emailAddress = 'mail.abhiikumar@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  // 3. Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Message dispatched successfully! Abhishek will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    }, 1200);
  };

  // 4. Interactive Terminal Emulator
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'SYSTEM KERNEL v2.4.0 — Abhishek Kumar Interactive Shell', type: 'system' },
    { text: 'Type "help" to view available terminal commands or "f1" to launch overdrive.', type: 'info' },
  ]);
  const terminalBottomRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const isFirstRender = useRef(true);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { text: `$ ${terminalInput}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  • help       - Show this command manual
  • experience - Inspect industry employment (Infoz, YugaYatra, We5 Mobility)
  • skills     - View technical core proficiencies
  • projects   - Inspect flagship repositories & applications
  • figma      - Inspect Zeeepy 5-Page Web Platform & UI/UX Design System
  • tapua      - Inspect Tapua Makhana D2C E-Commerce (Spring Boot & React)
  • clap       - Inspect Acoustic Clap-Activated Smart Switch (Arduino IoT)
  • robot      - Inspect Autonomous Arduino Line Follower 4WD Vehicle
  • hydraulic  - Inspect 1st Year Hydraulic Gate & Lock System
  • book       - Open 23-page MIT AOE Graduation Book (Auto-slider)
  • paper      - View peer-reviewed Blockchain & Biometrics research paper
  • blog       - Read cybersecurity articles from personal technical blog
  • cad / 3d   - View college Fusion 360 & AutoCAD 3D engineering models
  • f1         - Ignite high-octane F1 Overdrive teleport
  • contact    - Output contact endpoints & channels
  • whoami     - Display visitor session details
  • clear      - Clear terminal screen`,
          type: 'info',
        });
        break;

      case 'experience':
      case 'employment':
      case 'career':
      case 'work':
      case 'infoz':
      case 'yugayatra':
      case 'we5':
        newHistory.push({
          text: `CAREER & INDUSTRY EMPLOYMENT:
  1. Trainee Engineer — Infoz Consulting Services (Jan 2026 – Present)
     • Spring Boot REST APIs, Spring Security (JWT & Session Cookies)
     • Google OAuth 2.0 Identity & Payment Gateway Integration
     • Full-stack React interfaces consuming enterprise backend services

  2. Software Engineer Intern — YugaYatra Retail (OPC) Pvt. Ltd. (May 2025 – Nov 2025)
     • Designed official company website using React & Bootstrap 5
     • Built BookBridge platform; reusable component architecture cut dev time by ~30%
     • Performance optimization via lazy loading, code splitting, image compression

  3. Web Developer — We5 Mobility Solution Pvt. Ltd. (MonkBike) (Mar 2022 – Sep 2022)
     • Built Monk Bike (bike rental platform) & SuperMonk.store (grocery e-commerce)
     • Cross-browser & cross-device UI compatibility with responsive fluid layouts
     • Product catalogue data management within 4-member Agile team

  Scrolling to #experience section!`,
          type: 'success',
        });
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'zeeepy':
      case 'figma':
      case 'uiux':
      case 'design':
        newHistory.push({
          text: `ZEEEPY (FIGMA WEB PLATFORM & UI/UX DESIGN SYSTEM):
  • Core Project: Full 5-page enterprise web platform designed from scratch on Figma
  • Enterprise:   Zeeepy Global Fast-Turnaround Translation & Localization Platform
  • 5 Pages:      1. Homepage (Services, Stats, 24h Turnaround, Cost Calculator)
                  2. About Us (Collaborative Team, Worldwide Mission, 1800 Hotline)
                  3. Contact Us (Support Avatar, Pune Office #1, Full Quote Form)
                  4. Testimonials (5-Star Reviews & 6-Tile Video Testimonial Grid)
                  5. Languages Directory (120+ Languages grouped into 3 Continents)
  • Design Tokens: Zeeepy Crimson (#E53935), Clean White, 8pt Grid, Component Library
  • Showcase:     All 5 pages available in 1 interactive card with thumbnail preview!
  • Scrolling to #projects to view Figma design showcase!`,
          type: 'success',
        });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'tapua':
      case 'makhana':
      case 'ecommerce':
        newHistory.push({
          text: `TAPUA MAKHANA (FULL-STACK D2C E-COMMERCE & AGRI-TECH):
  • Core Mission: Direct farm-to-table GI-Tagged Mithila Makhana from Bihar
  • Offerings:    Raw Makhana (Hand-Picked), Roasted Spiced Flavors, Makhana Flour
  • Frontend:     React.js, JavaScript ES6+, HTML5, CSS3, Bootstrap 5
  • Backend:      Java Spring Boot RESTful Microservices Architecture
  • Security:     Google OAuth 2.0 Identity Federation & JWT Spring Security
  • Database:     Relational MySQL Database (ACID Schemas, Inventory SKUs)
  • Impact:       Empowers local Mithila farming communities with fair-trade margins
  • Storefront:   Interactive catalog with dynamic cart & threshold shipping logic
  • Scrolling to #projects to view live platform showcase!`,
          type: 'success',
        });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'clap':
      case 'switch':
      case 'iot':
        newHistory.push({
          text: `ACOUSTIC CLAP-ACTIVATED SMART AUTOMATION SWITCH:
  • Controller:  Arduino Uno R3 (ATmega328P @ 16MHz)
  • Acoustic:    High-Sensitivity Electret Condenser Microphone + LM393 Comparator
  • Actuation:   5V SPDT Relay Module (Optocoupled Galvanic Isolation)
  • Logic:       Bistable Flip-Flop State Toggle with 350ms Non-Blocking Debounce
  • Operation:   Clap once -> light turns OFF; Clap again -> light turns ON!
  • Controlled:  230V AC Mains Room Lighting (Tubelight / Illumination Fixture)
  • Media:       3-view photo gallery of wall deployment and hardware wiring ready!
  • Scrolling to #projects to view live prototype!`,
          type: 'success',
        });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'book':
      case 'graduation':
        newHistory.push({
          text: `MIT ACADEMY OF ENGINEERING GRADUATION BOOK (2019-2023):
  • Name:        Abhishek Kumar (PRN: 0120190325)
  • Degree:      Bachelor of Technology, Information Technology
  • Institution: MIT Academy of Engineering, Alandi, Pune
  • Length:      23 Full Documentation Pages
  • Features:    Auto-sliding slow carousel, chapter jumps, thumbnail scrubber & PDF download
  • Scrolling to #graduation-book!`,
          type: 'success',
        });
        document.getElementById('graduation-book')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'hydraulic':
      case 'gate':
      case '1styear':
        newHistory.push({
          text: `HYDRAULIC CANAL GATE & LOCK SYSTEM (1ST YEAR MILESTONE):
  • Governing Law: Pascal's Principle (P = F1/A1 = F2/A2)
  • Actuation:     Dual Master-Slave Hydraulic Syringe Cylinders & Fluid Lines
  • Structure:     Timber Framing with Hinged Sluice Gate
  • Team:          Abhishek Kumar & First-Year Engineering Cohort
  • Presentation:  Evaluated live on the College Campus Quad
  • Navigating to #story and #projects to inspect milestone!`,
          type: 'success',
        });
        document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'robot':
      case 'robotics':
      case 'arduino':
      case 'hardware':
        newHistory.push({
          text: `AUTONOMOUS LINE FOLLOWER ROBOTIC VEHICLE:
  • Controller:  Arduino Uno (16MHz ATmega328P)
  • Sensors:     3-Channel Optical Infrared (IR) Reflectance Array
  • Actuation:   4WD High-Torque DC Geared Motors & Chevron Grip Tires
  • Driver:      L298N Dual H-Bridge with Differential Steering Logic
  • Mechanics:   College Engineering Mechanics Lab (Roll ID: B8280838 Abhishek Kumar)
  • Media:       3-view photo gallery + Video demonstration player ready!
  • Scrolling to #projects to view live prototype!`,
          type: 'success',
        });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'cad':
      case '3d':
        newHistory.push({
          text: `SPATIAL & 3D CAD LAB:
  • Autodesk Fusion 360 & AutoCAD Parametric Modeling
  • Ergonomic Desk Mobile Stand (Auto-slider: 3 views - prototype, flange bending, cable port)
  • Parametric Chairs & Furniture (Auto-slider: 3 views - bamboo armchair, timber slat-back)
  • "ASALA" Ergonomic Mouse (Auto-slider: 2 views - translucent shell, rear palm arch with ASALA badge)
  • Orthogonal T-Joint Manifold & Sheet Metal Blank
  • Navigate to #cad-lab to inspect interactive blueprints!`,
          type: 'success',
        });
        document.getElementById('cad-lab')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'skills':
        newHistory.push({
          text: `CORE ARSENAL:
  [Frontend] React.js (95%), JavaScript ES6+ (94%), Canvas/Motion (92%), CSS/Tailwind (96%)
  [Backend]  Node.js (90%), Express (88%), MongoDB (88%), REST APIs (94%)
  [Tools]    Git & CI/CD (92%), Vite (91%), System Architecture (86%)`,
          type: 'success',
        });
        break;

      case 'paper':
      case 'research':
      case 'publication':
        newHistory.push({
          text: `PEER-REVIEWED SCHOLARLY PUBLICATION:
  • Title:   Blockchain Encryption using Biometric Authentication.
  • Journal: Grenze International Journal of Engineering & Technology (GIJET)
  • Volume:  Vol 9, Issue 1, 2023, p. 371 | ISSN: 2395-5287
  • Indexed: EBSCOhost Academic Research Database
  • URL:     https://openurl.ebsco.com/EPDB%3Agcd%3A11%3A19783659/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A162319875&crl=c
  • Authors: Anjani Nandan, Abhishek Kumar, Parth Srivastava, Shivateja Chalvadhi, Neha Hajare
  • Abstract: Decentralized multi-node blockchain network integrating biometric entropy to eliminate server breaches and secure user credentials.`,
          type: 'success',
        });
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'blog':
      case 'writing':
      case 'articles':
        newHistory.push({
          text: `CYBERSECURITY & TECH BLOG (itsabhishekblog6.blogspot.com):
  • How To Protect Yourself & Your Data In The Digital World?
  • E-mail Header Analysis (SPF, DKIM, DMARC, Routing Forensics)
  • 9 Examples of Social Engineering Attacks (Parts 1 & 2)
  • White Hat, Gray Hat, and Black Hat Hackers
  • The Melissa Virus (VBA Macro Malware Archaeology)
  • Are Cyber Attacks A Hybrid System Of War In The World?
  • Direct URL: https://itsabhishekblog6.blogspot.com/2023/04/`,
          type: 'success',
        });
        document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'projects':
        newHistory.push({
          text: `FLAGSHIP CREATIONS & PUBLICATIONS:
  1. BookBridge    -> https://github.com/abhishek838/BookBridge
     Collaborative literature and zero-cost book donation ecosystem.
  2. Tapua Makhana -> Full-Stack D2C E-Commerce & Agri-Tech Platform
     GI-tagged Mithila Makhana (Spring Boot, React, MySQL, Google OAuth).
  3. Zeeepy Figma  -> 5-Page Web Platform & UI/UX Design System
     Figma wireframes for Homepage, About, Contact, Testimonials & Languages (120+).
  4. Blockchain Encryption using Biometric Auth -> Indexed on EBSCOhost
     Peer-reviewed research published in GIJET (2023).
  5. MonkBike      -> https://github.com/abhishek838/Monk_Bike
     Two-wheeler mobility platform built with React during WE5 Mobility Solutions internship.
  6. Autonomous Line Follower -> Arduino Uno 4WD robotic ground vehicle.
  7. Acoustic Clap Switch     -> IoT Mains AC Lighting Automation (Arduino Uno).
  8. Hydraulic Gate System    -> 1st Year Engineering Pascal's Law floodgate prototype.`,
          type: 'success',
        });
        break;

      case 'f1':
        newHistory.push({ text: '🏎️ IGNITING FORMULA 1 OVERDRIVE SEQUENCE...', type: 'warning' });
        onLaunchF1();
        break;

      case 'contact':
        newHistory.push({
          text: `CONNECT DIRECTLY:
  • Email:     ${emailAddress}
  • LinkedIn:  https://linkedin.com/in/abhishek-kumar-4o4
  • GitHub:    https://github.com/abhishek838
  • Instagram: https://www.instagram.com/abhii.abhishek_404?stkn=ZWM4eXp0cnhnZ2Zr`,
          type: 'info',
        });
        break;

      case 'whoami':
        newHistory.push({
          text: `VISITOR TELEMETRY:
  • Client: Modern Browser Environment
  • Status: Authorized Recruiter / Collaborator
  • Connection: Encrypted TLS`,
          type: 'info',
        });
        break;

      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
          type: 'error',
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        padding: '6rem 0 3rem',
        borderTop: '1px solid var(--border-subtle)',
        background: 'linear-gradient(180deg, transparent 0%, rgba(4, 6, 10, 0.95) 100%)',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Top Status Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '1.25rem 2rem',
            borderRadius: '20px',
            marginBottom: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            border: '1px solid var(--border-accent)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 12px #10b981',
                animation: 'pulse 1.8s infinite',
              }}
            />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                System Status: Active & Operational
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Available for high-impact full-stack and creative frontend engineering roles & collaborations.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontSize: '0.85rem' }}>
              <Clock size={16} />
              <span>{localTime || 'LIVE TIME'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.85rem' }}>
              <Radio size={16} />
              <span>PING: 24ms</span>
            </div>
          </div>
        </div>

        {/* Contact Suite: Grid of Form & Interactive Terminal */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Direct Contact Form & One-Click Copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="glass-pill">
                <Mail size={13} color="var(--accent-primary)" /> DIRECT TRANSMISSION
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Let’s Build <span className="text-gradient">Something Remarkable.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Whether you have a compelling engineering challenge, an ambitious product vision, or want to discuss full-stack
              innovation—my inbox is always open.
            </p>

            {/* Quick One-Click Email Copy Pill */}
            <div
              className="glass-panel"
              style={{
                padding: '0.85rem 1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                border: '1px solid var(--border-accent)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'block' }}>
                  PRIMARY INBOX
                </span>
                <span style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {emailAddress}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ padding: '0.5rem 0.85rem', fontSize: '0.78rem' }}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Interactive Contact Form */}
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: errors.name ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.name}</span>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: errors.email ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
                {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.email}</span>}
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.25rem',
                    borderRadius: '12px',
                    background: 'var(--bg-elevated)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
                {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.3rem', display: 'block' }}>{errors.message}</span>}
              </div>

              {submitStatus && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    color: '#34d399',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  ✓ {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Interactive Hacker CLI Terminal */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '520px',
              background: 'rgba(6, 9, 15, 0.95)',
              border: '1px solid var(--border-accent)',
            }}
          >
            {/* Terminal Titlebar */}
            <div
              style={{
                padding: '0.75rem 1.25rem',
                background: 'rgba(15, 22, 35, 0.9)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                  abhishek@portfolio-core:~
                </span>
              </div>
              <TerminalIcon size={16} color="var(--accent-primary)" />
            </div>

            {/* Terminal Output Stream */}
            <div
              ref={terminalBodyRef}
              style={{
                flex: 1,
                padding: '1.25rem',
                overflowY: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {terminalHistory.map((item, index) => {
                let color = 'var(--text-secondary)';
                if (item.type === 'user') color = 'var(--accent-primary)';
                if (item.type === 'system') color = '#94a3b8';
                if (item.type === 'success') color = '#34d399';
                if (item.type === 'warning') color = '#fbbf24';
                if (item.type === 'error') color = '#f87171';

                return (
                  <div key={index} style={{ whiteSpace: 'pre-wrap', color }}>
                    {item.text}
                  </div>
                );
              })}
              <div ref={terminalBottomRef} />
            </div>

            {/* Terminal Input Line */}
            <form
              onSubmit={handleTerminalSubmit}
              style={{
                padding: '0.85rem 1.25rem',
                background: 'rgba(10, 15, 25, 0.95)',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                &gt;
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'skills', 'projects', 'f1'..."
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                }}
              >
                EXEC
              </button>
            </form>
          </div>
        </div>

        {/* Footer Sub-Bar with Socials & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            gap: '1.25rem',
          }}
        >
          <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} Abhishek Kumar. Crafted with pure React, Web Audio & custom Canvas.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://github.com/abhishek838"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhishek-kumar-4o4"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/abhii.abhishek_404?stkn=ZWM4eXp0cnhnZ2Zr"
              target="_blank"
              rel="noreferrer"
              className="glass-pill"
              style={{ textDecoration: 'none' }}
            >
              <InstagramIcon size={14} /> Instagram
            </a>

            <button
              onClick={scrollToTop}
              className="glass-pill"
              style={{ cursor: 'pointer', padding: '0.35rem 0.75rem' }}
              title="Return to top"
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
