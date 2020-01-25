import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  listas:Lista[]=[];

  constructor() {
    //console.log('Servicio iniciado');
    this.cargarStorage();

    console.log(this.listas);
   }


   //metodo para agregar lista 
   agregarLista(titulo:string){
      const NuevaLista=new Lista(titulo);
      this.listas.push(NuevaLista);
      //guardar en el storage lo que tiene listas 
      this.guardarStorage();

      //retornar el id de la lista creada
      return NuevaLista.id;
     }


     //metodo para  borrar la lista 
     borrarLista(lista:Lista){

      //el filter devuelve un array en este caso devolvemos todos los id de las lista y la lista
      //mientras no sea la la lista con el id que queremos eliminar
        this.listas=this.listas.filter(listasData=> listasData.id!=lista.id)
        this.guardarStorage();
     }

    //metodo para obtener la lista 
    obtenerLista(id:string | number){
      id=Number(id);
      
      //buscar en el array listas a ver si hay una coincidencia 
    return   this.listas.find(listaData=>listaData.id===id);

    }

     //Guardar en storage
     guardarStorage(){
         localStorage.setItem('data',JSON.stringify(this.listas) );
     }


    //metodo para cargar el storage
    cargarStorage(){

      //ver si hay algo en el local storage
      if(localStorage.getItem('data')){
        this.listas=JSON.parse( localStorage.getItem('data'));
      }  
    }

}
