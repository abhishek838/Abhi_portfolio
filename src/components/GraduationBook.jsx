import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Download,
  Maximize2,
  X,
  Compass,
  FileText,
  GraduationCap,
  Layers,
  Award,
} from 'lucide-react';

export default function GraduationBook() {
  const [currentPage, setCurrentPage] = useState(0); // 0-indexed (0 to 22 for 23 pages)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideSpeed, setSlideSpeed] = useState(5500); // 5.5s default slow slide
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const filmstripRef = useRef(null);

  // 23 Pages of Abhishek Kumar's MIT Academy of Engineering Graduation Book
  const pages = [
    {
      num: 1,
      title: 'Cover Page: Graduation Book (2019–2023)',
      category: 'OFFICIAL GRADUATION BOOK',
      desc: 'MIT Academy of Engineering, Pune (Affiliated to Savitribai Phule Pune University) • Abhishek Kumar (PRN: 0120190325).',
      tag: 'B.Tech IT 2019-2023',
    },
    {
      num: 2,
      title: 'Copyright & Publication Credentials',
      category: 'STUDENT DOCUMENTATION',
      desc: 'Department of Information Technology, MIT Academy of Engineering, Alandi, Pune. Contact: Abhishekkumarraj838@gmail.com.',
      tag: 'Academic Record',
    },
    {
      num: 3,
      title: 'Table of Contents & Milestone Index',
      category: 'CURRICULAR ROADMAP',
      desc: 'Directory of academic milestones: Minor & Major Projects, Mechanical/Civil Prototyping, Computer Vision, Internships & Certifications.',
      tag: 'Index & Syllabus',
    },
    {
      num: 4,
      title: 'Introduction & About Abhishek Kumar',
      category: 'ENGINEER PROFILE',
      desc: 'Final year B.Tech student in Information Technology, cybersecurity enthusiast, UI designer, football player, and athlete.',
      tag: 'Developer Profile',
    },
    {
      num: 5,
      title: 'Minor Project: Ayurveda Pharma Guide',
      category: 'HEALTHCARE MOBILE APP',
      desc: 'Pandemic home-medicine platform providing natural Ayurvedic solutions (clove, cardamom) during COVID-19 lockdowns.',
      tag: 'Healthcare Mobile App',
    },
    {
      num: 6,
      title: 'Ayurveda App: UI & Implementation',
      category: 'MOBILE APP INTERFACE',
      desc: 'Full mobile screen wireframes, sign-up flows, home remedy catalog, video tutorials, and interactive ingredient preparation.',
      tag: 'Mobile UI/UX Design',
    },
    {
      num: 7,
      title: 'HCI Project: Modifying College ERP Interface',
      category: 'HUMAN-COMPUTER INTERACTION',
      desc: 'Problem statement and scope: Building an accessible, fault-tolerant web prototype for jury scheduling, rubric grading, and results.',
      tag: 'HCI System Architecture',
    },
    {
      num: 8,
      title: 'ERP Interface: Student & User Dashboard',
      category: 'ENTERPRISE WEB PROTOTYPE',
      desc: 'Desktop and laptop interfaces for student fee status, exam hall tickets, timetable scheduling, announcements, and profile settings.',
      tag: 'ERP User Experience',
    },
    {
      num: 9,
      title: 'ERP Interface: Online Payment & Receipts',
      category: 'FINANCIAL WORKFLOW',
      desc: 'Fee clearance portal, automated receipt generation, transaction acknowledgment slips, and department announcement boards.',
      tag: 'Transaction Flow',
    },
    {
      num: 10,
      title: 'Major Project: Blockchain & Biometric Encryption',
      category: 'PEER-REVIEWED RESEARCH',
      desc: 'Decentralized cloud security architecture replacing fragile Third-Party Auditors (TPA) with biometric minutiae hashing consensus.',
      tag: 'Blockchain & Cryptography',
    },
    {
      num: 11,
      title: 'Academic Project Guide: Mrs. Neha Hajare',
      category: 'FACULTY MENTORSHIP',
      desc: 'Tribute to mentor Mrs. Neha Hajare (11+ years academic excellence) for research guidance leading to the GIJET EBSCOhost publication.',
      tag: 'Faculty Mentorship',
    },
    {
      num: 12,
      title: 'Blockchain Prototype: Mobile Verification Nodes',
      category: 'DECENTRALIZED ARCHITECTURE',
      desc: 'Mobile application interface showing Genesis Block creation, cryptographic hash linking, and tamper-evident message ledger.',
      tag: 'Distributed Ledger',
    },
    {
      num: 13,
      title: 'Mechanical Prototyping: "ASALA" Ergonomic Mouse',
      category: '3D CAD & FUSION 360',
      desc: 'CAD 3D parametric surface modeling in Autodesk Fusion 360: Translucent shell, scroll assembly, and signature red "ASALA" badge.',
      tag: 'Fusion 360 3D Model',
    },
    {
      num: 14,
      title: 'Civil Prototyping: Bamboo Ergonomic Chair & T-Joint',
      category: 'PARAMETRIC FURNITURE',
      desc: 'AutoCAD dimensioning and physical bamboo modeling of ergonomic chairs, orthogonal tubular manifolds, and joint tolerances.',
      tag: 'AutoCAD Civil CAD',
    },
    {
      num: 15,
      title: 'Computer Vision: Yoga Pose AI Detector',
      category: 'APPLIED AI & OPENCV',
      desc: 'Real-time skeletal landmark tracking to detect and evaluate yoga postures (Padmasana, Pranam Asana) via Google Meet camera feed.',
      tag: 'Computer Vision AI',
    },
    {
      num: 16,
      title: 'ETT Project: Hydraulic Door Locking System',
      category: 'FLUID POWER ENGINEERING',
      desc: 'Working hydraulic gate/lock prototype built on Pascal’s Principle, presented by Abhishek Kumar and team on the campus lawn.',
      tag: 'Hydraulic Mechanics',
    },
    {
      num: 17,
      title: 'Industry Internships: We5 Mobility & VIEH Group',
      category: 'PROFESSIONAL EXPERIENCE',
      desc: 'Front-End Web Development at We5 Mobility Solution (2021) and Image Steganography / Security Projects at VIEH Group (2022).',
      tag: 'Industry Experience',
    },
    {
      num: 18,
      title: 'University of Michigan: Python for Everybody',
      category: 'GLOBAL CERTIFICATION',
      desc: 'Coursera verified certification from University of Michigan covering data structures, network programming, and algorithmic Python.',
      tag: 'Python Certification',
    },
    {
      num: 19,
      title: 'AWS Academy Graduate: Cloud Architecting',
      category: 'CLOUD INFRASTRUCTURE',
      desc: '40 hours completed coursework in scalable AWS architectures, VPC design, EC2 auto-scaling, and S3 distributed storage.',
      tag: 'AWS Cloud Architect',
    },
    {
      num: 20,
      title: 'Capstone Blogs: Cybersecurity Trends & Analysis',
      category: 'TECHNICAL PUBLICATIONS',
      desc: 'In-depth security journalism: WannaCry Ransomware analysis, largest cyberattacks in history, and enterprise threat vectors.',
      tag: 'Cybersecurity Blog',
    },
    {
      num: 21,
      title: 'Campus Leadership: TEDxMITAOE & Nakshatra',
      category: 'EVENTS & CONVENING',
      desc: 'Event organizing committee for TEDxMITAOE and annual cultural Nakshatra festival, celebrating intellectual and creative discourse.',
      tag: 'TEDx Leadership',
    },
    {
      num: 22,
      title: 'Co-Curricular Life: Brotherhood & College Memories',
      category: 'CAMPUS CAMARADERIE',
      desc: 'Unforgettable moments: Cultural celebrations, trekking expeditions, horse riding, and lifelong friendship with the engineering cohort.',
      tag: 'Campus Brotherhood',
    },
    {
      num: 23,
      title: 'Graduation Tribute: Thank You to Mentors & Peers',
      category: 'VALEDICTORY TRIBUTE',
      desc: 'Heartfelt thank you to college teachers, mentors, family, and peers for imparting knowledge and strength throughout the journey.',
      tag: 'Graduation Valedictory',
    },
  ];

  const totalPages = pages.length;
  const currentInfo = pages[currentPage];

  // Only auto-slide when graduation book is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Activates only when user scrolls to this section
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide effect (slowly advances every slideSpeed ms ONLY when user is viewing this section)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || !isInView) return;

    setProgress(0);
    const stepTime = 50;
    const increment = (stepTime / slideSpeed) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + increment;
      });
    }, stepTime);

    timerRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setProgress(0);
    }, slideSpeed);

    return () => {
      clearInterval(timerRef.current);
      clearInterval(progressIntervalRef.current);
    };
  }, [isAutoPlaying, isHovered, isInView, slideSpeed, currentPage, totalPages]);

  // Scroll active thumbnail horizontally inside its container WITHOUT affecting page/window scroll
  useEffect(() => {
    if (filmstripRef.current) {
      const container = filmstripRef.current;
      const activeThumb = container.children[currentPage];
      if (activeThumb) {
        const targetLeft =
          activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2;
        container.scrollTo({ left: targetLeft, behavior: 'smooth' });
      }
    }
  }, [currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setProgress(0);
  };

  const jumpToPage = (index) => {
    setCurrentPage(index);
    setProgress(0);
  };

  return (
    <section
      id="graduation-book"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        zIndex: 10,
        backgroundColor: 'rgba(5, 7, 13, 0.45)',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span className="glass-pill">
              <GraduationCap size={14} color="var(--accent-primary)" /> OFFICIAL ACADEMIC DOCUMENTATION
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            MIT AOE <span className="text-gradient">Graduation Book</span> (2019–2023)
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            The official 23-page graduation book documenting my 4-year journey at <strong>MIT Academy of Engineering</strong>,
            spanning engineering prototypes, HCI redesigns, peer-reviewed blockchain research, internships, and cohort milestones.
          </p>
        </div>

        {/* Quick Chapter Navigation Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {[
            { label: '🎓 Cover (P1)', idx: 0 },
            { label: '👤 About Me (P4)', idx: 3 },
            { label: '🌿 Ayurveda App (P5)', idx: 4 },
            { label: '💻 ERP Interface (P7)', idx: 6 },
            { label: '⛓️ Blockchain Research (P10)', idx: 9 },
            { label: '🖱️ ASALA Mouse (P13)', idx: 12 },
            { label: '🪑 Bamboo Chair (P14)', idx: 13 },
            { label: '👁️ Yoga AI Vision (P15)', idx: 14 },
            { label: '💧 Hydraulic Lock (P16)', idx: 15 },
            { label: '📜 Internships & AWS (P17)', idx: 16 },
            { label: '✍️ Capstone Blogs (P20)', idx: 19 },
            { label: '🌟 Campus Life (P21)', idx: 20 },
            { label: '🙏 Thank You (P23)', idx: 22 },
          ].map((item) => (
            <button
              key={item.idx}
              onClick={() => jumpToPage(item.idx)}
              style={{
                background: currentPage === item.idx ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                color: currentPage === item.idx ? '#050508' : 'var(--text-secondary)',
                border: currentPage === item.idx ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Main Book Stage Viewer */}
        <div
          className="glass-panel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: '26px',
            overflow: 'hidden',
            border: '1px solid var(--border-accent)',
            background: 'var(--bg-card)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px var(--accent-glow-subtle)',
            position: 'relative',
          }}
        >
          {/* Top Control Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 1.75rem',
              background: 'rgba(8, 12, 20, 0.92)',
              borderBottom: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            {/* Left Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  background: 'rgba(0, 240, 255, 0.12)',
                  border: '1px solid var(--accent-primary)',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                }}
              >
                PAGE {currentPage + 1 < 10 ? `0${currentPage + 1}` : currentPage + 1} OF {totalPages}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent-secondary)',
                  display: 'none',
                }}
                className="desktop-only-badge"
              >
                ● {currentInfo.tag}
              </span>
            </div>

            {/* Middle Play/Pause & Speed Controller */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: isAutoPlaying ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                  border: isAutoPlaying ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                  color: isAutoPlaying ? 'var(--accent-primary)' : '#ffffff',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontWeight: 600,
                }}
                title={isAutoPlaying ? 'Pause automatic sliding' : 'Start automatic sliding'}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause size={13} />
                    <span>{!isInView ? 'AUTO-SLIDE (WHEN IN VIEW)' : isHovered ? 'PAUSED (HOVER)' : 'AUTO-SLIDING SLOWLY'}</span>
                  </>
                ) : (
                  <>
                    <Play size={13} />
                    <span>RESUME AUTO-SLIDE</span>
                  </>
                )}
              </button>

              {/* Speed Switchers */}
              <div style={{ display: 'flex', gap: '3px', background: 'rgba(0,0,0,0.5)', padding: '2px', borderRadius: '9999px' }}>
                {[
                  { label: '6s (Slow)', val: 6000 },
                  { label: '4s', val: 4000 },
                  { label: '2.5s', val: 2500 },
                ].map((s) => (
                  <button
                    key={s.val}
                    onClick={() => setSlideSpeed(s.val)}
                    style={{
                      background: slideSpeed === s.val ? 'var(--accent-primary)' : 'transparent',
                      color: slideSpeed === s.val ? '#050508' : 'var(--text-muted)',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '2px 8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Buttons: Lightbox & PDF Download */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => setIsFullscreen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                title="View Fullscreen Lightbox"
              >
                <Maximize2 size={15} />
              </button>

              <a
                href="./documents/Abhishek_Kumar_Graduation_Book.pdf"
                download="Abhishek_Kumar_Graduation_Book_MIT_AOE.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                title="Download 23-Page MIT AOE Graduation Book PDF"
              >
                <Download size={13} color="var(--accent-primary)" />
                <span>PDF BOOK</span>
              </a>
            </div>
          </div>

          {/* Progress Loading Bar */}
          <div
            style={{
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${autoPlayProgress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                transition: 'width 0.08s linear',
              }}
            />
          </div>

          {/* Main Book Page Viewport */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '480px',
              maxHeight: '620px',
              backgroundColor: '#070a12',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-in',
              overflow: 'hidden',
            }}
            onClick={() => setIsFullscreen(true)}
          >
            <img
              key={currentPage}
              src={`./images/graduation-book/page-${currentPage + 1}.jpg`}
              alt={currentInfo.title}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '600px',
                objectFit: 'contain',
                display: 'block',
                animation: 'fadeInPage 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            {/* Left & Right Arrow Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(5, 8, 15, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-accent)',
                color: '#ffffff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 20,
              }}
              title="Previous Page"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(5, 8, 15, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-accent)',
                color: '#ffffff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 20,
              }}
              title="Next Page"
            >
              <ChevronRight size={22} />
            </button>

            {/* Click to zoom indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-accent)',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                padding: '4px 10px',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                pointerEvents: 'none',
              }}
            >
              <Maximize2 size={12} />
              <span>CLICK TO EXPAND FULLSCREEN</span>
            </div>
          </div>

          {/* Page Details Footer Strip */}
          <div
            style={{
              padding: '1.5rem 2rem',
              background: 'rgba(8, 12, 20, 0.98)',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                  <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                    {currentInfo.category}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    PAGE {currentPage + 1} OF 23
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '0.2rem 0 0.35rem' }}>
                  {currentInfo.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0, lineHeight: 1.55 }}>
                  {currentInfo.desc}
                </p>
              </div>

              {/* Slider Scrubbing Range Input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '220px' }}>
                <input
                  type="range"
                  min="0"
                  max={totalPages - 1}
                  value={currentPage}
                  onChange={(e) => jumpToPage(Number(e.target.value))}
                  style={{
                    flex: 1,
                    accentColor: 'var(--accent-primary)',
                    cursor: 'pointer',
                  }}
                  title="Scrub through pages"
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {currentPage + 1}/{totalPages}
                </span>
              </div>
            </div>

            {/* 23-Page Mini Thumbnail Filmstrip */}
            <div
              ref={filmstripRef}
              style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem',
                scrollbarWidth: 'thin',
              }}
            >
              {pages.map((p, idx) => (
                <button
                  key={p.num}
                  onClick={() => jumpToPage(idx)}
                  style={{
                    flexShrink: 0,
                    width: '68px',
                    height: '42px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: idx === currentPage ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                    background: '#0a0e17',
                    padding: 0,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                  }}
                  title={`Page ${p.num}: ${p.title}`}
                >
                  <img
                    src={`./images/graduation-book/page-${p.num}.jpg`}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: idx === currentPage ? 1 : 0.55,
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      left: 0,
                      background: 'rgba(0,0,0,0.75)',
                      color: idx === currentPage ? 'var(--accent-primary)' : '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      padding: '1px 2px',
                      textAlign: 'center',
                    }}
                  >
                    P.{p.num}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {isFullscreen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(3, 5, 9, 0.94)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1rem',
            }}
            onClick={() => setIsFullscreen(false)}
          >
            {/* Top Bar in Fullscreen */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                zIndex: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="glass-pill">
                  PAGE {currentPage + 1} OF {totalPages}
                </span>
                <span style={{ color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {currentInfo.title}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--border-accent)',
                    color: '#ffffff',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                  }}
                >
                  {isAutoPlaying ? '⏸ PAUSE AUTO-SLIDE' : '▶ RESUME AUTO-SLIDE'}
                </button>

                <button
                  onClick={() => setIsFullscreen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    border: '1px solid var(--border-accent)',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Fullscreen Main Image Viewport */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`./images/graduation-book/page-${currentPage + 1}.jpg`}
                alt={currentInfo.title}
                style={{
                  maxWidth: '96vw',
                  maxHeight: '82vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                }}
              />

              {/* Fullscreen Arrows */}
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid var(--border-accent)',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '1.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid var(--border-accent)',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={26} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInPage {
          from {
            opacity: 0.3;
            transform: scale(0.985);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (min-width: 768px) {
          .desktop-only-badge {
            display: inline-block !important;
          }
        }
      `}</style>
    </section>
  );
}
