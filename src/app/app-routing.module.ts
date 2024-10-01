import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eventos', loadChildren: () => import('./modules/evento/evento.module').then(m => m.EventoModule) },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: "**", redirectTo: "/eventos" },
  { path: 'registro', loadChildren:() => import('./modules/auth/auth.module').then(m=>m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
