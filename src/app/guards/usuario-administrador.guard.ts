import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioServiceService } from '../services/usuario-service/usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdministradorGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let usuarioLoggeado = localStorage.getItem('usuario')!= null ? JSON.parse(localStorage.getItem('usuario')!):null 
    
    let resp = false

    if (usuarioLoggeado.tipo == 'admin'){
      resp = true
    }
    else {
      this._router.navigate(['/catalogo'])
    }

    return resp;
  }
  
}
