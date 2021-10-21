import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  nombre: string = 'Pikachu';
  ptsAtaque: number = 100;

  obtenerNombrePuntos(): string {
    return `${this.nombre} - ${this.ptsAtaque}`;
  }

  get nombreMayus(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre() {
    this.nombre = 'Charizard';
  }

  cambiarPts() {
    this.ptsAtaque = 68684956;
  }
}
