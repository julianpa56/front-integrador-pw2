import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

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
}
