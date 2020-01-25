import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent implements OnInit {
  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "Angel",
      apellido: "Gonzalez"
    },
    correo: "angelGonzalez@gmail.com"
    /* pasatiempos: ["correr", "dormir", "jugar"] */
  };

  constructor() {
    /* console.log(this.usuario); */
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [Validators.required, this.noFabricio])
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
        )
      ]),
      pasatiempos: new FormArray([
        new FormControl("correr", Validators.required)
      ]),
      username: new FormControl("", Validators.required, this.existeUsuario),
      password1: new FormControl("", Validators.required),
      password2: new FormControl()
    });

    /*  this.forma.setValue(this.usuario); */

    //otra forma de añadir validaciones
    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    //estar pendiente a cambios
    /*    this.forma.valueChanges.subscribe(data => {
      console.log(data);
    }); */

    //estar pendiente a cambios de un control
    this.forma.controls["username"].valueChanges.subscribe(data => {
      console.log(data);
    });

    //estar pendiente al estado de un control
    this.forma.controls["username"].statusChanges.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}

  agregarPasatiempo() {
    (<FormArray>this.forma.controls["pasatiempos"]).push(
      new FormControl("dormir", Validators.required)
    );
  }

  //validacion asincrona para username
  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    //hacemos una promesa que retorne true o null, si es true es que algo anduvo mal
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "fabri06") {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });

    return promesa;
  }

  //funcion personalizado
  noFabricio(control: FormControl): { [s: string]: boolean } {
    if (control.value === "fabricio") {
      return {
        nofabricio: true
      };
    }

    return null;
  }

  //validacion para ver si las contraseñas son iguales, se pone en la segunda contraseña
  noIgual(control: FormControl): { [s: string]: boolean } {
    /*  let forma: any = this; */

    //no se pone this forma porque al llamar esta funcion se puso el bind(this.forma) debido al contexto
    if (control.value !== this.controls["password1"].value) {
      return {
        noiguales: true
      };
    }

    return null;
  }

  guardarCambios() {
    console.log(this.forma);
    /* this.forma.reset(); */
  }
}
