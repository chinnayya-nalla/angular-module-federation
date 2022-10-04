import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'



@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
