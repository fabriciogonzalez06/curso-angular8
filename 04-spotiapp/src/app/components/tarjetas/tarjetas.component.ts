import { Component, OnInit,Input } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {
  
  @Input() items:any[]=[];

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }
  
  //metodo para mandar el artista 
  verArtista(item:any){
    
    let artistaId;

    //ver si el si se trae desde el search o desde el home porque tienen diferente array que manda
    //la api de spotify

    if(item.type==='artist'){
      artistaId=item.id;
    }else{
      //esta es la ruta cuando es un almbum
      artistaId=item.artists[0].id;
    }

    //console.log(artistaId);
    this._router.navigate(['/artist',artistaId]);
  }
}
