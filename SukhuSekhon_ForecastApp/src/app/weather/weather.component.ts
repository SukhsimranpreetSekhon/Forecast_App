import { Component, OnInit } from '@angular/core';
import { City } from '../core/interfaces/city';
import { CityService } from '../core/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  cities: Array<City> = []; // create empty array of cities
  // chosenCity!: number; // create variable for saving current (chosen) city

  constructor(private cityService: CityService) {} // inject cityService to private variable

  ngOnInit() {
    this.cities = this.cityService.getCities(); // on component initialize get data from service to local variable
  }

  // onChooseCity(index: number): void {
  //   // create method, which will handle choose of the city
  //   console.log(index);
  //   this.chosenCity = index;
  // }
}
