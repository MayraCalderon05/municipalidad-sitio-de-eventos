import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEventComponent } from './components/form-event/form-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { EditEventoComponent } from './components/edit-evento/edit-evento.component';
import { CardEventoComponent } from './components/card-evento/card-evento.component';

const routes: Routes = [
  { path: 'eventos', component: ListEventComponent },
  { path: 'eventos/editar-evento/:id', component: EditEventoComponent },
  { path: 'eventos/agregar', component: FormEventComponent },
  { path:'eventos-municipales', component: CardEventoComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
