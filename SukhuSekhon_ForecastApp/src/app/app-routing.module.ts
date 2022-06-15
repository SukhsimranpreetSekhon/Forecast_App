import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule } from './weather/weather.module';

const routes: Routes = [
  { path: 'weather', loadChildren: () => WeatherModule },
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
