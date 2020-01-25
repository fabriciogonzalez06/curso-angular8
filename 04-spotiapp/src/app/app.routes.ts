import  { Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { SearchComponent} from './components/search/search.component';
import {ArtistaComponent} from './components/artista/artista.component';
import { NavbarComponent} from './components/shared/navbar/navbar.component';

export const ROUTES:Routes=[

    {path:'home',component: HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'artist/:id',component: ArtistaComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'**',component:HomeComponent}

];
