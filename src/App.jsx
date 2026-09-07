import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoryMilestones from './components/StoryMilestones';
import GraduationBook from './components/GraduationBook';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CADLab from './components/CADLab';
import WritingBlog from './components/WritingBlog';
import TerminalContact from './components/TerminalContact';
import FloatingDock from './components/FloatingDock';
import InteractiveCanvas from './components/InteractiveCanvas';
import F1Overdrive from './components/F1Overdrive';
import { audioEngine } from './audio/audioEngine';

export default function App() {
  const [theme, setTheme] = useState('normal'); // 'normal' | 'snow' | 'relax'
  const [isF1Launching, setIsF1Launching] = useState(false);

  // Sync theme to document.body class
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Always ensure page starts at the top (Hero / first page) on reload/open
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // Ambient audio with browser gesture unlock (strictly respects mute, volume, & manual pause)
  useEffect(() => {
    const handleFirstInteraction = (e) => {
      // Clean up listeners immediately
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);

      // If the interaction clicked directly on audio controls, do not trigger ambient auto-start
      if (e?.target && e.target.closest && e.target.closest('[data-audio-control="true"]')) {
        return;
      }

      const state = audioEngine.getState();
      if (!state.isMuted && state.volume > 0 && !state.isPlaying && !state.userPaused) {
        audioEngine.startAmbient();
      }
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const handleLaunchF1 = () => {
    if (isF1Launching) return;
    setIsF1Launching(true);
  };

  const handleF1Complete = () => {
    setIsF1Launching(false);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 1. Procedural Background Canvas */}
      <InteractiveCanvas theme={theme} />

      {/* 2. Cinematic F1 Nitro Overdrive Overlay */}
      <F1Overdrive isLaunching={isF1Launching} onComplete={handleF1Complete} />

      {/* 3. Sticky Navigation Header */}
      <Navbar onLaunchF1={handleLaunchF1} />

      {/* 4. Main Page Sections */}
      <main>
        <Hero onLaunchF1={handleLaunchF1} />
        <StoryMilestones />
        <GraduationBook />
        <Experience />
        <Projects />
        <CADLab />
        <WritingBlog />
        <Skills />
        <TerminalContact onLaunchF1={handleLaunchF1} />
      </main>

      {/* 5. Floating Interactive Command Dock */}
      <FloatingDock
        currentTheme={theme}
        onThemeChange={setTheme}
        onLaunchF1={handleLaunchF1}
      />
    </div>
  );
}
