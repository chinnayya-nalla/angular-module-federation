import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';

import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';


@NgModule({
  declarations: [
    AsiaComponent,
    EuropeComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
