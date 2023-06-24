import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  formularioRegistro ;
  errorOcurrido = false;
  usuarioRegistrado = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService : UsuarioServiceService
  ){
    this.formularioRegistro = this.formBuilder.group({
      nombre: '',
      correo_electronico: '',
      password: '',
      tipo: 'cliente',
      fotoUsuario: ''
    });
  }

  onSubmit(data : any) {
    this._usuarioService.registrarse(data).subscribe(
      {
        next : (respuesta) => {
          if(respuesta != null) {
            this.errorOcurrido = false
            this.usuarioRegistrado = true
          }
          else {
            this.errorOcurrido = true
            this.usuarioRegistrado = false
          }
        },
        error : (error) => {
          this.errorOcurrido = true
          this.usuarioRegistrado = false
        }
      }
    )
  }
}
