import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  private apiKey = "a30a292b743d66611efb39e9bcdb20db";
  private urlMoviedb = "https://api.themoviedb.org/3";

  private urlImage = "image.tmdb.org/t/p/w400";

  constructor(private _http: HttpClient) {}

  //obtener peliculas
  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this._http.jsonp(url, "callback").pipe(
      map((res: any) => {
        console.log(res.results);
        return res.results;
      })
    );
  }

  //metodo para buscar pelicula
  buscarPelicula(texto: any) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this._http.jsonp(url, "callback").pipe(
      map(res => {
        return res;
      })
    );
  }
}
