import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Evento } from 'src/app/models/evento';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'],
})

export class ListEventComponent implements OnInit  {

  // array de eventos de tipo Evento con un evento vacío.
  public eventos: Evento[] = [ new Evento(0, "", new Date(), new Date(), "", "") ]; 

  // Inyección de dependencias a través del constructor:
  constructor(private eventosService: EventService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  // Método para eliminar un evento.
  eliminarEvento(evento: Evento) {
    // diálogo de confirmación 
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${evento.nombre}?`
      })
      .afterClosed() // espera la respuesta del dialogo
      .subscribe((confirmado: Boolean) => { // suscripcion para recibir el resultado de la confirmación
        if (!confirmado) return; // si no se confirma, sale del método
        // si se confirma la eliminación, llama al servicio para eliminar el evento
        this.eventosService
          .deleteEvento(evento) // elimina el evento a través del servicio
          .subscribe(() => { // cuando se elimina
            this.obtenerEventos(); // se actualiza la lista de eventos 
            this.snackBar.open('Evento eliminado', undefined, {
              duration: 1500, 
            });
          });
      });
  }

  ngOnInit() {
    this.obtenerEventos(); // carga los eventos cuando se inicia el componente.
  }

  // Método para obtener los eventos 
  obtenerEventos() {
    return this.eventosService
      .getEventos() // obtiene los eventos
      .subscribe((eventos: Evento[]) => this.eventos = eventos); // cuando los datos se reciben, actualiza el array `eventos`.
  }
}
