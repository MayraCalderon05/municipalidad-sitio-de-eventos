import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';

import { FormEventComponent } from './components/form-event/form-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';

@NgModule({
  declarations: [
    FormEventComponent,
    ListEventComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
