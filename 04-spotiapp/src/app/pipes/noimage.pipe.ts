import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:any[]):string {
      
    //validar si la imagen que viene no esta vacia
    if(!images){
      return 'assets/img/noimage.png'
    }

    //si tiene algo devolver la imagen de la posicion 0 
    if(images.length>0){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png'
    }


  }

}
