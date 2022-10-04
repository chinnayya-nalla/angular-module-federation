import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsiaComponent } from './asia/asia.component';
import { EuropeComponent } from './europe/europe.component';

const routes: Routes = [
  {
    path: 'asia',
    component: AsiaComponent
  },
  {
    path: 'europe',
    component: EuropeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
