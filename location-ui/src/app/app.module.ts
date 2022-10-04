import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/feature/secure/home/home.component';
import { RemoteAppModule } from './remote-app.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemoteAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
