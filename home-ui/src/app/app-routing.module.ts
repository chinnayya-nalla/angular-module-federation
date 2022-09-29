import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/secure-layout/secure-layout.module').then((module) => module.SecureLayoutModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
