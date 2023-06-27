import { Component } from '@angular/core';
import { UsuarioServiceService } from './services/usuario-service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integrador';

  usuario : any

  constructor (
    private _userService : UsuarioServiceService,
    private _router : Router
  ){}

  ngOnInit(): void {
    let user = localStorage.getItem('usuario')!= null ? JSON.parse(localStorage.getItem('usuario')!):null
    if (user) {this._userService.setUsuarioObservable(user)}
    this.getUserObs()
  }

  getUserObs(){
    this._userService.getUserObs.subscribe({
      next: (user) => { this.usuario = user },
    })
  }

  cerrarSesion(){
    localStorage.removeItem('usuario')
    this._userService.setUsuarioObservable(null)
    this._router.navigate(['/'])
  }
}
