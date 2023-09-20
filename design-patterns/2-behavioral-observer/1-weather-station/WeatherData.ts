import {Observer} from './Observer';
import {Subject} from './Subject';

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  registerObserver(observerParam: Observer): void {
    this.observers.push(observerParam);
  }
  removeObserver(observerParam: Observer): void {
    this.observers.forEach( (observer, index) => {
      if (observer === observerParam) {
        this.observers.splice(index, 1);
      } 
    });
  }
  notifyObserver(): void {
    this.observers.forEach( (observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }
 
  measurementsChanged(): void {
    this.notifyObserver();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}