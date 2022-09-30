import { loadRemoteModule } from '@angular-architects/module-federation';
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
        loadChildren: () => import('locations/Module').then((module) => module.AppModule) 
      },
      {
        // Way 2 => Loading by Providing URL in Routing
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureLayoutRoutingModule { }
