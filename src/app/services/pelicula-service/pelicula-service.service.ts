import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  api = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  obtenerPeliculas(): Observable<any> {
    return this.http.get(this.api+'/')
  }
}
