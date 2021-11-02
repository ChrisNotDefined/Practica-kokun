import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GokuComponent } from './goku/goku.component';

@NgModule({
    declarations: [GokuComponent],
    exports: [GokuComponent],
    imports: [CommonModule],
})
export class SaiyajinModule {}