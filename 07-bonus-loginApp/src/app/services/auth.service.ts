import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyAdwy0sjAjqvvJpLsennygAoy39iH0Ey_8 ";

  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  //Crear nuevos usuarios
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  //metodo para salir
  logout() {
    localStorage.removeItem("token");
  }

  //login
  login(usuario: UsuarioModel) {
    //data que debe recibir el backenck de firebase
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    //mandar url y la data
    return this.http
      .post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(
        map(resp => {
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      );
  }

  //nuevo usuario
  nuevoUsuario(usuario: UsuarioModel) {
    //data que debe recibir el backenck de firebase
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    //mandar url y la data
    return this.http
      .post(`${this.url}signUp?key=${this.apiKey}`, authData)
      .pipe(
        map(resp => {
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      );
  }

  //metodo para guardar token
  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", this.userToken);

    //guardar fecha que fue capturado el token
    let hoy = new Date();

    //adelantar el tiempo que dura el token
    hoy.setSeconds(3600);
    localStorage.setItem("expira", hoy.getTime().toString());
  }

  //metodo para leer token
  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }
  }

  //metodo para pasar al guard
  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem("expira"));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
