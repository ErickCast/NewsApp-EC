import {Routes} from "@angular/router";
import { GeneralComponent } from './components/general/general.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

export const ROUTES:Routes=[
    {path:"general", component:GeneralComponent},
    {path:"noticia/:categoria", component:NoticiasComponent},
    {path:"", pathMatch:"full", redirectTo:"general"},
    {path:"**", pathMatch:"full", redirectTo:"general"},

    
];