import React, { useEffect, useRef } from 'react';
import { audioEngine } from '../audio/audioEngine';
import confetti from 'canvas-confetti';

export default function F1Overdrive({ isLaunching, onComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isLaunching) return;

    // 1. Play synthesized engine roar and turbo blow-off
    audioEngine.playF1OverdriveSound();

    // 2. Trigger screen shake
    document.body.classList.add('screen-shake-intense');
    const shakeTimeout = setTimeout(() => {
      document.body.classList.remove('screen-shake-intense');
    }, 700);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    let animationId;
    const startTime = performance.now();
    const duration = 1500; // 1.5s total cinematic launch

    // Car kinematics
    const carY = height * 0.55;
    const carWidth = Math.min(320, width * 0.35);
    const carHeight = carWidth * 0.28;

    // Particle pools for exhaust fire & burning rubber smoke
    const particles = [];
    const tireTracks = [];

    const render = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      ctx.clearRect(0, 0, width, height);

      // Extreme acceleration curve: slow launch -> warp blast
      // easeInExpo style acceleration
      const easeProgress = progress < 0.3
        ? (progress / 0.3) * 0.08
        : 0.08 + Math.pow((progress - 0.3) / 0.7, 3) * 0.92;

      const carX = -carWidth + easeProgress * (width + carWidth * 2);

      // Add speed lines / light trails across screen
      if (progress > 0.25) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 18; i++) {
          const sy = Math.random() * height;
          const slen = Math.random() * 250 + 150;
          ctx.beginPath();
          ctx.moveTo(carX - slen - Math.random() * 200, sy);
          ctx.lineTo(carX + slen, sy);
          ctx.stroke();
        }
      }

      // Add tire tracks
      if (progress > 0.05 && progress < 0.9) {
        tireTracks.push({
          x: carX,
          y1: carY + carHeight * 0.42,
          y2: carY - carHeight * 0.42,
          alpha: 0.8,
        });
      }

      // Render burning rubber tire tracks
      ctx.lineWidth = 5;
      tireTracks.forEach((track) => {
        ctx.strokeStyle = `rgba(20, 20, 20, ${track.alpha})`;
        ctx.beginPath();
        ctx.moveTo(track.x - 20, track.y1);
        ctx.lineTo(track.x, track.y1);
        ctx.moveTo(track.x - 20, track.y2);
        ctx.lineTo(track.x, track.y2);
        ctx.stroke();
        track.alpha -= 0.012;
      });

      // Emit exhaust fire, sparks, and smoke
      if (progress < 0.95) {
        for (let i = 0; i < 9; i++) {
          particles.push({
            x: carX - 10,
            y: carY + (Math.random() - 0.5) * (carHeight * 0.5),
            vx: -(Math.random() * 18 + 12),
            vy: (Math.random() - 0.5) * 6,
            size: Math.random() * 14 + 6,
            life: 1,
            decay: Math.random() * 0.04 + 0.03,
            color: Math.random() > 0.35 ? '#ff3b00' : (Math.random() > 0.5 ? '#ffaa00' : '#00f0ff'),
          });
        }
      }

      // Render and update exhaust particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.size *= 0.96;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Render High-Detail F1 Aerodynamic Race Car Sprite
      ctx.save();
      ctx.translate(carX, carY);

      // Motion blur glow around car body
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = progress > 0.3 ? 35 : 15;

      // 1. Sleek Carbon Monocoque Chassis
      ctx.fillStyle = '#0f1422';
      ctx.beginPath();
      ctx.moveTo(carWidth * 0.45, 0); // Nose cone tip
      ctx.lineTo(carWidth * 0.15, -carHeight * 0.28); // Left sidepod inlet
      ctx.lineTo(-carWidth * 0.35, -carHeight * 0.36); // Rear bodywork
      ctx.lineTo(-carWidth * 0.45, -carHeight * 0.18); // Rear wing mount
      ctx.lineTo(-carWidth * 0.45, carHeight * 0.18);
      ctx.lineTo(-carWidth * 0.35, carHeight * 0.36); // Right sidepod
      ctx.lineTo(carWidth * 0.15, carHeight * 0.28);
      ctx.closePath();
      ctx.fill();

      // 2. High-Octane Cyan & Orange Livery Stripes
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.moveTo(carWidth * 0.4, 0);
      ctx.lineTo(carWidth * 0.1, -carHeight * 0.15);
      ctx.lineTo(-carWidth * 0.2, -carHeight * 0.12);
      ctx.lineTo(-carWidth * 0.2, carHeight * 0.12);
      ctx.lineTo(carWidth * 0.1, carHeight * 0.15);
      ctx.closePath();
      ctx.fill();

      // 3. Driver Halo & Helmet
      ctx.fillStyle = '#ffaa00';
      ctx.beginPath();
      ctx.arc(0, 0, carHeight * 0.22, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, carHeight * 0.28, -Math.PI * 0.5, Math.PI * 0.5);
      ctx.stroke();

      // 4. Front Aerodynamic Multi-Element Wing
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(carWidth * 0.38, -carHeight * 0.52, carWidth * 0.08, carHeight * 1.04);
      ctx.fillStyle = '#00f0ff';
      ctx.fillRect(carWidth * 0.44, -carHeight * 0.52, carWidth * 0.02, carHeight * 1.04);

      // 5. Rear High-Downforce Wing with DRS Flap
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(-carWidth * 0.48, -carHeight * 0.56, carWidth * 0.1, carHeight * 1.12);
      // Red Rain / ERS flashing safety light
      ctx.fillStyle = Math.floor(elapsed / 100) % 2 === 0 ? '#ff0033' : '#660011';
      ctx.fillRect(-carWidth * 0.5, -4, 6, 8);

      // 6. Spinning Slick Pirelli Wheels with motion blur
      ctx.fillStyle = '#111827';
      ctx.strokeStyle = '#ff3b00';
      ctx.lineWidth = 2.5;

      // Front Left Wheel
      ctx.fillRect(carWidth * 0.2, -carHeight * 0.65, carWidth * 0.16, carHeight * 0.3);
      ctx.strokeRect(carWidth * 0.2, -carHeight * 0.65, carWidth * 0.16, carHeight * 0.3);

      // Front Right Wheel
      ctx.fillRect(carWidth * 0.2, carHeight * 0.35, carWidth * 0.16, carHeight * 0.3);
      ctx.strokeRect(carWidth * 0.2, carHeight * 0.35, carWidth * 0.16, carHeight * 0.3);

      // Rear Left Wheel (Wider rear slicks)
      ctx.fillRect(-carWidth * 0.32, -carHeight * 0.75, carWidth * 0.2, carHeight * 0.38);
      ctx.strokeRect(-carWidth * 0.32, -carHeight * 0.75, carWidth * 0.2, carHeight * 0.38);

      // Rear Right Wheel
      ctx.fillRect(-carWidth * 0.32, carHeight * 0.37, carWidth * 0.2, carHeight * 0.38);
      ctx.strokeRect(-carWidth * 0.32, carHeight * 0.37, carWidth * 0.2, carHeight * 0.38);

      ctx.restore();

      // Continue animation or finish
      if (progress < 1) {
        animationId = requestAnimationFrame(render);
      } else {
        // Complete sequence: scroll directly to #projects with spring bounce
        const projectsEl = document.getElementById('projects');
        if (projectsEl) {
          projectsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Victory celebration confetti burst
        try {
          confetti({
            particleCount: 75,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#00f0ff', '#ff3b00', '#8b5cf6', '#ffffff'],
          });
        } catch (e) {}

        if (onComplete) onComplete();
      }
    };

    animationId = requestAnimationFrame(render);

    return () => {
      clearTimeout(shakeTimeout);
      cancelAnimationFrame(animationId);
      document.body.classList.remove('screen-shake-intense');
    };
  }, [isLaunching, onComplete]);

  if (!isLaunching) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, rgba(0,240,255,0.12) 0%, rgba(5,5,8,0.4) 100%)',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      {/* Telemetry HUD Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1.5rem',
          fontFamily: 'var(--font-mono)',
          color: '#00f0ff',
          textShadow: '0 0 10px #00f0ff',
          fontSize: '0.95rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700,
          background: 'rgba(5, 10, 20, 0.85)',
          padding: '0.6rem 1.6rem',
          borderRadius: '9999px',
          border: '1px solid #00f0ff',
        }}
      >
        <span>🏎️ ERS BOOST: 100%</span>
        <span>•</span>
        <span>DRS ACTIVE</span>
        <span>•</span>
        <span style={{ color: '#ff3b00' }}>TELEPORTING TO PROJECTS...</span>
      </div>
    </div>
  );
}
