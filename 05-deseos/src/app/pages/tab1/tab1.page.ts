import { Component } from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public listas:any[]=[];
  

  constructor(
    public deseosService:DeseosService,
    private _router:Router,
    private _alertCtrl:AlertController
  ) {
    this.listas=this.deseosService.listas;
  }
  
  //metodo para agregar un item a la lista 

  async agregarLista(){
    //this._router.navigateByUrl('tabs/tab1/agregar');

    const alert = await this._alertCtrl.create({
      header: 'Nueva lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          placeholder:'Ingrese el nombre de la lista'
        }
      ],
      buttons: [{
        text:'Cancelar',
        role:'cancel',
        handler: ()=>{
          console.log('Cancelado');
        }
      },
    {
      text:'Crear',
      handler:(data)=>{
        console.log(data);
        //validar que la data no venga vacia
        if(data.titulo.length===0){
          //solo hacer un return y ya 
          return;
        }

        //sino esta vacio llamar al metodo agregar lista del servicio 
         const listaId= this.deseosService.agregarLista(data.titulo);
        
         //redirigir para agregar item a la nueva lista 
         this._router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
      }
    }]
    });

    alert.present();
  }

  //metodo para navegar a los items de la lista



}
