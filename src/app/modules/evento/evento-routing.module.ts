import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEventComponent } from './components/form-event/form-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';
import { EditEventoComponent } from './components/edit-evento/edit-evento.component';

const routes: Routes = [
  { path: 'eventos', component: ListEventComponent },
  { path: 'eventos/editar-evento/:id', component: EditEventoComponent },
  { path: 'eventos/agregar', component: FormEventComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
