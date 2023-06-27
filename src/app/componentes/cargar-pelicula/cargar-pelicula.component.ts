import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaServiceService } from 'src/app/services/categoria-service/categoria-service.service';
import { PeliculaServiceService } from 'src/app/services/pelicula-service/pelicula-service.service';

@Component({
  selector: 'app-cargar-pelicula',
  templateUrl: './cargar-pelicula.component.html',
  styleUrls: ['./cargar-pelicula.component.css']
})
export class CargarPeliculaComponent {

  categorias : any;
  formularioPelicula;
  errorOcurrido = false;
  cambioCorrecto = false;
  imagenPrevisualizada = ''
  editarPelicula = null
  peliculaAEditar = null
  mensaje = ''

  constructor(
    private _categoriaServ : CategoriaServiceService,
    private _peliculaService : PeliculaServiceService,
    private _route: ActivatedRoute,
    private _router : Router,
    private formBuilder: FormBuilder,
  ){
    this.formularioPelicula = this.formBuilder.group({
      id_pelicula : 0,
      titulo: [null, Validators.required],
      descripcion: [null, Validators.required],
      director: [null, Validators.required],
      year: [null, Validators.required],
      duracion: [null, Validators.required],
      fotoPelicula: null,
      id_categoria: [null, Validators.required]
    });
  }

  verificarFormulario(){
    return this.formularioPelicula.valid
  }

  async ngOnInit(): Promise<void> {
    this._route.url.subscribe({
      next : (rutaActual) => {
        if(!rutaActual[0].path.endsWith('cargar-pelicula')){
          this._route.params.subscribe(params => {
            this.editarPelicula = params['id']
            if (!this.editarPelicula || this.editarPelicula == ''){
              this._router.navigate(['/catalogo'])
            }
            this._peliculaService.obtenerUnaPelicula(this.editarPelicula).subscribe({
              next: (pelicula) => {
                this.formularioPelicula.patchValue(pelicula)
                this.imagenPrevisualizada = pelicula.fotoPelicula
              },
              error: () => this._router.navigate(['/catalogo'])
            })
      
          })
        }
      }
    })
    this.obtenerCategorias()
  }

  onSubmit(data : any) {
    this.cambioCorrecto = false
    this.errorOcurrido = false
    this._peliculaService.crearPelicula(data).subscribe({
      next: () => {
        this.cambioCorrecto = true
        this.errorOcurrido = false
        this.mensaje = 'Película creada exitosamente'
        this.imagenPrevisualizada = ''
        this.formularioPelicula.reset()
      },
      error: (error) => {
        this.cambioCorrecto = false
        this.errorOcurrido = true
        this.mensaje = 'Ocurrió un error, intente nuevamente'
        console.log(error)
      }
    })
  }

  obtenerCategorias(){
    this._categoriaServ.obtenerCategorias().subscribe(
      {
      next: (categoria) => {
        this.categorias = categoria;
      },
      error: (error) => {
        console.error(error);
      }
    }
    )
  }

  cargarImagen($event : any){
    this.imagenPrevisualizada = $event.target.value
  }

  modificarPelicula(data : any){
    this._peliculaService.modificarPelicula(data,data.id_pelicula).subscribe({
      next: () => {
        this.cambioCorrecto = true
        this.errorOcurrido = false
        this.mensaje = 'Película modificada exitosamente'
      },
      error: (error) => {
        this.cambioCorrecto = false
        this.errorOcurrido = true
        this.mensaje = 'Ocurrió un error, intente nuevamente'
        console.error(error);
      }
    })
  }

  eliminarPelicula(id : any){
    this._peliculaService.eliminarPelicula(id).subscribe({
      next: () => {
        this._router.navigate(['/catalogo'])
      },
      error: (error) => {
        this.cambioCorrecto = false
        this.errorOcurrido = true
        this.mensaje = 'Ocurrió un error, intente nuevamente'
        console.error(error);
      }
    })
  }
}
