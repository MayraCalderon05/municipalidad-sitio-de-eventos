import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EventoModule } from '../evento/evento.module';

//* componentes de angular
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    EventoModule,
    //*componentes de angular
    MatGridListModule,
    MatToolbarModule
  ],
  exports:[
    InicioComponent,
    //*componentes de angular
    MatGridListModule,
    MatToolbarModule
  ]
})
export class InicioModule { }
