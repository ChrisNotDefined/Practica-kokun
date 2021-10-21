import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Angular';
  numero: number = 0;
  prev: number = 1;

  fibbnacci() {
    const nextPrev = this.numero;
    this.numero = this.numero + this.prev;
    this.prev = nextPrev;
  }
}
