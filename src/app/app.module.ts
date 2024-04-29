import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Siempre los Module irán en los imports
// Si tiene la palabra Module, va en los imports
