import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarPeliculaComponent } from './componentes/cargar-pelicula/cargar-pelicula.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { CatalogoPeliculasComponent } from './componentes/catalogo-peliculas/catalogo-peliculas.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { UsuarioAdministradorGuard } from './guards/usuario-administrador.guard';

const routes: Routes = [
  // {path:'*', component: , canActivate: []},
  {path:'iniciar-sesion', component: IniciarSesionComponent, },
  {path:'cargar-pelicula', component: CargarPeliculaComponent, canActivate: [UsuarioAdministradorGuard] },
  {path:'crear-cuenta', component: RegistrarseComponent},
  {path:'catalogo', component: CatalogoPeliculasComponent},
  {path:'mi-perfil', component: EditarPerfilComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
