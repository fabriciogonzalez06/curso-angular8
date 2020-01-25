export class Marcador {
  lat: number;
  lng: number;
  titulo: string = "sin titulo";
  desc: string = "sin descripcion";

  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}
