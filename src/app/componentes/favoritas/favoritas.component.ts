import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritaServiceService } from 'src/app/services/favorita-service/favorita-service.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent {

  favoritaSeleccionada : any = null
  favoritas : any;
  usuario : any = null
  cambioCorrecto = false;
  errorOcurrido = false

  constructor(
    private _favoritasService : FavoritaServiceService,
    private _usuarioService : UsuarioServiceService,
    private _router : Router
  ){}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!)
    this.obtenerFavoritas()
  }

  seleccionarFavorita(favorita : any){
    this.favoritaSeleccionada = favorita
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


  obtenerFavoritas(){
    this._favoritasService.obtenerFavoritas(this.usuario.id_usuario).subscribe({
      next: (favoritas) => {
        this.favoritas = favoritas
        console.log(favoritas)
      },
      error: (error) => {console.log(error)}
    })
  }
}
