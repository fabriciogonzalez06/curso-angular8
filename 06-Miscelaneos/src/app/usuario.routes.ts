
import {  Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

export const ROUTES_USUARIO: Routes = [
    {path:'nuevo',component:UsuarioNuevoComponent},
    {path:'editar',component:UsuarioEditarComponent},
    {path:'detalle',component:UsuarioDetalleComponent},
    {path:'**' ,pathMatch:'full',redirectTo:'nuevo'}
];

