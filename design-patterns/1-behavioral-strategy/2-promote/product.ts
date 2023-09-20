import {PromoteStrategy} from './PromoteStrategy';

export abstract class Product {
  price: number;
  promoteStrategy: PromoteStrategy;

  setPrice(priceParam: number): void {
    this.price = priceParam;
  }

  doPromote(): number {
    return this.promoteStrategy.discount(this.price);
  }

  setPromote(promoteParam: PromoteStrategy): void {
    this.promoteStrategy = promoteParam;
  }
}