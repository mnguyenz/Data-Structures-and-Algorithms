export interface PromoteStrategy {
  discount(price: number): number;
}

export class PromoteNoSale implements PromoteStrategy {
  discount(price: number): number {
    return price;
  }
}

export class PromoteQuarter implements PromoteStrategy {
  discount(price: number): number {
    return 0.25 * price;
  }
}

export class PromoteHalf implements PromoteStrategy {
  discount(price: number): number {
    return 0.5 * price;
  }
}

export class Promote10102022 implements PromoteStrategy {
  discount(price: number): number {
    return 0.7 * price;
  }
}
