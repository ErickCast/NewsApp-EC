import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";

//ROUTES
import {ROUTES} from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { GeneralComponent } from './components/general/general.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticiasComponent,
    NavbarComponent,
    TarjetasComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
