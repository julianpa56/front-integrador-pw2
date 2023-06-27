import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritaServiceService } from 'src/app/services/favorita-service/favorita-service.service';
import { PeliculaServiceService } from 'src/app/services/pelicula-service/pelicula-service.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent {

  myModalEl = document.getElementById('myModal')
  favoritaSeleccionada : any = null
  catalogo : any[] = [];
  favoritasUsuario : any[] = [];
  usuario : any = null;
  cambioCorrecto = false;
  errorOcurrido = false

  constructor(
    private _peliculasService : PeliculaServiceService,
    private _favoritasService : FavoritaServiceService,
    private _usuarioService : UsuarioServiceService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!)
    this.obtenerFavoritas()
    this.obtenerPeliculas()
  }


  seleccionarFavorita(favorita : any){
    this.favoritaSeleccionada = favorita
  }

  agregarFavorita(){
    this.cambioCorrecto = false
    this.errorOcurrido = false
    const json = {
        id_pelicula: this.favoritaSeleccionada.id_pelicula,
        id_usuario: this.usuario.id_usuario
      }
    this._favoritasService.agregarFavorita(json).subscribe({
      next: () => {
        this.cambioCorrecto = true
        this.errorOcurrido = false
      },
      error: (error) => {
        this.cambioCorrecto = false
        this.errorOcurrido = true
        console.log(error)
      },
      complete: () => {this.ngOnInit()}
    })
  }

  eliminarFavorita(){
    this.cambioCorrecto = false
    this.errorOcurrido = false
    const json = {
      id_pelicula: this.favoritaSeleccionada.id_pelicula,
      id_usuario: this.usuario.id_usuario
    }
    this._favoritasService.eliminarFavorita(json).subscribe({
      next: () => {
        this.cambioCorrecto = true
        this.errorOcurrido = false
      },
      error: (error) => {
        this.cambioCorrecto = false
        this.errorOcurrido = true
        console.log(error)
      },
      complete: () => {this.ngOnInit()}
      
    })
  }

  eliminar(){

  }

  obtenerFavoritas(){
    this._favoritasService.obtenerFavoritas(this.usuario.id_usuario).subscribe({
      next: (favoritas) => {
        this.favoritasUsuario = favoritas
      },
      error: (error) => {console.log(error)}
    })
  }

  obtenerPeliculas(){
    this._peliculasService.obtenerPeliculas().subscribe({
      next: (peliculas) => {
        this.catalogo = peliculas
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  verificarFavorita(idPelicula : any){
    let coincidencia = false
    this.favoritasUsuario.forEach( pelicula => {
      if(pelicula.id_pelicula == idPelicula){
        coincidencia = true
      }
    } )
    return coincidencia
  }


}
