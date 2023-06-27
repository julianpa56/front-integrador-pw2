import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CargarPeliculaComponent } from './componentes/cargar-pelicula/cargar-pelicula.component';
import { AppRoutingModule } from './app-routing.module';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { CatalogoPeliculasComponent } from './componentes/catalogo-peliculas/catalogo-peliculas.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoritasComponent } from './componentes/favoritas/favoritas.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    CargarPeliculaComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    CatalogoPeliculasComponent,
    EditarPerfilComponent,
    FavoritasComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
