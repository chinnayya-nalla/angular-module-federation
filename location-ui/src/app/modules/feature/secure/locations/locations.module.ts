import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';

import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';
import { SharedModule } from 'src/app/modules/shared/module/shared.module';


@NgModule({
  declarations: [
    AsiaComponent,
    EuropeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
