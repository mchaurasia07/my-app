import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app.routing.module';



import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './Hero.service';
import {DashboardComponent}     from './dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
