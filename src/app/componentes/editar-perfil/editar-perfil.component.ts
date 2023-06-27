import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  usuario : any
  formularioUsuario;
  errorOcurrido = false
  peticionExitosa = false;

  constructor(
    private _usuarioService : UsuarioServiceService,
    private formBuilder: FormBuilder,
    private _router : Router
  ){
    this.formularioUsuario = this.formBuilder.group({
      id_usuario: null,
      nombre: '',
      correo_electronico: '',
      password: '',
      tipo: '',
      fotoUsuario: ''
    })
  }

  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){
    this._usuarioService.getUserObs.subscribe({
      next: (usuario) => {
        if(usuario == null) {this._router.navigate(['/'])}
        this.usuario = usuario
        this.formularioUsuario.setValue(usuario)
      }
    })
  }

  onSubmit(data : any){
    this._usuarioService.actualizarUsuario(data).subscribe({
      next: (resp) => {
        this._usuarioService.setUsuarioObservable(data)
        this.peticionExitosa = true
        this.errorOcurrido = false
      },
      error: (error) => { 
        this.peticionExitosa = false
        this.errorOcurrido = true
      }
    })
  }

  eliminarUsuario(){
    this._usuarioService.eliminarUsuario(this.usuario.id_usuario).subscribe({
      next: (resp) => {
        localStorage.removeItem('usuario')
        this._usuarioService.setUsuarioObservable(null)
        this._router.navigate(['/'])
      },
      error: (error) => { 
        this.peticionExitosa = false
        this.errorOcurrido = true
      }
    })
  }

}
