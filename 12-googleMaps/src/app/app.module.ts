import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { MapaComponent } from "./components/mapa/mapa.component";

//modulo de google maps
import { AgmCoreModule } from "@agm/core";
import { MapaEditarComponent } from "./components/mapa/mapa-editar.component";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  entryComponents: [MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ""
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
