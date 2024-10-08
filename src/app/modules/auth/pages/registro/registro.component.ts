import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  //? variable para que muestre o no la contraseña del campo
  hide = true;
  formularioRegistro: FormGroup;

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
      //this.servicioAuth.registrarUsuario()
    }
  }

  

  ngOnInit(){}

}
