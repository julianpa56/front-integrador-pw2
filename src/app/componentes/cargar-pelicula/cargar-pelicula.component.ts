import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoriaServiceService } from 'src/app/services/categoria-service/categoria-service.service';

@Component({
  selector: 'app-cargar-pelicula',
  templateUrl: './cargar-pelicula.component.html',
  styleUrls: ['./cargar-pelicula.component.css']
})
export class CargarPeliculaComponent {

  categorias : any;
  formularioPelicula;

  constructor(
    private _categoriaServ : CategoriaServiceService,
    private formBuilder: FormBuilder,
  ){
    this.formularioPelicula = this.formBuilder.group({
      titulo: '',
      descripcion: '',
      director: '',
      year: '',
      duracion: '',
      fotoPelicula: '',
      id_categoria: null
    });
  }

  ngOnInit(): void {
    this.obtenerPeliculas()
  }

  onSubmit(data : any) {
    console.log(data)
  }

  obtenerPeliculas(){
    this._categoriaServ.obtenerCategorias().subscribe(
      {
      next: (categoria) => {
        this.categorias = categoria;
        console.log(categoria)
      },
      error: (error) => {
        console.error(error);
      }
    }
    )
  }

}
