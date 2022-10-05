import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../../shared/module/shared.module';
import { SearchComponent } from '../../feature/secure/locations/search/search.component';
import { CreateComponent } from '../../feature/secure/locations/create/create.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    SecureComponent,
    SearchComponent,
    CreateComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
