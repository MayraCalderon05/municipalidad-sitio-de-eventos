import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//?importaciones de angular
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//?importacion de archivo de rutas
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//?importacion de componentes
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule, 
    //
    MatIconModule, 
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    InicioSesionComponent,
    RegistroComponent,
    //
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AutentificacionModule { }
