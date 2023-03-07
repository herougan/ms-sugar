import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './pages/tableau/tableau.component';
import { StarboardComponent } from './pages/starboard/starboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    StarboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
