import { Component, OnInit } from '@angular/core';

//importar servicio deseos services
import { DeseosService} from '../../services/deseos.service';

//importar para obtener el id que viene por la direccion url
import {ActivatedRoute} from '@angular/router'

//importar lista del modelo
import {Lista} from '../../models/lista.model';

//importar lista item
import {ListaItem} from '../../models/lista-items.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  public lista:Lista;
  public nombreItem='';

  constructor(
    private _deseosService:DeseosService,
    private _route:ActivatedRoute
  ) {
      
    //obtener el id que viene por la url
    const listaId=this._route.snapshot.paramMap.get('listaId');

    this.lista=_deseosService.obtenerLista(listaId);
    console.log(this.lista);
   }

  ngOnInit() {
  }
  
  //agrega un item a la lista
agregarItem(){
  if(this.nombreItem.length===0){
      return;
  }

  //agregar nuevo item de esta lista 
  const nuevoItem=new ListaItem(this.nombreItem);
  this.lista.items.push(nuevoItem);
  this.nombreItem='';
  //guarda en el localstorage porque viene por referencia 
  this._deseosService.guardarStorage();
}

//cambiar estado de el item
cambioCheck(item:ListaItem){
  //console.log(item);
  //buscar cuantas tareas no ha sido terminadas 
  //devuelve las tareas que no han sido completadas de una lista
  const pendientes= this.lista.items.filter(itemData=> !itemData.completado)
                              .length;
  

    if(pendientes===0){
      this.lista.terminadaEn=new Date();
      this.lista.terminada=true;
    }else{
      this.lista.terminadaEn=null;
      this.lista.terminada=false;
    }

  //guardar en el localStorage 
  this._deseosService.guardarStorage();
}

//metodo para borrar un elemento de la lista 
borrar(i:number){

  //desde que indice quiero borrar y cuantos quiro borrar
  this.lista.items.splice(i,1);

  this._deseosService.guardarStorage();
}


}
