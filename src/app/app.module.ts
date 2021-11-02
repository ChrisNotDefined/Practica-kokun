import { SaiyajinModule } from './saiyajin/saiyajin.module';
import { CounterModule } from './counter/counter.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    CounterModule,
    SaiyajinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
