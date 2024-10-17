import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from '../auth/pages/login/login.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'iniciar-sesion', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
