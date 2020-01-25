import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-paises",
  templateUrl: "./paises.component.html",
  styleUrls: ["./paises.component.css"]
})
export class PaisesComponent implements OnInit {
  constructor(private _paises: HttpClient) {}

  public paises: any = [];

  ngOnInit() {
    this._paises
      .get("https://restcountries.eu/rest/v2/lang/es")
      .subscribe(res => (this.paises = res));
  }

  drop(evento: CdkDragDrop<any>) {
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
