import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  
  formularioLogin;
  errorOcurrido = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private _usuarioService: UsuarioServiceService,
    private _router : Router
  ){
    this.formularioLogin = this.formBuilder.group({
      correo_electronico: '',
      password: ''
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('usuario')){
      this._router.navigate(['/catalogo'])
    }
  }


  onSubmit(data : any) {
    this._usuarioService.login(data).subscribe(
      {
        next : (usuario) => {
          if(usuario != null){
            this.errorOcurrido = false
            this._usuarioService.setUsuarioObservable(usuario)
            localStorage.setItem('usuario', JSON.stringify(usuario));
            this._router.navigate(['/catalogo'])
          }
          else {
            this.errorOcurrido = true
          }
        },
        error : (error) => {this.errorOcurrido = true}
      }
    )
  }

}
