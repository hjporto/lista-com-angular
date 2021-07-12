import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComAngularBootstrap } from './lista/lista-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComAngularBootstrap
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
