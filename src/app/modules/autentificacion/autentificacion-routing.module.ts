import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//?importacion de vistas del modulo
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

//*rutas hacia componentes
const routes: Routes = [
  {path:'registro', component: RegistroComponent},
  {path:'inicioSesion', component:InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
