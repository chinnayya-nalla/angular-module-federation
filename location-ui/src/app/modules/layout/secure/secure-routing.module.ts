import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../feature/secure/home/home.component';
import { AsiaComponent } from '../../feature/secure/locations/asia/asia.component';
import { EuropeComponent } from '../../feature/secure/locations/europe/europe.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'asia',
        component: AsiaComponent
      },
      {
        path: 'europe',
        component: EuropeComponent
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
