import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltoCompletadoPipe } from './filto-completado.pipe';



@NgModule({
  declarations: [FiltoCompletadoPipe],
  imports: [
    CommonModule
  ],
  exports:[FiltoCompletadoPipe]
})
export class PipesModule { }
