import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../feature/common/not-found/not-found.component';
import { SecureLayoutComponent } from './secure-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    children: [
      {
        // Way 1 => Loading using Declarations
        path: 'locations',
        loadChildren: () => import('locations/LocationsModule').then((module) => module.LocationsModule) 
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureLayoutRoutingModule { }
