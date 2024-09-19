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
  public eventos: Evento[] = [
    new Evento(0, "", new Date(), new Date(), "", "")
  ];

  constructor(private eventosService: EventService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarEvento(evento: Evento) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${evento.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.eventosService
          .deleteEvento(evento)
          .subscribe(() => {
            this.obtenerEventos();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos() {
    return this.eventosService
      .getEventos()
      .subscribe((eventos: Evento[]) => this.eventos = eventos);
  }
}