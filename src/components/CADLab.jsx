import React, { useState, useEffect, useRef } from 'react';
import { Box, Layers, Cpu, Maximize2, Sparkles, CheckCircle, ExternalLink, X, Compass, ChevronLeft, ChevronRight, Play, Pause, Armchair, Mouse, Smartphone } from 'lucide-react';

export default function CADLab() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Unified CAD Projects with Auto-Sliders
  const cadProjects = [
    {
      id: 'stand-lifecycle-slider',
      title: 'Ergonomic Desk Mobile Stand',
      subtitle: 'Autodesk Fusion 360 • Parametric Sheet Metal',
      software: 'Autodesk Fusion 360',
      category: 'product',
      status: 'AUTO-SLIDER (3 VIEWS)',
      date: 'College Engineering Lab',
      isSlider: true,
      material: 'Sheet Metal Steel (mm) / Anodized Emerald Finish',
      description:
        'A complete 3D parametric design project engineered from flat 2D sheet metal into a finished desktop smartphone dock. Features calculated bend allowances, hydraulic press-brake flange simulations, and an integrated rear cable management aperture.',
      specs: [
        'Kinematics: 65° optimal desk viewing angle with balanced center of gravity',
        'Fabrication: Sheet metal contour flange extrusion (200mm) & K-factor calculation',
        'Features: Dual cradle hooks, acoustic amplifier cutouts, and 28mm chamfered cable pass-through',
      ],
      slides: [
        {
          image: '/images/cad/cad-stand-isometric.jpg',
          tag: 'VERIFIED 3D MODEL',
          title: 'Finished Anodized Prototype Model',
          desc: 'Isometric perspective of the finalized green anodized mobile stand with dual cradle supports.',
        },
        {
          image: '/images/cad/cad-flange-bending.jpg',
          tag: 'PARAMETRIC SIMULATION',
          title: 'Sheet Metal Flange Bending Simulation',
          desc: 'Contour flange angle calculation with dynamic bend compensation to prevent metal fatigue.',
        },
        {
          image: '/images/cad/cad-stand-cablehole.jpg',
          tag: 'ERGONOMIC DESIGN',
          title: 'Port Geometry & Cable Management',
          desc: 'Rear isometric view highlighting the 28mm chamfered circular aperture for seamless cord routing.',
        },
      ],
    },
    {
      id: 'chair-design-slider',
      title: 'Parametric Chair & Furniture Modeling',
      subtitle: 'Autodesk Fusion 360 • Wood & Tubular Joinery',
      software: 'Autodesk Fusion 360',
      category: 'furniture',
      status: 'AUTO-SLIDER (3 VIEWS)',
      date: 'College Engineering Lab',
      isSlider: true,
      material: 'Solid Hardwood & Cylindrical Cane / Bamboo Finish',
      description:
        'Exploration of structural ergonomic seating design across diverse manufacturing methods. Features a heavy-duty timber slat-back dining chair with mortise-and-tenon joints alongside a modern tubular cane armchair with armrest curvatures.',
      specs: [
        'Joinery: Mortise & tenon corner leg joinery and cross-dowel supports',
        'Ergonomics: Contoured waterfall seat edge reducing under-thigh pressure',
        'Multi-Material: Photorealistic teak wood grain and lightweight bamboo textures',
      ],
      slides: [
        {
          image: '/images/cad/cad-chair-bamboo.jpg',
          tag: 'TUBULAR CANE ARMCHAIR',
          title: 'Bamboo Armchair with Cylindrical Accents',
          desc: 'Cylindrical cane structure with tubular armrests, cross-bracing rails, and front wheel-inspired decorative emblems.',
        },
        {
          image: '/images/cad/cad-chair-wood1.jpg',
          tag: 'SOLID TIMBER DESIGN',
          title: 'Classic Slat-Back Wooden Chair (View 1)',
          desc: 'Solid hardwood dining chair featuring triple-slat ergonomic lumbar support and reinforced four-post leg pillars.',
        },
        {
          image: '/images/cad/cad-chair-wood2.jpg',
          tag: 'WOOD GRAIN TEXTURE',
          title: 'Ergonomic Wooden Chair (View 2)',
          desc: 'Perspective study highlighting the chamfered seat edges, material gloss reflection, and load-bearing stress distribution.',
        },
      ],
    },
    {
      id: 'mouse-design-slider',
      title: '"ASALA" Ergonomic Computer Mouse',
      subtitle: 'Autodesk Fusion 360 • Class-A Organic Surfacing',
      software: 'Autodesk Fusion 360',
      category: 'peripheral',
      status: 'AUTO-SLIDER (2 VIEWS)',
      date: 'College Engineering Lab',
      isSlider: true,
      material: 'Polycarbonate Translucent Shell & Tactile Grip Alloy',
      description:
        'A sleek ergonomic peripheral sculpted using organic surface lofting and curvature continuity (G2). Designed around palm biomechanics with an asymmetrical thumb rest, tactile scroll wheel assembly, and signature red "ASALA" emblem plate.',
      specs: [
        'Biomechanics: Right-handed sculpted contour reducing carpal tunnel wrist pronation',
        'Surfacing: Freeform T-spline body lofting with smoky translucent shell transparency',
        'Details: Spherical scroll encoder, click separation channel, and embedded "ASALA" branding',
      ],
      slides: [
        {
          image: '/images/cad/cad-mouse-iso.jpg',
          tag: 'FRONT ISOMETRIC VIEW',
          title: 'Translucent Shell & Tactile Scroll Assembly',
          desc: 'Front isometric angle showing the sculpted click buttons, central scroll wheel housing, and ergonomic thumb rest contour.',
        },
        {
          image: '/images/cad/cad-mouse-rear.jpg',
          tag: 'PALM CONTOUR & EMBLEM',
          title: 'Rear Palm Arch with "ASALA" Emblem',
          desc: 'Rear elevation showcasing the palm arch curvature, internal chassis silhouette, and illuminated red ASALA badge.',
        },
      ],
    },
    {
      id: 'stand-flat',
      title: 'Flat Pattern Sheet Metal Blank',
      subtitle: '2D Unfolded Manufacturing Drawing',
      software: 'Autodesk Fusion 360 / AutoCAD',
      category: 'sheetmetal',
      status: 'MANUFACTURING BLANK',
      date: 'College Engineering Lab',
      isSlider: false,
      image: '/images/cad/cad-flat-pattern.jpg',
      material: 'Sheet Metal Steel Blank',
      description:
        'The unbent 2D flat development drawing ready for CNC laser profile cutting. Shows exact bend lines, corner relief cutouts, and fork dimensions before press-brake deformation.',
      specs: [
        'Unfolded Length: Calculated with material elongation factor',
        'Relief Cutouts: Corner relief cuts to eliminate stress concentration and tearing',
        'CAD Output: DXF export for CNC profile laser cutting',
      ],
      slides: [
        {
          image: '/images/cad/cad-flat-pattern.jpg',
          tag: 'MANUFACTURING BLANK',
          title: 'Flat Pattern Layout',
          desc: '2D laser cutting profile.',
        },
      ],
    },
    {
      id: 'pipe-joint',
      title: 'Precision T-Joint Manifold Assembly',
      subtitle: 'Cylindrical Pipe Intersection Model',
      software: 'Autodesk Fusion 360',
      category: 'assembly',
      status: 'SURFACE & SOLID MODEL',
      date: 'College Engineering Lab',
      isSlider: false,
      image: '/images/cad/cad-t-joint-manifold.jpg',
      material: 'Textured Surface / Alloy Tubing',
      description:
        'Solid body 3D modeling of an orthogonal pipe joint manifold. Focuses on saddle-cut curve projection, wall thickness consistency, and clean surface intersection fillets.',
      specs: [
        'Profile: Cylindrical solid extrusion with inner bore hollow',
        'Joinery: 90-degree saddle joint with boolean subtraction',
        'Application: Fluid dynamics and mechanical conduit routing',
      ],
      slides: [
        {
          image: '/images/cad/cad-t-joint-manifold.jpg',
          tag: 'SURFACE & SOLID MODEL',
          title: 'T-Joint Manifold Assembly',
          desc: 'Orthogonal pipe intersection model.',
        },
      ],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? cadProjects
      : cadProjects.filter((item) => item.category === activeCategory);

  return (
    <section
      id="cad-lab"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span className="glass-pill">
              <Box size={13} color="var(--accent-primary)" /> 3D CAD & INDUSTRIAL LAB
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Spatial Engineering & <span className="text-gradient">3D CAD Lab</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.65 }}>
            My engineering foundation began in college with <strong>Autodesk Fusion 360</strong>, <strong>AutoCAD</strong>,
            and parametric product modeling. From ergonomic peripherals and mechanical sheet metal to furniture kinematics,
            these physical models shaped my intuitive grasp of 3D vector coordinates, transforms, and canvas shaders.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', label: 'All 3D Models' },
            { id: 'product', label: 'Mobile Stand (Auto-Slider)' },
            { id: 'furniture', label: 'Chairs & Furniture (Auto-Slider)' },
            { id: 'peripheral', label: 'ASALA Mouse (Auto-Slider)' },
            { id: 'sheetmetal', label: 'Sheet Metal & Manifolds' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              style={{
                background: activeCategory === tab.id ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                color: activeCategory === tab.id ? '#050508' : 'var(--text-secondary)',
                border: activeCategory === tab.id ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3D CAD Models Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredProjects.map((project) =>
            project.isSlider ? (
              <AutoSliderCard
                key={project.id}
                project={project}
                onInspect={(selectedSlideIndex) => {
                  setActiveItem({
                    ...project,
                    currentSlideIndex: selectedSlideIndex,
                  });
                }}
              />
            ) : (
              <StandardCADCard
                key={project.id}
                project={project}
                onInspect={() => setActiveItem({ ...project, currentSlideIndex: 0 })}
              />
            )
          )}
        </div>

        {/* Interactive Blueprint Lightbox Modal */}
        {activeItem && (
          <CADBlueprintModal
            item={activeItem}
            onClose={() => setActiveItem(null)}
          />
        )}
      </div>
    </section>
  );
}

// =========================================================================
// Auto-Slider Card Component (Used for Mobile Stand, Chair, and Mouse)
// =========================================================================
function AutoSliderCard({ project, onInspect }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const slides = project.slides;

  // Auto Slider Effect (3.2 seconds per slide, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 3200);

    return () => clearInterval(timerRef.current);
  }, [isPaused, slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIdx] || slides[0];

  return (
    <div
      className="glass-panel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => onInspect(currentIdx)}
      style={{
        borderRadius: '26px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        border: '1px solid var(--accent-primary)',
        background: 'var(--bg-card)',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px var(--accent-glow-subtle)',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Visual Slider Viewport */}
      <div
        style={{
          position: 'relative',
          height: '280px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#070a12',
        }}
      >
        {/* Render Slides with smooth crossfade */}
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              opacity: idx === currentIdx ? 1 : 0,
              transform: idx === currentIdx ? 'scale(1)' : 'scale(1.05)',
              transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s ease',
            }}
          />
        ))}

        {/* Gradient Scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(6, 9, 15, 0.9) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Badges: Software & Active Auto-Slider Indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <span
            style={{
              background: 'rgba(0, 0, 0, 0.75)',
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
            🛠️ {project.software}
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span
              style={{
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                padding: '3px 8px',
                borderRadius: '9999px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Sparkles size={11} />
              <span>{slides.length}-VIEW SLIDER ({currentIdx + 1}/{slides.length})</span>
            </span>

            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Maximize2 size={13} />
            </div>
          </div>
        </div>

        {/* Manual Arrow Controls (Appear on hover) */}
        <button
          onClick={handlePrev}
          title="Previous 3D View"
          style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid var(--border-accent)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={handleNext}
          title="Next 3D View"
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 20,
            background: 'rgba(0, 0, 0, 0.65)',
            border: '1px solid var(--border-accent)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <ChevronRight size={16} />
        </button>

        {/* Active View Label on Bottom Left of Image */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '1rem',
            zIndex: 10,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(5, 8, 15, 0.75)',
            backdropFilter: 'blur(6px)',
            padding: '3px 9px',
            borderRadius: '9999px',
            border: '1px solid var(--border-accent)',
          }}
        >
          <Compass size={12} color="var(--accent-primary)" />
          <span>{currentSlide.tag}</span>
        </div>

        {/* Interactive Dots Pagination */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            right: '1rem',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(dotIdx);
              }}
              style={{
                width: dotIdx === currentIdx ? '22px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: dotIdx === currentIdx ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              title={`View slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Card Body Details */}
      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Dynamic Caption showing current active slide title */}
        <div style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent-secondary)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}
          >
            ● {currentSlide.title}
          </span>
        </div>

        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
          {project.title}
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
          {currentSlide.desc}
        </p>

        {/* Slide Thumbnails Quick-Click Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${slides.length}, 1fr)`,
            gap: '0.5rem',
            marginBottom: '1.25rem',
          }}
        >
          {slides.map((slide, thumbIdx) => (
            <button
              key={thumbIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIdx(thumbIdx);
              }}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                height: '42px',
                border: thumbIdx === currentIdx ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
                background: '#0a0d14',
                padding: 0,
                cursor: 'pointer',
                position: 'relative',
              }}
              title={slide.title}
            >
              <img
                src={slide.image}
                alt={slide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: thumbIdx === currentIdx ? 1 : 0.6,
                }}
              />
            </button>
          ))}
        </div>

        {/* Card Footer */}
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
          <span>Click to Inspect 3D Blueprint →</span>
          <span style={{ color: 'var(--text-muted)' }}>{isPaused ? '⏸ PAUSED' : '▶ AUTO-PLAYING'}</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// Standard Static CAD Card Component
// =========================================================================
function StandardCADCard({ project, onInspect }) {
  return (
    <div
      className="glass-panel"
      onClick={onInspect}
      style={{
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        border: '1px solid var(--border-subtle)',
        background: 'var(--bg-card)',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '280px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#0a0d14',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(6, 9, 15, 0.85) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
          <span
            style={{
              background: 'rgba(0, 0, 0, 0.75)',
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
            🛠️ {project.software}
          </span>
        </div>

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

        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <Compass size={13} color="var(--accent-primary)" />
          <span>{project.status}</span>
        </div>
      </div>

      <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            marginBottom: '0.35rem',
          }}
        >
          {project.subtitle}
        </span>

        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem', color: 'var(--text-primary)' }}>
          {project.title}
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
          {project.description}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            color: 'var(--accent-primary)',
          }}
        >
          <span>Inspect Blueprint →</span>
          <span style={{ color: 'var(--text-muted)' }}>{project.date}</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// Blueprint Lightbox Modal with View Switcher
// =========================================================================
function CADBlueprintModal({ item, onClose }) {
  const [modalSlideIdx, setModalSlideIdx] = useState(item.currentSlideIndex || 0);
  const currentSlide = item.slides[modalSlideIdx] || item.slides[0];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        backgroundColor: 'rgba(4, 6, 11, 0.88)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '26px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-accent)',
          padding: '0',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 20,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.75)',
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

        {/* Modal Main Viewport Image */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '360px',
            maxHeight: '480px',
            backgroundColor: '#070a12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              maxHeight: '460px',
              display: 'block',
            }}
          />

          {/* If multi-slide, show prev/next buttons */}
          {item.slides.length > 1 && (
            <>
              <button
                onClick={() => setModalSlideIdx((prev) => (prev === 0 ? item.slides.length - 1 : prev - 1))}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.65)',
                  border: '1px solid var(--border-accent)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setModalSlideIdx((prev) => (prev + 1) % item.slides.length)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.65)',
                  border: '1px solid var(--border-accent)',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails Tab Bar for Multi-View */}
        {item.slides.length > 1 && (
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              padding: '1rem 2rem 0',
              background: 'rgba(10, 14, 22, 0.9)',
              borderBottom: '1px solid var(--border-subtle)',
              overflowX: 'auto',
            }}
          >
            {item.slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setModalSlideIdx(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: idx === modalSlideIdx ? 'var(--accent-primary)' : 'transparent',
                  color: idx === modalSlideIdx ? '#050508' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '8px 8px 0 0',
                  padding: '0.5rem 1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>0{idx + 1}.</span>
                <span>{slide.title}</span>
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <span className="glass-pill">🛠️ {item.software}</span>
            <span className="glass-pill">📍 {item.date}</span>
            <span className="glass-pill">⚙️ {currentSlide.tag || item.status}</span>
          </div>

          <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.3rem' }}>
            {currentSlide.title || item.title}
          </h3>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.92rem', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem' }}>
            Material: {item.material}
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {currentSlide.desc || item.description}
          </p>

          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
            ENGINEERING SPECIFICATIONS & KINEMATICS
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
            {item.specs.map((spec, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <CheckCircle size={16} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>{spec}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(0, 240, 255, 0.06)',
              border: '1px solid var(--border-accent)',
              borderRadius: '14px',
              padding: '1rem 1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: 'var(--accent-primary)' }}>Bridging Mechanical CAD to Creative Frontend:</strong> Designing physical objects with tight tolerances gave me mathematical intuition for vectors, normal maps, matrix transformations, and 3D web graphics with WebGL and Three.js.
          </div>
        </div>
      </div>
    </div>
  );
}
