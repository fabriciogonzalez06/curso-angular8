import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VirtualComponent } from "./virtual/virtual.component";
import { DragComponent } from "./components/drag/drag.component";

import { HttpClientModule } from "@angular/common/http";

import { DragDropModule } from "@angular/cdk/drag-drop";

//scrolling
import { ScrollingModule } from "@angular/cdk/scrolling";
import { PaisesComponent } from "./components/paises/paises.component";

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
