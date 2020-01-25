import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

//importar map 
import { map}  from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(
    private _httpClient:HttpClient
  ) { }
  
  //metodo para centralizar la api
  getQuery(query:string){
    //el query es la parte especifica de la api que se manda desde los metodos del servicio como parámetro
    const url =`https://api.spotify.com/v1/${query}`;

    const headers=new HttpHeaders({
      Authorization:'Bearer BQC6UTNPNUZkvY64VaJ0u2xpPHIK5Li0dnZ3FxZdk5GOB7q8UV3luvwoqKur0ieroaA5hnwEQzv23GsIkosLOc8h2-QOwyAEG4Yk0w1-d5OUjn7KWdJlbGo5crNDTnIXgwnWb8TVzTsJSrnGGbDhJySVuNQZAa0EMxqvOw'
    });

    return this._httpClient.get(url,{headers});
  }
  
  //metodo para obtener los nuevos lanzamientos
  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe(map(data=> data['albums'].items ));
                           ;
  }

  
  //buscar artistas 
  getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data=>data['artists'].items)); 
  }

   //buscar  un artista
   getArtista(id:string){

    return this.getQuery(`artists/${id}`);
    //.pipe(map(data=>data['artists'].items)); 
  }


  //metodo para traer las mejores 10 canciones de un artista
  getTopTracks(id:string){
    
    return  this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe(map(data=> data['tracks']));
  }


}
