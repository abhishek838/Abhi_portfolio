import React, { useState } from 'react';
import { Compass, Users, Award, BookOpen, X, Maximize2, Sparkles, Calendar, MapPin } from 'lucide-react';

export default function StoryMilestones() {
  const [activeModal, setActiveModal] = useState(null);

  const stories = [
    {
      id: 'hydraulic-gate-origin',
      title: 'The Genesis: 1st Year Engineering',
      subtitle: 'Hydraulic Gate & Canal Lock System',
      tag: 'FOUNDATIONAL CRAFTSMANSHIP',
      date: '1st Year Foundation Project',
      location: 'Engineering Campus Quad',
      icon: Award,
      image: './images/story-hydraulic-gate.jpg',
      aspect: 'landscape',
      shortStory:
        'Where the engineering journey began. Designing, building, and demonstrating a working hydraulic canal gate and lock mechanism with the cohort using Pascal’s principle and fluid kinematics.',
      fullNarrative:
        'Every complex architecture—whether a distributed cloud platform or an autonomous robot—traces back to an unyielding curiosity for physical fundamentals. In our first year of engineering, our team designed, fabricated, and presented a working physical Hydraulic Gate & Lock System. Using fluid power transmission, dual-cylinder hydraulic circuits, and structural timber frames, we demonstrated how Pascal’s law can effortlessly lift heavy infrastructure barriers with fluid pressure. Standing on the campus lawn presenting our working prototype to evaluators cemented my passion for end-to-end engineering, mechanical precision, and the power of team collaboration.',
      takeaways: [
        "Pascal's Law & Fluid Power Transmission",
        'Physical Prototyping & Mechanical Linkages',
        'Lifelong Camaraderie & Team Engineering',
      ],
    },
    {
      id: 1,
      title: 'Relentless Ascent',
      subtitle: 'Summit & Perspective',
      tag: 'RESILIENCE & VISION',
      date: 'High Altitude Expedition',
      location: 'Western Ghats Ridge',
      icon: Compass,
      image: './images/story-summit.jpg',
      aspect: 'portrait',
      shortStory:
        'Pushing limits beyond the terminal. Climbing peaks teaches patience, endurance, and the clarity gained from viewing systems from the highest vantage point.',
      fullNarrative:
        'Standing on the mountain summit after hours of relentless climbing reminds me that the hardest software architectures require the same grit. When algorithms break or latency spikes, returning to fundamentals, staying resilient, and keeping eyes fixed on the horizon is what turns impossible challenges into solved realities.',
      takeaways: ['Endurance under pressure', 'High-level architectural vision', 'Unshakable perseverance'],
    },
    {
      id: 2,
      title: 'Engineering Farewell & Brotherhood',
      subtitle: 'B.Tech Cohort Farewell • MIT Academy of Engineering',
      tag: 'FAREWELL & BROTHERHOOD',
      date: 'Graduation Farewell Milestone',
      location: 'MIT Academy of Engineering',
      icon: Users,
      image: './images/story-cohort.jpg',
      aspect: 'landscape',
      shortStory:
        'Suiting up with the engineering cohort for our college farewell ceremony. Celebrating four unforgettable years of shared triumphs, late-night problem-solving, and unbreakable camaraderie.',
      fullNarrative:
        'The engineering farewell at MIT Academy of Engineering stands as one of the most memorable milestones of my college journey. Standing alongside the cohort who tackled rigorous coursework, hackathons, and late-night project deadlines together, suited up for the grand farewell celebration. This milestone marked not just the conclusion of an intense academic chapter, but the enduring brotherhood and shared ambition that propels each of us as we step forward into the industry to engineer the future.',
      takeaways: [
        'Lifelong Brotherhood & Camaraderie',
        'Shared Growth & Engineering Resilience',
        'Transition from Campus to Industry',
      ],
    },
    {
      id: 3,
      title: 'Academic Conclave & Philosophy',
      subtitle: '5th World Parliament of Science, Religion & Philosophy',
      tag: 'GLOBAL ETHICS & DISCOURSE',
      date: 'World Parliament Conclave',
      location: 'Dr. Vishwanath Karad MIT World Peace University',
      icon: BookOpen,
      image: './images/story-academic.jpg',
      aspect: 'landscape',
      shortStory:
        'Attending the global conclave at MIT WPU to reflect upon the human dimension, ethics, and philosophical implications of scientific and technological advancement.',
      fullNarrative:
        'Technology without ethical grounding is brittle. Participating in the 5th World Parliament of Science, Religion and Philosophy provided a profound foundation: as developers building autonomous and ubiquitous systems, we carry the responsibility to build tools that dignify humanity, bridge socio-economic divides, and elevate society. This intellectual rigor directly inspired my peer-reviewed published research on decentralized blockchain encryption using biometric authentication (GIJET, indexed on EBSCOhost).',
      takeaways: ['Ethical computing principles', 'Peer-reviewed research author', 'Responsible cryptographic design'],
    },
    {
      id: 4,
      title: 'Final Chapter, Infinite Beginnings',
      subtitle: 'Executive Moments & Graduation Gala',
      tag: '#ITSJUSTBEGUN',
      date: 'Graduation Gala & Horizon',
      location: 'Metropolitan Rooftop',
      icon: Award,
      image: './images/story-gala.jpg',
      aspect: 'landscape',
      shortStory:
        'Celebrating unforgettable journeys, shared victories, and lifelong brotherhood under city nightlines. One chapter closes, launching infinite creative frontiers.',
      fullNarrative:
        'Standing together under the illuminated "#ITSJUSTBEGUN" sign with mentors, peers, and collaborators was a defining milestone. It was not merely a graduation—it was the launchpad for a lifetime of relentless building, creative exploration, and pushing frontend engineering to its absolute zenith.',
      takeaways: ['Lifelong bonds & culture', 'Culture of shared excellence', 'Forward-looking mindset'],
    },
  ];

  return (
    <section
      id="story"
      style={{
        position: 'relative',
        padding: '6rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
            <span className="glass-pill">
              <Sparkles size={13} color="var(--accent-primary)" /> LIVING NARRATIVE & MILESTONES
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Beyond the Terminal: <span className="text-gradient">The Journey</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Technical mastery is forged through real-world trials, intellectual discourse, leadership summits, and shared
            endeavors. Here are the core chapters that define my perspective.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {stories.map((story) => {
            const Icon = story.icon;
            return (
              <div
                key={story.id}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--border-subtle)',
                  background: 'var(--bg-card)',
                }}
                onClick={() => setActiveModal(story)}
              >
                {/* Visual Header with Image */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    width: '100%',
                    overflow: 'hidden',
                    backgroundColor: '#0a0e17',
                  }}
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: story.aspect === 'portrait' ? 'center 20%' : 'center center',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(7, 10, 16, 0.85) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Tag Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid var(--border-accent)',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontWeight: 600,
                      }}
                    >
                      {story.tag}
                    </span>
                  </div>

                  {/* Maximize Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <Maximize2 size={14} />
                  </div>

                  {/* Location badge on bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.8rem',
                      left: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                    }}
                  >
                    <MapPin size={13} color="var(--accent-primary)" />
                    <span>{story.location}</span>
                  </div>
                </div>

                {/* Narrative Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <Icon size={18} color="var(--accent-primary)" />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--accent-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {story.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                    {story.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      flex: 1,
                    }}
                  >
                    {story.shortStory}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-subtle)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <span>Read Full Story →</span>
                    <span style={{ color: 'var(--text-muted)' }}>0{story.id}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox for In-Depth Narrative */}
        {activeModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9990,
              backgroundColor: 'rgba(5, 7, 12, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.25s ease',
            }}
            onClick={() => setActiveModal(null)}
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '780px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '28px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-accent)',
                padding: '0',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  zIndex: 10,
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '1px solid var(--border-accent)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div style={{ position: 'relative', width: '100%', height: '340px', backgroundColor: '#05070a' }}>
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: activeModal.aspect === 'portrait' ? 'center 20%' : 'center center',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, var(--bg-secondary) 100%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.75rem' }}>
                  <span className="glass-pill" style={{ marginBottom: '0.5rem' }}>
                    {activeModal.tag}
                  </span>
                  <h2 style={{ fontSize: '1.8rem', color: '#ffffff', margin: 0 }}>{activeModal.title}</h2>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} color="var(--accent-primary)" />
                    <span>{activeModal.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} color="var(--accent-primary)" />
                    <span>{activeModal.location}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-primary)', marginBottom: '0.75rem' }}>
                  The Narrative Reflection
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                  {activeModal.fullNarrative}
                </p>

                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Core Competencies & Engineering Takeaways
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {activeModal.takeaways.map((takeaway, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'var(--badge-bg)',
                        border: '1px solid var(--badge-border)',
                        color: 'var(--badge-text)',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      ✓ {takeaway}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
