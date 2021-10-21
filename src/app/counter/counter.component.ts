import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  title: string = 'Angular';
  numero: number = 0;
  
  base: number = 5;

  // add() {
  //   this.numero += 1;
  // }

  // sub() {
  //   this.numero -= 1;
  // }

  transform(value: number): void {
    this.numero += value;
  }

}
