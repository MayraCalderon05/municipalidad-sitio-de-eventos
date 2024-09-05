import { Component } from '@angular/core';
import { Evento } from '../../../../models/evento';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  evento: Evento = {
    nombre: '',
    description: '',
    fechaInicio: '',
    fechaFinalizacion: '',
    img: ''
  }
  /*
  eventosProximos: Evento[] = [
    {
      nombre:'corrida', 
      description:'La corrida municipal donde te invitamos a hacer un recorrido de 10 km de manera familiar',
      fechaInicio: '20-08-24',
      fechaFinalizacion: '20-08-24',
      img: 'https://imgs.search.brave.com/Zfqis5KZtaBuxsB10YqfwHIlCweJ6DiWyCFrt_EuJUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmlvbmVncm8uY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL0NpcG9s/bGV0dGktMzYtY29y/cmlkYS1sYXJnYWRh/LXByb2Zlc2lvbmFs/LUZsb3JlbmNpYS1T/YWx0by0zLmpwZWc'
    },
    {
      nombre:'corrida', 
      description:'La corrida municipal donde te invitamos a hacer un recorrido de 10 km de manera familiar',
      fechaInicio: '20-08-24',
      fechaFinalizacion: '20-08-24',
      img: 'https://imgs.search.brave.com/Zfqis5KZtaBuxsB10YqfwHIlCweJ6DiWyCFrt_EuJUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmlvbmVncm8uY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL0NpcG9s/bGV0dGktMzYtY29y/cmlkYS1sYXJnYWRh/LXByb2Zlc2lvbmFs/LUZsb3JlbmNpYS1T/YWx0by0zLmpwZWc'
    },
    {
      nombre:'corrida', 
      description:'La corrida municipal donde te invitamos a hacer un recorrido de 10 km de manera familiar',
      fechaInicio: '20-08-24',
      fechaFinalizacion: '20-08-24',
      img: 'https://imgs.search.brave.com/Zfqis5KZtaBuxsB10YqfwHIlCweJ6DiWyCFrt_EuJUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmlvbmVncm8uY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL0NpcG9s/bGV0dGktMzYtY29y/cmlkYS1sYXJnYWRh/LXByb2Zlc2lvbmFs/LUZsb3JlbmNpYS1T/YWx0by0zLmpwZWc'
    },
    {
      nombre:'corrida', 
      description:'La corrida municipal donde te invitamos a hacer un recorrido de 10 km de manera familiar',
      fechaInicio: '20-08-24',
      fechaFinalizacion: '20-08-24',
      img: 'https://imgs.search.brave.com/Zfqis5KZtaBuxsB10YqfwHIlCweJ6DiWyCFrt_EuJUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmlvbmVncm8uY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL0NpcG9s/bGV0dGktMzYtY29y/cmlkYS1sYXJnYWRh/LXByb2Zlc2lvbmFs/LUZsb3JlbmNpYS1T/YWx0by0zLmpwZWc'
    }
  ];
  */
  
}

