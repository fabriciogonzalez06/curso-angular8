import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-ng-class></app-ng-class>

  <p [appResaltado]="'blue'">
      Hola mundo
  </p>
  <app-ng-switch></app-ng-switch>


  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
