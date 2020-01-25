import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {ROUTES_USUARIO} from './usuario.routes';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'usuarios/:10',component:UsuarioComponent,
  children:ROUTES_USUARIO
},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
