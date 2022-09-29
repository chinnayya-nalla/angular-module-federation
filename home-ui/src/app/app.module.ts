import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecureLayoutModule } from './modules/layout/secure-layout/secure-layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecureLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
