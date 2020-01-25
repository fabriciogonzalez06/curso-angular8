import { Component, OnInit } from "@angular/core";
import { Marcador } from "../../models/marcador.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MapaEditarComponent } from "./mapa-editar.component";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  marcadores: Marcador[] = [];

  constructor(private _snack: MatSnackBar, public dialog: MatDialog) {
    /* const nuevoMarcador: Marcador = new Marcador(this.lat, this.lng);

    this.marcadores.push(nuevoMarcador); */

    this.obtenerMarcadores();
  }

  guardarMarcador(marcador) {
    const coor: { lat: number; lng: number } = marcador.coords;

    const nuevoMarcador: Marcador = new Marcador(coor.lat, coor.lng);

    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this._snack.open("Marcador agregado", "cerrar", { duration: 2000 });
  }

  borrarMarcador(i: number) {
    console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this._snack.open("Marcador borrado", "cerrar", { duration: 2000 });
  }

  guardarStorage() {
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }

  obtenerMarcadores() {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
  }

  async ngOnInit() {}

  editarMarcador(marcador: Marcador) {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: "250px",
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();

      this._snack.open("Marcador editado", "cerrar", { duration: 2000 });
    });
  }
}
