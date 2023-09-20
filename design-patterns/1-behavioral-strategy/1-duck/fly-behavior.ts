export interface FlyBehavior {
  fly(): void;
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I cannot fly!");
  }
}

export class FlyLow implements FlyBehavior {
  fly(): void {
    console.log("I can fly but only very limited!");
  }
}

class FlyHigh implements FlyBehavior {
  fly(): void {
    console.log("I can fly high!");
  }
}