import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeroeModel } from "../models/heroe.model";
import { map, delay } from "rxjs/operators";
import { del } from "selenium-webdriver/http";

@Injectable({
  providedIn: "root"
})
export class HeroeService {
  constructor(private http: HttpClient) {}

  private url = "https://app-login-7eedf.firebaseio.com";

  //metodo para borrar el heroe
  borrarHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((res: any) => {
        heroe.id = res.name; //la respuesta es el id de firebase
        return heroe;
      })
    );
  }

  //metodo para actualizar
  actualizarHeroe(heroe: HeroeModel) {
    //almacenar todo el heroe en una constante
    const tempHeroe = {
      ...heroe
    };

    //ahora se borra el id del heroe temporal
    delete tempHeroe.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, tempHeroe);
  }

  //obtener un heroe
  getHeroe(id: string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  //obtener heroes
  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map(resp => {
        return this.crearArreglo(resp);
      }),
      delay(0) //relenteriza la respuesta en milisegundos
    );
  }

  //funcion que pasa por el map cuando se traen todos los heroes
  private crearArreglo(heroesObj: Object) {
    const heroes: HeroeModel[] = [];

    if (heroesObj === null) {
      return [];
    }

    //tranformar la data en un array de objetos para poder ser iterable en el html
    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    return heroes;
  }
}
