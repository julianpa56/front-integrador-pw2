import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  api = environment.apiUrl+'/categoria'

  constructor(
    private http : HttpClient
  ) { }


  obtenerCategorias(): Observable <any> {
    return this.http.get(this.api)
  }
}
