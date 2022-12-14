import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../../core/component/error/error.component';
import { HomeComponent } from '../../feature/secure/home/home.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        // Way 1 => Loading using Declarations
        path: 'locations',
        loadChildren: () => import('locations/RemoteAppModule').then((module) => module.RemoteAppModule) 
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
        component: ErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
