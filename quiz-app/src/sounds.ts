// Base64 encoded short audio clips for better portability
const SOUNDS = {
  correct: 'data:audio/mp3;base64,//OEZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAKAAAIyAAGBgYGBgYGBgYcHBwcHBwcHBw4ODg4ODg4ODhTU1NTU1NTU1NsbGxsbGxsbGyEhISEhISEhISenp6enp6enp62tra2tra2trbPz8/Pz8/Pz8/o6Ojo6Ojo6Oj///////////8AAAA5TEFNRTMuOTlyAm4AAAAALgkAABRGJAN7TgAARgAACMgaJ6RDAAAAAAAAAAAAAAAAAAAA//OEZAANCD9CBc08AFB4OkLfmsABVTJYcKy/TC3KBIJBsMwwzh9EglDOHDgQBHygIAgCAIA+D4f/lAQBAEAQDHygIAgCAIf/EMwfP//5Q/iAIAgCHwQBAEAQDH/8o+H/KAgCAIAgD4Pg+D4f///+sEAQBEOIYRmYRhGwjCNFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  incorrect: 'data:audio/mp3;base64,//OEZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAJAAAIyAAGBgYGBgYGBgYaGhoaGhoaGho1NTU1NTU1NTVOTk5OTk5OTk5nZ2dnZ2dnZ2eAgICAgICAgICZmZmZmZmZmZmysrKysrKysrLMzMzMzMzMzMzl5eXl5eXl5eX///////////8AAAA5TEFNRTMuOTlyAm4AAAAALiEAABRGJANkTgAARgAACMgWLqRjAAAAAAAAAAAAAAAAAAAA//OEZAANCD9CBc08AFBwOkK/msABQzVYcQ0rTC3KBIJBsMwwzh9EglDOHDgQBHygIAgCAIA+D4f/lAQBAEAQDHygIAgCAIf/EMwfP//5Q/iAIAgCHwQBAEAQDH/8o+H/KAgCAIAgD4Pg+D4f///+sEAQBEOIYRmYRhGwjCNFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  tick: 'data:audio/mp3;base64,//OEZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAIAAAI8AAFBQUFBQUFBQUPDw8PDw8PDw8YGBgYGBgYGBgiIiIiIiIiIiIsLCwsLCwsLCw2NjY2NjY2Njb///////////8AAAA5TEFNRTMuOTlyAm4AAAAALiUAABRGJAOATgAARgAACPAeQbRDAAAAAAAAAAAAAAAAAAAA//OEZAANCD9CBc08AFBwOkLfmsABQzVYcQ0rTC3KBIJBsMwwzh9EglDOHDgQBHygIAgCAIA+D4f/lAQBAEAQDHygIAgCAIf/EMwfP//5Q/iAIAgCHwQBAEAQDH/8o+H/KAgCAIAgD4Pg+D4f///+sEAQBEOIYRmYRhGwjCNFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  victory: 'data:audio/mp3;base64,//OEZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAALAAAL8AAFBQUFBQUFBQUQEBAQEBAQEBAbGxsbGxsbGxtAQEBAQEBAQEBQUFBQUFBQUFBgYGBgYGBgYGBwcHBwcHBwcHCAgICAgICAgICQkJCQkJCQkJD///////////8AAAA5TEFNRTMuOTlyAm4AAAAALjUAABRGJAOUTgAARgAAC/A0F8RDAAAAAAAAAAAAAAAAAAAA//OEZAANCD9CBc08AFBwOkLfmsABQzVYcQ0rTC3KBIJBsMwwzh9EglDOHDgQBHygIAgCAIA+D4f/lAQBAEAQDHygIAgCAIf/EMwfP//5Q/iAIAgCHwQBAEAQDH/8o+H/KAgCAIAgD4Pg+D4f///+sEAQBEOIYRmYRhGwjCNFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
};

class SoundManager {
  private audioContext: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Initialize audio context on user interaction
    document.addEventListener('click', () => {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    }, { once: true });
  }

  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (this.isMuted || !this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.start();
    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playSound(soundType: 'correct' | 'incorrect' | 'tick' | 'victory') {
    if (this.isMuted || !this.audioContext) return;

    switch (soundType) {
      case 'correct':
        this.playTone(880, 0.2); // High pitch
        break;
      case 'incorrect':
        this.playTone(220, 0.2, 'square'); // Low pitch
        break;
      case 'tick':
        this.playTone(440, 0.1); // Middle pitch
        break;
      case 'victory':
        // Play a short victory sequence
        this.playTone(523.25, 0.1); // C
        setTimeout(() => this.playTone(659.25, 0.1), 100); // E
        setTimeout(() => this.playTone(783.99, 0.1), 200); // G
        break;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
  }
}

export const soundManager = new SoundManager(); 