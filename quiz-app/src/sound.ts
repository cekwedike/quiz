export class SoundManager {
  private isMuted: boolean = false;
  private sounds: { [key: string]: HTMLAudioElement } = {};

  constructor() {
    // Initialize sounds
    this.sounds = {
      correct: new Audio('/sounds/correct.mp3'),
      incorrect: new Audio('/sounds/incorrect.mp3'),
      victory: new Audio('/sounds/victory.mp3'),
      tick: new Audio('/sounds/tick.mp3')
    };
  }

  playSound(soundName: string): void {
    if (this.isMuted) return;
    const sound = this.sounds[soundName];
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Audio playback prevented');
      });
    }
  }

  toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const soundManager = new SoundManager(); 