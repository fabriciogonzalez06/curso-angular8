import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtoCompletado',
  pure:false
})
export class FiltoCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completado:boolean=true): Lista[] {
    return listas.filter(lista=>lista.terminada===completado);
  }
 

}
