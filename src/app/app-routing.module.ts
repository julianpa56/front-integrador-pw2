import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarPeliculaComponent } from './componentes/cargar-pelicula/cargar-pelicula.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { CatalogoPeliculasComponent } from './componentes/catalogo-peliculas/catalogo-peliculas.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { UsuarioAdministradorGuard } from './guards/usuario-administrador.guard';
import { UsuarioLoggeadoGuard } from './guards/usuario-loggeado.guard';
import { FavoritasComponent } from './componentes/favoritas/favoritas.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';

const routes: Routes = [
  {path:'iniciar-sesion', component: IniciarSesionComponent, },
  {path:'cargar-pelicula', component: CargarPeliculaComponent, canActivate: [UsuarioAdministradorGuard] },
  {path:'editar-pelicula/:id', component: CargarPeliculaComponent, canActivate: [UsuarioAdministradorGuard] },
  {path:'crear-cuenta', component: RegistrarseComponent},
  {path:'catalogo', component: CatalogoPeliculasComponent, canActivate: [UsuarioLoggeadoGuard]},
  {path:'detalles/:id', component: DetallesComponent, canActivate: [UsuarioLoggeadoGuard]},
  {path:'mi-perfil', component: EditarPerfilComponent, canActivate: [UsuarioLoggeadoGuard]},
  {path:'favoritas', component: FavoritasComponent, canActivate: [UsuarioLoggeadoGuard]},
  {path:'', component: IniciarSesionComponent},
  {path:'**', redirectTo: '/'},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
