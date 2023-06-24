import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAdministradorGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let usuario = {
      usuario : 'Lucas',
      pass : '1234',
      rol: 'Admin'
    }

    let resp = false
    
    if (usuario.rol == 'Admin'){
      resp = true
    }
    else {
      this.router.navigate(['/*'])
    }

    return resp;
  }
  
}
