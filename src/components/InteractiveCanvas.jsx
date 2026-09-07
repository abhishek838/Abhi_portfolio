import React, { useEffect, useRef } from 'react';

// Helper to draw realistic 6-fold dendritic ice crystal snowflake matching macro reference
function drawProceduralSnowflake(ctx, size, alpha) {
  const radius = size / 2;
  ctx.save();

  // Outer soft cyan ice glow
  ctx.shadowColor = 'rgba(125, 211, 252, 0.8)';
  ctx.shadowBlur = Math.min(8, size * 0.25);

  ctx.strokeStyle = `rgba(230, 245, 255, ${alpha * 0.95})`;
  ctx.fillStyle = `rgba(215, 240, 255, ${alpha * 0.7})`;
  ctx.lineWidth = Math.max(1, size * 0.045);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  // 1. Central faceted hexagonal plate
  const coreRadius = radius * 0.22;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = Math.cos(angle) * coreRadius;
    const y = Math.sin(angle) * coreRadius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // Central bright specular glint
  ctx.beginPath();
  ctx.arc(0, 0, Math.max(1.2, coreRadius * 0.35), 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
  ctx.fill();

  // 2. Six Primary Dendritic Arms with 6-fold radial symmetry
  for (let arm = 0; arm < 6; arm++) {
    ctx.save();
    ctx.rotate((arm * Math.PI) / 3);

    // Main spine
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius);
    ctx.stroke();

    // Secondary fern-like lateral chevrons (angled at 60 deg / Math.PI / 3)
    const branchPoints = [
      { pos: 0.38, len: 0.28, sub: false },
      { pos: 0.58, len: 0.42, sub: true },
      { pos: 0.78, len: 0.32, sub: false },
    ];

    branchPoints.forEach(({ pos, len, sub }) => {
      const y = -radius * pos;
      const branchLen = radius * len;

      // Left branch
      ctx.beginPath();
      ctx.moveTo(0, y);
      const lx = -Math.cos(Math.PI / 6) * branchLen;
      const ly = y - Math.sin(Math.PI / 6) * branchLen;
      ctx.lineTo(lx, ly);
      ctx.stroke();

      // Right branch
      ctx.beginPath();
      ctx.moveTo(0, y);
      const rx = Math.cos(Math.PI / 6) * branchLen;
      const ry = y - Math.sin(Math.PI / 6) * branchLen;
      ctx.lineTo(rx, ry);
      ctx.stroke();

      // Delicate sub-spurs for fern-like dendritic crystals
      if (sub && size > 24) {
        const subLen = branchLen * 0.45;
        // Sub-spurs on left
        ctx.beginPath();
        ctx.moveTo(lx * 0.5, ly + (y - ly) * 0.5);
        ctx.lineTo(lx * 0.5 - subLen * 0.6, ly);
        ctx.stroke();

        // Sub-spurs on right
        ctx.beginPath();
        ctx.moveTo(rx * 0.5, ry + (y - ry) * 0.5);
        ctx.lineTo(rx * 0.5 + subLen * 0.6, ry);
        ctx.stroke();
      }
    });

    // Outer arrowhead / crown plate at branch tip
    const tipY = -radius;
    const tipW = radius * 0.16;
    ctx.beginPath();
    ctx.moveTo(0, tipY);
    ctx.lineTo(-tipW, tipY + tipW * 1.3);
    ctx.lineTo(0, tipY + tipW * 0.7);
    ctx.lineTo(tipW, tipY + tipW * 1.3);
    ctx.closePath();
    ctx.fillStyle = `rgba(235, 248, 255, ${alpha * 0.85})`;
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  ctx.restore();
}

export default function InteractiveCanvas({ theme = 'normal' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Preload authentic transparent macro snowflake images
    const crystalImages = [
      new Image(),
      new Image(),
    ];
    crystalImages[0].src = '/images/snowflake_crystal_1_sm.png';
    crystalImages[1].src = '/images/snowflake_crystal_sm.png';

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Particle state definition
    let particles = [];
    const isSnow = theme === 'snow';
    const count = isSnow
      ? (window.innerWidth < 768 ? 48 : 78)
      : (window.innerWidth < 768 ? 45 : 90);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const isMacroCrystal = isSnow && i % 3 !== 2; // ~67% are 6-fold dendritic snowflakes
        const baseSize = isMacroCrystal
          ? Math.random() * 28 + 18 // 18px to 46px realistic crystals
          : (isSnow ? Math.random() * 3.5 + 1.5 : Math.random() * 2.2 + 1);

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: isSnow
            ? (Math.random() - 0.5) * 0.4
            : (Math.random() - 0.5) * (theme === 'relax' ? 0.4 : 0.8),
          vy: isSnow
            ? Math.random() * 0.85 + 0.35 // gentle downward snowfall drift
            : (Math.random() - 0.5) * (theme === 'relax' ? 0.4 : 0.8),
          size: baseSize,
          alpha: isMacroCrystal ? Math.random() * 0.45 + 0.45 : Math.random() * 0.5 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.012, // slow, gentle crystal rotation
          tiltPhase: Math.random() * Math.PI * 2,
          tiltSpeed: Math.random() * 0.02 + 0.01, // 3D tumbling flutter
          swayAmp: Math.random() * 0.7 + 0.3,
          isCrystal: isMacroCrystal,
          imgIndex: i % 2,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Theme-specific colors
      let pColor = '0, 240, 255';
      let linkColor = '0, 240, 255';
      let maxDist = 110;

      if (theme === 'snow' || theme === 'dark') {
        pColor = '220, 245, 255';
        linkColor = '125, 211, 252';
        maxDist = 90;
      } else if (theme === 'relax') {
        pColor = '245, 158, 11';
        linkColor = '16, 185, 129';
        maxDist = 120;
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion physics
        if (isSnow) {
          // Realistic horizontal flutter & gentle downward glide
          p.pulse += 0.02;
          p.tiltPhase += p.tiltSpeed;
          p.rotation += p.rotSpeed;

          p.x += p.vx + Math.sin(p.pulse) * p.swayAmp;
          p.y += p.vy;
        } else {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += 0.025;
        }

        // Wrap boundaries smoothly
        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) {
          p.y = -p.size;
          p.x = Math.random() * width;
        }

        // Mouse Breeze Interaction (Aerodynamic deflection)
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * (isSnow ? 4.2 : 3.5);
          p.y -= Math.sin(angle) * force * (isSnow ? 4.2 : 3.5);
        }

        // Alpha calculation with gentle twinkle
        const currentAlpha = Math.max(0.12, Math.min(1, p.alpha + Math.sin(p.pulse) * 0.15));

        if (isSnow && p.isCrystal) {
          // Render authentic 6-fold dendritic crystal snowflake
          const img = crystalImages[p.imgIndex];
          const hasImage = img && img.complete && img.naturalWidth > 0;

          // 3D perspective flutter scale
          const tiltScale = Math.cos(p.tiltPhase) * 0.25 + 0.75;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.scale(tiltScale, 1.0); // 3D tumbling in the wind

          if (hasImage) {
            ctx.globalAlpha = currentAlpha;
            ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
          } else {
            // High-fidelity procedural dendritic snowflake fallback
            drawProceduralSnowflake(ctx, p.size, currentAlpha);
          }
          ctx.restore();
        } else {
          // Tiny round frost glint or studio particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${pColor}, ${currentAlpha})`;
          ctx.fill();
        }

        // Connect nearby ambient particles (only for non-crystals or subtle frost lines)
        if (!isSnow) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (distBetween < maxDist) {
              const lineAlpha = (1 - distBetween / maxDist) * 0.15;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${linkColor}, ${lineAlpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: theme === 'snow' ? 0.95 : (theme === 'dark' ? 0.75 : 0.85),
      }}
    />
  );
}

