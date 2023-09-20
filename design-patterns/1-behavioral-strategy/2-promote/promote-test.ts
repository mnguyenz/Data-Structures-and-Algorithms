import {Product} from './Product'
import {PromoteNoSale} from './PromoteStrategy'
import {PromoteQuarter} from './PromoteStrategy'
import {PromoteHalf} from './PromoteStrategy'
import {Promote10102022} from './PromoteStrategy'

class TheBestComputer extends Product {
  constructor() {
    super();
    this.price = 0;
    this.promoteStrategy = new PromoteNoSale();
  }
}

class PromoteTest {
  private computer: Product;
  PromoteTest(): void {
    this.computer = new TheBestComputer();
    this.computer.setPrice(10000);
    console.log(`Original price is ${this.computer.price}`);
    console.log('Implement a 50% promote');
    this.computer.setPromote(new PromoteHalf());
    const promotePrice = this.computer.doPromote();
    console.log(`Promote price is ${promotePrice}`);
    console.log(`Original price is ${this.computer.price}`);
  }
}

const promoteTest = new PromoteTest;
promoteTest.PromoteTest();