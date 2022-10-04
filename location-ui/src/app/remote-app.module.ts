import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './modules/shared/module/shared.module';
import { SecureModule } from './modules/layout/secure/secure.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SecureModule
  ]
})
export class RemoteAppModule { }
