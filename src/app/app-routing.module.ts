import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: "**", redirectTo: "/inicio" },

  { path: 'iniciar-sesion', loadChildren:() => import('./modules/auth/auth.module').then(m=>m.AuthModule) },
  { path:'inicio', loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:'eventos', loadChildren:()=>import('./modules/evento/evento.module').then(m=>m.EventoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
