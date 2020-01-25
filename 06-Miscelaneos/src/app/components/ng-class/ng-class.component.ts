import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html'
})
export class NgClassComponent implements OnInit {


  alerta:string='alert-danger'

  propiedades:Object={
    danger:false
  }
  constructor() { }


  //procesos asincronos
  loading:boolean=false;

  ejecutar(){
    
    this.loading=true;

    setTimeout(()=>this.loading=false,3000);

  }

  ngOnInit() {
  }

}
