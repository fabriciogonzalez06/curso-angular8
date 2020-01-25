import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  public loading:boolean;
  public artista:any={};
  public topTracks:any[]=[];

  constructor(
    private _route:ActivatedRoute,
    private _spotify:SpotifyService
  ) { }

  ngOnInit() {
    this.getArtista();
  }

  //obtener el id del artista mandado por parametro
  getArtista(){
      this.loading=true;
      this._route.params.subscribe(params=>{
         // console.log(params);
          //llamar al metodo para obtener las mejores canciones
          this.getTopTracks(params['id']);

          
         //buscar artista 
         this._spotify.getArtista(params['id']).subscribe(artista=>{
               // console.log(artista);
                this.artista=artista;
                this.loading=false;
         });

      });
  }

  //obtener las mejores canciones del artista
  getTopTracks(id:string){
    this._spotify.getTopTracks(id).subscribe(data=>{
      console.log(data);
      this.topTracks=data;
    });
  }



}
