import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { HeaderComponent } from './header/header.component';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../../shared/module/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SecureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
