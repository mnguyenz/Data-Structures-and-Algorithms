export interface SoundBehavior {
  sound(): void;
}

class SoundMute implements SoundBehavior {
  sound(): void {
    console.log("Silent!");
  }
}

export class SoundQuack implements SoundBehavior {
  sound(): void {
    console.log("Quack Quack Quack!");
  }
}

class SoundBeep implements SoundBehavior {
  sound(): void {
    console.log("Beep Beep Beep!");
  }
}