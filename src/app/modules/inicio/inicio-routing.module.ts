import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrudComponent } from '../crud/pages/crud/crud.component';


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'crud',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
