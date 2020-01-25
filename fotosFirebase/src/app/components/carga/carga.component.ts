import { Component, OnInit } from "@angular/core";
import { CargaImagenesService } from "../../services/carga-imagenes.service";
import { FileItem } from "../../models/file-item.model";

@Component({
  selector: "app-carga",
  templateUrl: "./carga.component.html",
  styles: []
})
export class CargaComponent implements OnInit {
  constructor(public _cargaImagenes: CargaImagenesService) {}

  archivos: FileItem[] = [];
  estaSobreElemento = false;

  ngOnInit() {}

  cargarImagenes() {
    this._cargaImagenes.cargarImagenesFirebase(this.archivos);
  }

  limpiarArchivos() {
    this.archivos = [];
  }
}
