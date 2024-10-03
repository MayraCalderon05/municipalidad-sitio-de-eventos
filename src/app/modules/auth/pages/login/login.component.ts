import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  onSubmit() {
    if (this.email === 'usuario@example.com' && this.password === 'contraseña') {
      console.log('Inicio de sesión exitoso');
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Email o contraseña incorrectos';
    }
  }
}
