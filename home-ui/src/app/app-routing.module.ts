import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/feature/secure/home/home.component';
import { NotFoundComponent } from './modules/feature/secure/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // Way 1 => Loading using Declarations
  {
    path: 'locations',
    loadChildren: () => import('locations/LocationsModule').then((module) => module.LocationsModule)
  },
  // Way 2 => Loading by Providing URL in Routing
  {
    path: 'contacts',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'contacts',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './ContactUsModule'
      }).then((module) => {
        return module.ContactUsModule;
      })
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
