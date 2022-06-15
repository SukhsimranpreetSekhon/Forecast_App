import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather.component';
import { WeatherDetailsModule } from './weather-details/weather-details.module';

const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherComponent,
    children: [
      {
        path: 'details/:id',
        loadChildren: () => WeatherDetailsModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(weatherRoutes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
