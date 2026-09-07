// High-Fidelity Ambient Music Player & F1 Nitro Sound Synthesizer
// Features studio-quality acoustic piano & ambient tracks with strict volume controls

export const CALM_TRACKS = [
  {
    id: 'daybreak',
    title: 'Daybreak',
    genre: 'Acoustic Piano & Strings',
    mood: 'Inspiring & Serene',
    src: '/audio/Daybreak.mp3',
  },
  {
    id: 'a-memory-away',
    title: 'A Memory Away',
    genre: 'Warm Nostalgic Piano',
    mood: 'Gentle & Melodic',
    src: '/audio/A_Memory_Away.mp3',
  },
  {
    id: 'leaving-millie',
    title: 'Leaving Millie',
    genre: 'Classical Acoustic Solo',
    mood: 'Deep Focus & Calm',
    src: '/audio/Leaving_Millie.mp3',
  },
  {
    id: 'lost-islands',
    title: 'Lost Islands',
    genre: 'Ethereal Ambient Chill',
    mood: 'Floating & Meditative',
    src: '/audio/Lost_Islands.mp3',
  },
];

class AudioEngine {
  constructor() {
    this.audio = null;
    this.isAmbientPlaying = false;
    this.isMuted = false;
    this.volume = 0.35;
    this.currentTrackIndex = 0;
    this.subscribers = new Set();
    this.f1Ctx = null;
    this.initAudioElement();
  }

  initAudioElement() {
    if (typeof window === 'undefined') return;
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.preload = 'auto';
      this.audio.loop = false;

      // When track finishes, smoothly advance to the next calm track
      this.audio.addEventListener('ended', () => {
        this.nextTrack();
      });

      // Update state if audio pauses externally
      this.audio.addEventListener('pause', () => {
        if (this.isAmbientPlaying && (this.isMuted || this.volume === 0)) {
          // Expected pause due to volume off or mute
        }
      });
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const state = this.getState();
    this.subscribers.forEach((cb) => cb(state));
  }

  getState() {
    return {
      isPlaying: this.isAmbientPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
      currentTrackIndex: this.currentTrackIndex,
      currentTrack: CALM_TRACKS[this.currentTrackIndex] || CALM_TRACKS[0],
      tracks: CALM_TRACKS,
    };
  }

  // =========================================================================
  // 1. Studio-Quality Ambient Audio Controls
  // =========================================================================
  startAmbient() {
    this.initAudioElement();
    if (!this.audio) return;

    // If volume is off or user is muted, do not play
    if (this.volume === 0 || this.isMuted) {
      this.isAmbientPlaying = false;
      this.notify();
      return;
    }

    const track = CALM_TRACKS[this.currentTrackIndex];
    if (!track) return;

    const currentSrc = this.audio.getAttribute('src');
    if (currentSrc !== track.src) {
      this.audio.src = track.src;
    }

    this.audio.volume = this.volume;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isAmbientPlaying = true;
          this.notify();
        })
        .catch(() => {
          // Handled by user gesture listeners in App.jsx
          this.isAmbientPlaying = false;
          this.notify();
        });
    }
  }

  stopAmbient() {
    if (this.audio) {
      this.audio.pause();
    }
    this.isAmbientPlaying = false;
    this.notify();
  }

  toggleAmbient() {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
    } else {
      if (this.isMuted) {
        this.isMuted = false;
      }
      if (this.volume === 0) {
        this.volume = 0.35;
      }
      this.startAmbient();
    }
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % CALM_TRACKS.length;
    this.loadAndPlayCurrent();
    return CALM_TRACKS[this.currentTrackIndex];
  }

  prevTrack() {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + CALM_TRACKS.length) % CALM_TRACKS.length;
    this.loadAndPlayCurrent();
    return CALM_TRACKS[this.currentTrackIndex];
  }

  setTrack(index) {
    if (index >= 0 && index < CALM_TRACKS.length) {
      this.currentTrackIndex = index;
      this.loadAndPlayCurrent();
    }
  }

  loadAndPlayCurrent() {
    const track = CALM_TRACKS[this.currentTrackIndex];
    if (!track || !this.audio) return;

    this.audio.src = track.src;
    if (this.isAmbientPlaying && !this.isMuted && this.volume > 0) {
      this.audio.volume = this.volume;
      this.audio.play().catch(() => {});
    }
    this.notify();
  }

  setVolume(vol) {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;

    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
    }

    // When volume is turned completely off (0%), STOP playback immediately
    if (clamped === 0) {
      this.stopAmbient();
    } else if (!this.isAmbientPlaying && !this.isMuted) {
      // If user turns up volume from 0, start playing
      this.startAmbient();
    }

    this.notify();
  }

  toggleMute() {
    this.isMuted = !this.isMuted;

    if (this.audio) {
      if (this.isMuted) {
        // When muted, immediately pause the audio
        this.audio.volume = 0;
        this.audio.pause();
        this.isAmbientPlaying = false;
      } else {
        // When unmuted, restore volume and resume playing
        if (this.volume === 0) {
          this.volume = 0.35;
        }
        this.audio.volume = this.volume;
        this.startAmbient();
      }
    }

    this.notify();
    return this.isMuted;
  }

  // =========================================================================
  // 2. F1 Turbo Hybrid Roar + Boost Teleport Sound Synthesis
  // =========================================================================
  playF1OverdriveSound() {
    if (this.isMuted || this.volume === 0) return;

    if (!this.f1Ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.f1Ctx = new AudioCtx();
    }
    if (this.f1Ctx.state === 'suspended') {
      this.f1Ctx.resume().catch(() => {});
    }

    const ctx = this.f1Ctx;
    const now = ctx.currentTime;

    const master = ctx.createGain();
    master.gain.setValueAtTime(this.volume, now);
    master.connect(ctx.destination);

    const engineOsc = ctx.createOscillator();
    const engineGain = ctx.createGain();
    const engineFilter = ctx.createBiquadFilter();

    engineOsc.type = 'sawtooth';
    engineOsc.frequency.setValueAtTime(110, now);
    engineOsc.frequency.exponentialRampToValueAtTime(740, now + 0.9);
    engineOsc.frequency.exponentialRampToValueAtTime(920, now + 1.4);

    engineFilter.type = 'lowpass';
    engineFilter.frequency.setValueAtTime(600, now);
    engineFilter.frequency.exponentialRampToValueAtTime(3800, now + 1.2);

    engineGain.gain.setValueAtTime(0.001, now);
    engineGain.gain.linearRampToValueAtTime(0.42, now + 0.2);
    engineGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    engineOsc.connect(engineFilter);
    engineFilter.connect(engineGain);
    engineGain.connect(master);

    engineOsc.start(now);
    engineOsc.stop(now + 1.9);

    const turboOsc = ctx.createOscillator();
    const turboGain = ctx.createGain();

    turboOsc.type = 'sine';
    turboOsc.frequency.setValueAtTime(1400, now);
    turboOsc.frequency.exponentialRampToValueAtTime(5200, now + 1.1);

    turboGain.gain.setValueAtTime(0.001, now);
    turboGain.gain.linearRampToValueAtTime(0.18, now + 0.4);
    turboGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

    turboOsc.connect(turboGain);
    turboGain.connect(master);

    turboOsc.start(now);
    turboOsc.stop(now + 1.7);

    const bufferSize = ctx.sampleRate * 1.5;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(900, now);
    noiseFilter.Q.setValueAtTime(2.0, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.001, now);
    noiseGain.gain.linearRampToValueAtTime(0.24, now + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);

    whiteNoise.start(now);
    whiteNoise.stop(now + 1.5);
  }
}

export const audioEngine = new AudioEngine();
