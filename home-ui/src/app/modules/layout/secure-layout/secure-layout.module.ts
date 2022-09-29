import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SecureLayoutComponent } from './secure-layout.component';
import { SecureHeaderComponent } from './secure-header/secure-header.component';
import { SecureLayoutRoutingModule } from './secure-layout-routing.module';

@NgModule({
  declarations: [
    SecureHeaderComponent,
    SecureLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SecureLayoutRoutingModule
  ]
})
export class SecureLayoutModule { }
