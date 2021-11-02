import { Component } from '@angular/core';
interface Fase {
  nombre: string;
  poder: string;
  color: string;
}

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
})
export class GokuComponent {
  fases: Fase[] = [
    { nombre: 'Saiyajin', color: '#000', poder: 'Onda vital' },
    { nombre: 'Super saiyajin', color: '#FF0', poder: 'Teletransportación' },
    {
      nombre: 'Dios super Saiyajin',
      color: '#F00',
      poder: 'Fuerza divino',
    },
    {
      nombre: 'Super Saiyajin Blue',
      color: '#00F',
      poder: 'Super Kaioken',
    },
    {
      nombre: 'Super Saiyajin Rose',
      color: '#ff11f8',
      poder: 'Guadaña de la muerte',
    },
    { nombre: 'Ultra-Instinto', color: '#FFF', poder: 'Evasión automatica' },
    {
      nombre: 'Dios de la destrucción',
      color: '#F0F',
      poder: 'Destrucción',
    },
  ];

  onChange(faseIndex: string) {
    console.log(faseIndex);
    this.faseActual = this.fases[+faseIndex];
  }

  faseActual: Fase = this.fases[0];
}
