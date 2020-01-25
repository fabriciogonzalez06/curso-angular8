import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      /* .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      } */
    `
  ]
})
export class TemplateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: ""
  };

  sexos: string[] = ["Hombre", "Mujer", "Otro"];
  paises = [
    {
      codigo: "CRI",
      nombre: "Costa rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ];
  guardar(forma: NgForm) {
    /* console.log("posteado"); */
    console.log("ngForm", forma);
    /*  console.log("value", forma.value) */
  }
}
