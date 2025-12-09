// Using Web Audio API to generate simple, subtle tones
class SoundService {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioContext = new AudioContextClass();
      }
    }
  }

  private playTone(frequency: number, type: OscillatorType, duration: number, volume: number = 0.05) {
    if (!this.audioContext) return;
    
    // Resume context if suspended
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    
    // Very quick attack and release for a "pop" or "click" feel
    const now = this.audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(volume, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    oscillator.stop(now + duration + 0.1);
  }

  playClick() {
    // A very subtle, short tick (like a mouse micro-switch)
    // Sine wave, high pitch, extremely short
    this.playTone(2000, 'sine', 0.03, 0.02);
  }

  playNav() {
    // A soft, low "thwip" for page turns/navigation
    // Triangle wave gives it a bit of body without being harsh
    this.playTone(600, 'triangle', 0.05, 0.03);
  }

  playError() {
    // A softer "bonk"
    this.playTone(150, 'sine', 0.15, 0.1);
  }

  playStartup() {
    // A subtle, pleasing chime
    if (!this.audioContext) return;
    if (this.audioContext.state === 'suspended') this.audioContext.resume();

    const now = this.audioContext.currentTime;
    const notes = [330, 440, 554]; // A Major triad ish
    
    notes.forEach((freq, i) => {
       const osc = this.audioContext!.createOscillator();
       const gain = this.audioContext!.createGain();
       osc.type = 'sine';
       osc.frequency.value = freq;
       
       gain.gain.setValueAtTime(0, now);
       gain.gain.linearRampToValueAtTime(0.05, now + i * 0.05 + 0.05);
       gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 1.0);
       
       osc.connect(gain);
       gain.connect(this.audioContext!.destination);
       osc.start(now + i * 0.05);
       osc.stop(now + i * 0.05 + 1.0);
    });
  }

  playMoof() {
    // Simulating "Moof!" - a rough, low square wave sliding down
    if (!this.audioContext) return;
    if (this.audioContext.state === 'suspended') this.audioContext.resume();

    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.4);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start();
    osc.stop(now + 0.5);
  }
}

export const soundService = new SoundService();