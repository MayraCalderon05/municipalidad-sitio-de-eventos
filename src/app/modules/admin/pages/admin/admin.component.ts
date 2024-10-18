import { Component } from '@angular/core';
//- importacion de los componentes que voy a usar directamente
import { ListEventComponent } from 'src/app/modules/evento/components/list-event/list-event.component';
import { UsuarioComponent } from '../../components/usuario/usuario.component';
import { GruposComponent } from '../../components/grupos/grupos.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  componenteActual: any = ListEventComponent; //! componente predeterminado
  //? establezco las claves que si o si van a entrar como cadenas y las redirijo a cada componente
  componentes: Record<'eventos' | 'usuarios' | 'grupos', any> = {
    eventos: ListEventComponent,
    usuarios: UsuarioComponent,
    grupos: GruposComponent,
  };
  //? en caso de que este alguna de las claves, actualiza el componete
  mostrarComponente(componente: 'eventos' | 'usuarios' | 'grupos') {
    this.componenteActual = this.componentes[componente];
  }

}
