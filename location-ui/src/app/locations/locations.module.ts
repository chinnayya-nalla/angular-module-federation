import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { AsiaComponent } from './asia/asia.component';

import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AsiaComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MatSidenavModule  
  ]
})
export class LocationsModule { }
