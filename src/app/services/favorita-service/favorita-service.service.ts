import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritaServiceService {

  api = environment.apiUrl

  constructor(
    private http : HttpClient
  ) { }

  obtenerFavoritas(): Observable<any> {
    return this.http.get(this.api+'/')
  }

  agregarFavorita() {
    return this.http.get(this.api+'/')
  }

  eliminarFavorita() {
    return this.http.get(this.api+'/')
  }
}
