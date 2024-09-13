import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEventComponent } from './components/form-event/form-event.component';
import { ListEventComponent } from './components/list-event/list-event.component';

const routes: Routes = [
  { path: 'formulario', component: FormEventComponent },
  { path: 'lista', component: ListEventComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
