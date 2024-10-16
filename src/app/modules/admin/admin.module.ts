import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    PagesComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
