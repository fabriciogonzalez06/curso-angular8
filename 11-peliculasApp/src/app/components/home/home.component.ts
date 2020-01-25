import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _ps: PeliculasService) {}
  public populares: any[] = [];

  ngOnInit() {
    this.getPopulares();
  }

  //metodo para traer las peliculas mas populares
  getPopulares() {
    this._ps.getPopulares().subscribe(res => {
      this.populares = res;
    });
  }
}
