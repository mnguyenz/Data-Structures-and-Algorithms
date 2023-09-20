import {WeatherData} from './WeatherData';
import {CurrentConditionsDisplay} from './CurrentConditionsDisplay';
import {StatisticsDisplay} from './StatisticsDisplay';

export class WeatherStation {
  weatherData: WeatherData = new WeatherData();
  currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(this.weatherData);
  statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(this.weatherData);

  WeatherStationTest(): void {
    this.weatherData.setMeasurements(82, 70, 29.2);
    this.weatherData.setMeasurements(78, 90, 29.2);
    this.weatherData.setMeasurements(80, 65, 27.4);
  }
}

const weatherStationTest = new WeatherStation();
weatherStationTest.WeatherStationTest();