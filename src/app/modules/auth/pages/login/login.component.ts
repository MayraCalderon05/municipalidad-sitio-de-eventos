import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  formLogin: FormGroup;
  errorMessage: string | null = null; // Para mostrar errores

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicialización del formulario con validaciones
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.formLogin.valid) {
      const user: User = {
        email: this.formLogin.value.email,
        password: this.formLogin.value.password
      };

      this.authService.login(user).subscribe(
        response => {
          // Verifica que la respuesta sea válida
          if (response && response.message) {
            if (response.message === 'Inicio de sesión exitoso') {
              alert ("ha iniciado sesion con exito")
              // Redirigir a otra página en caso de éxito
              this.router.navigate(['/inicio']);
            } else {
              this.errorMessage = response.message; // Mostrar el mensaje de error
            }
          } else {
            this.errorMessage = 'Respuesta no válida del servidor'; // Manejo de respuesta no esperada
          }
        },
        error => {
          this.errorMessage = 'Error de conexión o servidor'; // Manejo de errores
          console.error('Error al realizar el login', error);
        }
      );
    }
  }
}
