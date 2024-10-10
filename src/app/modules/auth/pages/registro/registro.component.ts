import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //? variable para que muestre o no la contraseña del campo
  hide = true;
  formularioRegistro: FormGroup;
  usuarioModel = new User(0,'','','','','');
  // public usuarios: User[] = [
  //   new User(0,'','','','',''),
  // ];


  constructor(private fb: FormBuilder, private servicioAuth: AuthService, private router: Router){
    //? validacion de los campos para que los necesarios no esten vacios
    this.formularioRegistro = this.fb.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      telefono: [299,[Validators.minLength(10), Validators.pattern('^[0-9]+$')]] //* este tipo de validacion dice que no es requerido el campo pero tiene un minimo y solo acepta caracteres numericos
    })
  }

  onSubmit(){
    if (this.formularioRegistro.valid) {
      this.usuarioModel= this.formularioRegistro.value;
      console.log('Datos enviados correctamente: ', this.usuarioModel);
      this.servicioAuth.registrarUsuario(this.usuarioModel).subscribe({
        next: (response) =>{
          console.log('Datos enviados correctamente: ', this.usuarioModel);
          this.router.navigate(['/eventos']);
        },
        error: (error) =>{
          console.log('Error al enviar los datos: ', error);
        }
      });
    } else {
      this.formularioRegistro.markAllAsTouched();
    }
  };

  

  ngOnInit(){
  }

  // obtenerUsuarios(){
  //   this.servicioAuth.obtenerUsuarios().subscribe({
  //     next: (response) => {
  //       if (Array.isArray(response)) {
  //         this.usuarios = response;
  //       } else {
  //         console.error('La respuesta no es compatible', response);
  //         this.usuarios=[];
  //       }
  //     },
  //     error : (error) => {
  //       console.error('Error al obtener usuarios', error);
  //     }
  //   });
  // }

}
