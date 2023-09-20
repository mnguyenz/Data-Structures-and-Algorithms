import {Duck} from './Duck'
import {FlyLow} from './FlyBehavior'
import {FlyNoWay} from './FlyBehavior'
import {SoundQuack} from './SoundBehavior'

class NormalDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyLow();
    this.soundBehavior = new SoundQuack();
  }

  display(): void {
    console.log("I'm just a normal duck!");
  }
}

class NormalDuckTest {
  private normalDuck: Duck;
  NormalDuckTest(): void {
    this.normalDuck = new NormalDuck();
    this.normalDuck.display();
    this.normalDuck.doFly();
    this.normalDuck.setFlyBehavior(new FlyNoWay());
    this.normalDuck.doFly();
    this.normalDuck.doSound();
    this.normalDuck.swim();
  }
}

const duckTest = new NormalDuckTest;
duckTest.NormalDuckTest();