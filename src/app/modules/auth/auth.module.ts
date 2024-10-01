import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './pages/registro/registro.component';

//- importaciones de angular
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    RegistroComponent
  ]
})
export class AuthModule { }
