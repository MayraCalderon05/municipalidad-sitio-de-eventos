import { Component } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //? variable para que muestre o no la contraseña del campo
  hide = true;

  //?validacion del email
  email = new FormControl('', [Validators.required, Validators.email]);

  //?en caso de que el email sea invalido
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe de ingresar un email';
    }

    return this.email.hasError('email') ? 'El email ingresado no es válido' : '';
  }

}
