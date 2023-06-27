import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private _usuarioObs : BehaviorSubject<any> = new BehaviorSubject<any>(null)

  usuarioObs : any;
  api = environment.apiUrl+'/usuario'

  constructor(
    private http: HttpClient
  ) { }

  login(data : any): Observable<any> {
    return this.http.post(this.api+'/login',data)
  }

  registrarse(data : any): Observable<any> {
    return this.http.post(this.api+'/registro',data)
  }

  verificarUsuario(): Observable<any> {
    return this.http.get(this.api+'/')
  }

  actualizarUsuario(data : any): Observable<any>{
    return this.http.put(this.api+'/'+data.id_usuario,data)
  }

  eliminarUsuario(id : any): Observable<any>{
    return this.http.delete(this.api+'/'+id)
  }


  // Controlar usuario loggeado

  setUsuarioObservable( user:any) {
    this.usuarioObs = user
    if(user != null){
      localStorage.setItem('usuario',JSON.stringify(user))
    }
    this._usuarioObs.next(this.usuarioObs)
  }

  get getUserObs() {
    return this._usuarioObs.asObservable()
  }

}
