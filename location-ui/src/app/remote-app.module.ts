import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './modules/shared/module/shared.module';
import { SecureModule } from './modules/layout/secure/secure.module';

import { MatSidenavService } from './modules/shared/service/mat-sidenav.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SecureModule,
    ReactiveFormsModule
  ],
  providers: [
    MatSidenavService
  ],
})
export class RemoteAppModule { }
