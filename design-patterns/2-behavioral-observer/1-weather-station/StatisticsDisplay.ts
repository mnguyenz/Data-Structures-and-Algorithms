import {Observer} from './Observer';
import {Display} from './Display';
import { WeatherData } from './WeatherData';

export class StatisticsDisplay implements Observer, Display {
  private minTemperature: number = Number.MAX_SAFE_INTEGER;
  private maxTemperature: number = Number.MIN_SAFE_INTEGER;
  private weatherData: WeatherData;

  constructor(weatherDataParam: WeatherData) {
    this.weatherData = weatherDataParam;
    weatherDataParam.registerObserver(this);
  }
    
  update(temperature: number): void {
    if (temperature < this.minTemperature) {
      this.minTemperature = temperature;
    }
    if (temperature > this.maxTemperature) {
      this.maxTemperature = temperature;
    }
    this.display();
  }

  display(): void {
    console.log(`Min temperature: ${this.minTemperature} F degree
Max temperature: ${this.maxTemperature} F degree`);
  }
}