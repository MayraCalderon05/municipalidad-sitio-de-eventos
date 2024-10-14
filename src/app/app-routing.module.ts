import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


const routes: Routes = [
  {path:'inicio',loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  { path: 'eventos', loadChildren: () => import('./modules/evento/evento.module').then(m => m.EventoModule) },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: "**", redirectTo: "/eventos" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
