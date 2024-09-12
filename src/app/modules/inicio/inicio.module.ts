import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//?importaciones de angular
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    InicioComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InicioRoutingModule,
    //
    MatIconModule, 
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [
    InicioComponent,
    FormularioComponent,
    //
    MatIconModule, 
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class InicioModule { }
