import { Observer } from './Observer';

export interface Subject {
  registerObserver(observerParam: Observer): void;
  removeObserver(observerParam: Observer): void;
  notifyObserver(): void;
}
