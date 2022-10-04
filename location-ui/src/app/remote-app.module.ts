import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsModule } from './modules/feature/secure/locations/locations.module';
import { SharedModule } from './modules/shared/module/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LocationsModule
  ]
})
export class RemoteAppModule { }
