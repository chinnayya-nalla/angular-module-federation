import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsiaComponent } from './asia/asia.component';

const routes: Routes = [
  {
    path: 'asia',
    component: AsiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
