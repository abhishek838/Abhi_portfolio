import React, { useState, useEffect } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Zap,
  Sparkles,
  SkipForward,
  SkipBack,
  Music,
  Sliders,
  ChevronDown,
} from 'lucide-react';
import { audioEngine, CALM_TRACKS } from '../audio/audioEngine';

export default function FloatingDock({ currentTheme, onThemeChange, onLaunchF1 }) {
  const [audioState, setAudioState] = useState(audioEngine.getState());
  const [showAudioControls, setShowAudioControls] = useState(false);

  useEffect(() => {
    return audioEngine.subscribe((state) => {
      setAudioState(state);
    });
  }, []);

  const isPlaying = audioState.isPlaying;
  const isMuted = audioState.isMuted;
  const currentTrack = audioState.currentTrack;

  const togglePlayAudio = () => {
    audioEngine.toggleAmbient();
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    audioEngine.setVolume(val / 100);
    if (isMuted && val > 0) {
      audioEngine.toggleMute();
    }
  };

  const toggleMute = () => {
    audioEngine.toggleMute();
  };

  const handleNextTrack = () => {
    audioEngine.nextTrack();
  };

  const handlePrevTrack = () => {
    audioEngine.prevTrack();
  };

  const handleSelectTrack = (index) => {
    audioEngine.setTrack(index);
  };

  return (
    <aside
      aria-label="Floating Control Dock"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
      }}
    >
      {/* Audio Expander Panel */}
      {showAudioControls && (
        <div
          className="glass-panel"
          style={{
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '280px',
            borderRadius: '20px',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid var(--border-accent)',
            background: 'var(--bg-card)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.75), 0 0 25px var(--accent-glow-subtle)',
          }}
        >
          {/* Header with Title & Mute */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Music size={15} color="var(--accent-primary)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                CALM AMBIENT PLAYER
              </span>
            </div>

            <button
              onClick={toggleMute}
              style={{
                background: 'none',
                border: 'none',
                color: isMuted ? 'var(--text-muted)' : 'var(--accent-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
              }}
              title={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>

          {/* Current Track Banner */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
                {currentTrack.title}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: isPlaying ? 'var(--accent-primary)' : 'var(--text-muted)',
                }}
              >
                {isPlaying ? '● PLAYING' : '⏸ PAUSED'}
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              {currentTrack.genre} • {currentTrack.mood}
            </div>
          </div>

          {/* Player Controls (Prev, Play/Pause, Next) */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.85rem' }}>
            <button
              onClick={handlePrevTrack}
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
              title="Previous Calm Song"
            >
              <SkipBack size={15} />
            </button>

            <button
              onClick={togglePlayAudio}
              className="btn-primary"
              style={{
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title={isPlaying ? 'Pause Calm Audio' : 'Play Calm Audio'}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
            </button>

            <button
              onClick={handleNextTrack}
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
              title="Next Calm Song"
            >
              <SkipForward size={15} />
            </button>
          </div>

          {/* Song Quick Switcher Pills */}
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>
              CHANGE SONG ({CALM_TRACKS.length} AMBIENT TRACKS):
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem' }}>
              {CALM_TRACKS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTrack(idx)}
                  style={{
                    padding: '0.35rem 0.5rem',
                    borderRadius: '8px',
                    border:
                      audioState.currentTrackIndex === idx
                        ? '1px solid var(--accent-primary)'
                        : '1px solid var(--border-subtle)',
                    background:
                      audioState.currentTrackIndex === idx
                        ? 'rgba(0, 240, 255, 0.15)'
                        : 'rgba(0, 0, 0, 0.25)',
                    color: audioState.currentTrackIndex === idx ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: audioState.currentTrackIndex === idx ? 700 : 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  title={t.title}
                >
                  {audioState.currentTrackIndex === idx ? '▶ ' : ''}
                  {t.title}
                </button>
              ))}
            </div>
          </div>

          {/* Volume Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={toggleMute}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'var(--text-muted)' }}
              title={isMuted || audioState.volume === 0 ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted || audioState.volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : Math.round(audioState.volume * 100)}
              onChange={handleVolumeChange}
              style={{
                flex: 1,
                accentColor: 'var(--accent-primary)',
                cursor: 'pointer',
                height: '4px',
              }}
              title="Volume control (0% stops audio)"
            />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', minWidth: '45px', textAlign: 'right' }}>
              {isMuted || audioState.volume === 0 ? '0% (Off)' : `${Math.round(audioState.volume * 100)}%`}
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Island */}
      <div
        className="glass-panel"
        style={{
          padding: '0.45rem 0.65rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          borderRadius: '9999px',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65), 0 0 20px var(--accent-glow-subtle)',
          border: '1px solid var(--border-accent)',
        }}
      >
        {/* Theme Switchers: Studio, Snow, Relax */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '9999px', padding: '3px' }}>
          <button
            title="Studio Mode: Cyberpunk Tech Accents"
            onClick={() => onThemeChange('normal')}
            style={{
              background: currentTheme === 'normal' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'normal' ? '#050508' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '9999px',
              padding: '6px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              fontSize: '0.75rem',
              fontFamily: 'var(--font-heading)',
              transition: 'all 0.2s ease',
            }}
          >
            <Zap size={14} />
            <span className="dock-label">Studio</span>
          </button>

          {/* Snow Theme (Replaces OLED) */}
          <button
            title="Snow Theme: Glacial Frost & Falling Snowflakes"
            onClick={() => onThemeChange('snow')}
            style={{
              background: currentTheme === 'snow' || currentTheme === 'dark' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'snow' || currentTheme === 'dark' ? '#050508' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '9999px',
              padding: '6px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              fontSize: '0.75rem',
              fontFamily: 'var(--font-heading)',
              transition: 'all 0.2s ease',
            }}
          >
            <span style={{ fontSize: '13px' }}>❄️</span>
            <span className="dock-label">Snow</span>
          </button>

          <button
            title="Relax Mode: Warm Nocturnal Indigo & Emerald"
            onClick={() => onThemeChange('relax')}
            style={{
              background: currentTheme === 'relax' ? 'var(--accent-primary)' : 'transparent',
              color: currentTheme === 'relax' ? '#050508' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '9999px',
              padding: '6px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: 600,
              fontSize: '0.75rem',
              fontFamily: 'var(--font-heading)',
              transition: 'all 0.2s ease',
            }}
          >
            <Sparkles size={14} />
            <span className="dock-label">Relax</span>
          </button>
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '22px', background: 'var(--border-subtle)' }} />

        {/* Audio Equalizer & Track Name Button */}
        <button
          onClick={() => {
            if (!isPlaying) togglePlayAudio();
            setShowAudioControls(!showAudioControls);
          }}
          title={isPlaying ? `Now Playing: ${currentTrack.title} (Click for songs & controls)` : 'Play Calm Ambient Audio'}
          style={{
            background: isPlaying ? 'var(--badge-bg)' : 'transparent',
            border: isPlaying ? '1px solid var(--border-accent)' : '1px solid transparent',
            color: isPlaying ? 'var(--accent-primary)' : 'var(--text-secondary)',
            borderRadius: '9999px',
            padding: '7px 11px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.25s ease',
          }}
        >
          {/* Animated Equalizer Bars */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
            <span
              style={{
                width: '2.5px',
                height: isPlaying ? '12px' : '4px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                animation: isPlaying ? 'equalizerBar 0.8s ease-in-out infinite alternate' : 'none',
              }}
            />
            <span
              style={{
                width: '2.5px',
                height: isPlaying ? '16px' : '7px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                animation: isPlaying ? 'equalizerBar 0.5s ease-in-out infinite alternate 0.2s' : 'none',
              }}
            />
            <span
              style={{
                width: '2.5px',
                height: isPlaying ? '10px' : '5px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                animation: isPlaying ? 'equalizerBar 0.7s ease-in-out infinite alternate 0.4s' : 'none',
              }}
            />
          </div>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
            {isPlaying ? currentTrack.title : 'CALM AUDIO'}
          </span>
          <ChevronDown size={12} style={{ opacity: 0.7 }} />
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '22px', background: 'var(--border-subtle)' }} />

        {/* F1 Overdrive Instant Ignition */}
        <button
          onClick={onLaunchF1}
          className="btn-f1-nitro"
          style={{
            padding: '7px 13px',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
          }}
          title="Launch F1 Overdrive Hyper-Speed Jump"
        >
          <span>🏎️ F1 BOOST</span>
        </button>
      </div>

      <style>{`
        @keyframes equalizerBar {
          0% { height: 4px; }
          100% { height: 16px; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .dock-label { display: none; }
        }
      `}</style>
    </aside>
  );
}
