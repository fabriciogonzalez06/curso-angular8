import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Mensaje } from "../interfaces/mensaje.interface";
import { map } from "rxjs/operators";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Mensaje[] = [];
  usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log(user);

      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(proovedor: string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  //metodo para cargar los mensajes
  cargarMensajes() {
    //mandar querys despues del nombre de la coleccion
    this.itemsCollection = this.afs.collection<Mensaje>("chats", ref =>
      ref.orderBy("fecha", "desc").limit(5)
    );

    //escuchar cambios en las colecciones
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }

        /* this.chats = mensajes; */
      })
    );
  }

  //funcion agragar mensaje
  agregarMensaje(texto: string) {
    //falta el id
    let mensaje: Mensaje = {
      nombre: "demo",
      mensaje: texto,
      fecha: new Date().getTime()
    };

    //almacenar en angularfire
    return this.itemsCollection.add(mensaje);
  }
}
