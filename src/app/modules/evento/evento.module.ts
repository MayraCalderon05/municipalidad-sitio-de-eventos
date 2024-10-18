import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//*importaciones de angular
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { EventoRoutingModule } from './evento-routing.module';

import { FormEventComponent } from './components/form-event/form-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { EditEventoComponent } from './components/edit-evento/edit-evento.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';
import { CardEventoComponent } from './components/card-evento/card-evento.component';


@NgModule({
  declarations: [
    FormEventComponent,
    ListEventComponent,
    EditEventoComponent,
    DialogoConfirmacionComponent,
    CardEventoComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    EventoRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    FormEventComponent,
    ListEventComponent,
    EditEventoComponent,
    DialogoConfirmacionComponent,
    CardEventoComponent,
    MatCardModule,
  ]
})
export class EventoModule { }
