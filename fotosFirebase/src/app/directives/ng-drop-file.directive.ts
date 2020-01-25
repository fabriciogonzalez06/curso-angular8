import { FileItem } from "../models/file-item.model";
import {
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from "@angular/core";

@Directive({
  selector: "[appNgDropFile]"
})
export class NgDropFileDirective {
  constructor() {}

  @Input() archivos: FileItem[] = [];

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  //emite un evento cuando la imagen esta encima
  @HostListener("dragover", ["$event"])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  //emite un evento cuando se quita algo que tiene encima
  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  //cuando suelta la data o hace drop
  @HostListener("drop", ["$event"])
  public onDrop(event: any) {
    //se obtiene la data
    const transferencia = this._getTranferencia(event);

    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);

    this._prevenirDetener(event);
    this.mouseSobre.emit(false);
  }

  //extraer los datos que estan en un objeto tipo filelist
  private _extraerArchivos(archivosLista: FileList) {
    //console.log(archivosLista);

    //pasar el objeto de fileList a un array para poder mandarlo
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const archivoTemporal = archivosLista[propiedad];

      const nuevoArchivo = new FileItem(archivoTemporal);
      this.archivos.push(nuevoArchivo);

      console.log(this.archivos);
    }
  }

  //metodo para obtener data porque los navegadores la tienen de diferente manera
  private _getTranferencia(event: any) {
    return event.dataTransfer
      ? event.dataTransfer
      : event.originalEvent.dataTransfer;
  }

  //validaciones

  private archivoPuedeSerCargado(archivo: File): boolean {
    if (
      !this._archivoYaFueDropeado(archivo.name) &&
      this.esImagen(archivo.type)
    ) {
      return true;
    } else {
      return false;
    }
  }

  //permite que no se carge la ruta del archivo al momento de soltar el drop
  private _prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  //verifica que el archivo no haya sido dropeado o agregado
  private _archivoYaFueDropeado(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log("archivo " + nombreArchivo + " ya esta agregado");
        return true;
      }
    }

    return false;
  }

  //verifica si es una imagen
  private esImagen(tipoArchivo: string): boolean {
    return tipoArchivo === undefined || tipoArchivo === ""
      ? false
      : tipoArchivo.startsWith("image");
  }
}
