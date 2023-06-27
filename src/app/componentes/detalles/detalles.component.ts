import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaServiceService } from 'src/app/services/categoria-service/categoria-service.service';
import { PeliculaServiceService } from 'src/app/services/pelicula-service/pelicula-service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  peliculaSeleccionada : any = null
  categorias : any[] = []
  categoriaPelicula : any
  imagenPrevisualizada = ''

  constructor (
    private _peliculaService : PeliculaServiceService,
    private _categoriaService : CategoriaServiceService,
    private _route : ActivatedRoute,
    private _router : Router
  ){}

  async ngOnInit(): Promise<void> {
    await this._categoriaService.obtenerCategorias().subscribe({
      next: (categorias) => {this.categorias = categorias}
    })
    console.log('..')
    this._route.params.subscribe(params => {
      let id = params['id']
      this._peliculaService.obtenerUnaPelicula(id).subscribe({
        next: (pelicula) => {
          this.categorias.forEach(categoria => {
            if (categoria.id_categoria == pelicula.id_categoria){
              this.categoriaPelicula = categoria.nombre
            }
          })
          this.peliculaSeleccionada = pelicula
          this.imagenPrevisualizada = this.peliculaSeleccionada.fotoPelicula
          console.log(pelicula)
        },
        error: (error) => {
          this._router.navigate(['/catalogo'])
        }
      })
    })
  }


}
