import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Evento } from 'src/app/models/evento';


@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent implements OnInit {
  // array de eventos de tipo Evento con un evento vacío.
  public eventos: Evento[] = [
    new Evento(0, '', new Date(), new Date(), '', ''),
  ];  
  
  ngOnInit(): void {
    this.obtenerEventos();
  }

  constructor(private servicioEventos:EventService){ }

  //*mostrar todos los eventos
  obtenerEventos(){
    this.servicioEventos.getEventos().subscribe({
      next: (response)=>{
        if (Array.isArray(response)) {
          this.eventos = response;
        } else {
          console.log('La respuesta no existe', response);
          this.eventos = [];
        }
      },
      error: (error) => {
        console.log('Error al recuperar los eventos', error);
      }
    });
  }
}
