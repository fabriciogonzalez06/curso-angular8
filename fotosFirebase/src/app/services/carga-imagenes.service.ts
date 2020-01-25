import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FileItem } from "../models/file-item.model";
import { async } from "@angular/core/testing";

@Injectable({
  providedIn: "root"
})
export class CargaImagenesService {
  constructor(private db: AngularFirestore) {}

  private CARPETA_IMAGENES = "img";

  //subir la imagen a firebase
  cargarImagenesFirebase(imagenes: FileItem[]) {
    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (item.progreso = snapshot.bytesTransferred / snapshot.totalBytes),
        error => console.error("error al subir ", error),
        async () => {
          console.log("imagen cargado correctamente");
          item.url = await uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          //llamar al metodo privado para subir la imagne
          this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
        }
      );
    }
  }

  private guardarImagen(imagen: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
