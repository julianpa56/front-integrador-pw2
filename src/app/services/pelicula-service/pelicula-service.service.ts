import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  api = environment.apiUrl+'/pelicula'

  constructor(
    private http: HttpClient
  ) { }

  obtenerPeliculas(): Observable<any> {
    return this.http.get(this.api)
  }

  obtenerUnaPelicula(id : any): Observable<any> {
    return this.http.get(this.api+'/'+id)
  }

  crearPelicula(data : any) : Observable<any> {
    console.log(data)
    return this.http.post(this.api,data)
  }

  modificarPelicula(data : any, id : any) : Observable<any> {
    return this.http.put(this.api+'/'+id,data)
  }

  eliminarPelicula(id : any) : Observable<any> {
    return this.http.delete(this.api+'/'+id)
  }
}
