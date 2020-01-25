import { Component, OnInit } from "@angular/core";
import { HeroeService } from "../../services/heroe.service";
import { HeroeModel } from "../../models/heroe.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando: boolean = false;

  constructor(private heroesServices: HeroeService) {}

  
  ngOnInit() {
    this.cargando = true;
    this.heroesServices.getHeroes().subscribe(resp => {
      console.log(resp);
      this.cargando = false;
      this.heroes = resp;
    });
  }

  //metodo para borarr el erroe
  borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: "Está seguro?",
      text: `Desea eliminar a ${heroe.nombre}`,
      type: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        this.heroes.splice(i, 1); //pide desde que pocision va a borrar y cuantos va a borrar

        this.heroesServices.borrarHeroe(heroe.id).subscribe();
      }
    });
  }
}
