import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports:      [ BrowserModule, FullCalendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
