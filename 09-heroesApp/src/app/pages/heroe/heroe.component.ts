import { Component, OnInit } from "@angular/core";
import { HeroeModel } from "src/app/models/heroe.model";
import { NgForm } from "@angular/forms";
import { HeroeService } from "../../services/heroe.service";
import Swal from "sweetalert2";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();

  constructor(
    private heroeService: HeroeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //obtener el parametro que viene por la url
    const id = this.route.snapshot.paramMap.get("id");

    //peguntar si es diferente de nuevo
    if (id !== "nuevo") {
      this.heroeService.getHeroe(id).subscribe((resp: HeroeModel) => {
        //falta el id
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  //metodo guardar
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log("Formulario no valido");
      console.log(form);
      return;
    }

    Swal.fire({
      title: "Espere..",
      text: "Guardando informacion",
      type: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();

    //crear tipo observable para recibir la peticion
    let peticion: Observable<any>;

    if (this.heroe.id) {
      //si ya hay id actualizar
      peticion = this.heroeService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroeService.crearHeroe(this.heroe);
    }

    //manipular el callback de cualquier de los dos metodos anterioes
    peticion.subscribe(res => {
      Swal.fire({
        title: this.heroe.nombre,
        text: "se actualizo correctamente",
        type: "success"
      });

      //redireccionar a heroes
      this.router.navigateByUrl("/heroes");
    });
  }
}
