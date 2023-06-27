import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioLoggeadoGuard implements CanActivate {
  constructor(
    private _router : Router
  ){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.estaLoggeado()
  }

  estaLoggeado(): boolean {
    let usuarioLoggeado = localStorage.getItem('usuario')!= null ? JSON.parse(localStorage.getItem('usuario')!):null 
    
    let resp = false

    if (usuarioLoggeado != null){
      resp = true
    }
    else {
      this._router.navigate(['/'])
    }

    return resp;
  }
  
}
