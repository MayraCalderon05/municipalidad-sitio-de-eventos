import { Component } from '@angular/core';
//- importacion de los componentes que voy a usar directamente
import { ListEventComponent } from 'src/app/modules/evento/components/list-event/list-event.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  componenteActual: any = ListEventComponent; //! componente predeterminado
  //? establezco las claves que si o si van a entrar como cadenas y las redirijo a cada componente
  componentes: Record<'eventos', any> = {
    eventos: ListEventComponent,
    
  };
  //? en caso de que este alguna de las claves, actualiza el componete
  mostrarComponente(componente: 'eventos') {
    this.componenteActual = this.componentes[componente];
  }

}
