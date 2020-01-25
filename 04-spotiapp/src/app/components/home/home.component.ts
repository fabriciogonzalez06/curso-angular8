import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public nuevasCanciones:any[]=[];
  public loading:boolean;
  public error:boolean;
  public mensajeError;

  constructor( private _spotify:SpotifyService) {
  
    this.loading=true;
    this.error=false;

    this._spotify.getNewReleases()
      .subscribe(data =>{
        //console.log(data.albums.items);
        this.nuevasCanciones=data;
        this.loading=false;
      },
      err=>{
        this.mensajeError=err.error.error.message;
        this.error=true;
        this.loading=false;
      });
    
      
   }




  ngOnInit() {
    
  }

}
