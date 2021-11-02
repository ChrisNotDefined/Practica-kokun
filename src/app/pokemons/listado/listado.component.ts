import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  lastDeleted: string | undefined;
  pokemons: string[] = ['Charizard', 'Charmeleon', 'Charmander'];

  deletePokemon(): void {
    this.lastDeleted = this.pokemons.pop();
  }
}
