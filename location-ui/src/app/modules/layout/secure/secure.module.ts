import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { SharedModule } from '../../shared/module/shared.module';
import { EuropeComponent } from '../../feature/secure/locations/europe/europe.component';
import { AsiaComponent } from '../../feature/secure/locations/asia/asia.component';


@NgModule({
  declarations: [
    SecureComponent,
    EuropeComponent,
    AsiaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
