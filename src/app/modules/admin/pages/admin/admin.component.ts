import { Component } from '@angular/core';
import { ListEventComponent } from 'src/app/modules/evento/components/list-event/list-event.component';
import { UsuarioComponent } from '../../components/usuario/usuario.component';
import { GruposComponent } from '../../components/grupos/grupos.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  componenteActual: any = ListEventComponent;
  
  componentes: Record<'eventos' | 'usuarios' | 'grupos', any> = {
    eventos: ListEventComponent,
    usuarios: UsuarioComponent,
    grupos: GruposComponent,
  };

  mostrarComponente(componente: 'eventos' | 'usuarios' | 'grupos') {
    this.componenteActual = this.componentes[componente];
  }

}
