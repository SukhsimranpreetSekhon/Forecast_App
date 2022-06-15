import { Injectable } from '@angular/core';
import { CITIES } from 'src/app/mock/cities.mock';
import { City } from '../interfaces/city';
import { FORECASTS } from '../../mock/forecasts.mock';
import { Forecast } from '../interfaces/forecast';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  getCities(): Array<City> {
    return CITIES; // method returns an array of cities
  }
  getForecast(cityId: number): Forecast {
    // found: Forecast = FORECASTS.find((forecast) => forecast.cityId === cityId);
    // if (undefined) {
    //   return FORECASTS['0'];
    // } else {
    //   return FORECASTS.find((forecast) => forecast.cityId === cityId);
    // }
    // return FORECASTS.find(e => e.cityId === cityId);
    return FORECASTS[cityId];
  }
}
