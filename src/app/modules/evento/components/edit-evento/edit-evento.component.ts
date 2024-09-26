import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Evento } from 'src/app/models/evento';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-evento',
  templateUrl: './edit-evento.component.html',
  styleUrls: ['./edit-evento.component.css']
})
export class EditEventoComponent implements OnInit {

  public evento: Evento = new Evento(0, "", new Date(), new Date(), "", "");

  constructor(private route: ActivatedRoute,
    private router: Router, private eventosService: EventService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    // Obtén el ID del parámetro de la URL y conviértelo en número
    let idEvento: string | null = this.route.snapshot.paramMap.get("uid");

    if (idEvento) {
      let idEventoNumber: number = Number(idEvento);  // Convierte a número

      this.eventosService.getEventoById(idEventoNumber).subscribe((evento: Evento) => {
        this.evento = evento;
        // Asegurarse de que las fechas recibidas son objetos Date
        this.evento.fecha_inicio = new Date(evento.fecha_inicio);
        this.evento.fecha_finalizacion = new Date(evento.fecha_finalizacion);
      });
    } else {
      // Maneja el caso donde idEvento es null, por ejemplo redirigir o mostrar un error
      this.router.navigate(['/eventos']);  // Redirigir si no se encuentra el ID
    }
  }

  onSubmit() {
    // Obteniendo las fechas como strings del input
    const fechaInicioStr = (<HTMLInputElement>document.getElementById('fecha_inicio')).value;
    const fechaFinalizacionStr = (<HTMLInputElement>document.getElementById('fecha_finalizacion')).value;

    // Crear un nuevo objeto Evento con las fechas como Date
    const eventoParaEnviar = new Evento(
      this.evento.uid,
      this.evento.nombre,
      new Date(fechaInicioStr),  // Mantener como Date
      new Date(fechaFinalizacionStr),  // Mantener como Date
      this.evento.descripcion,
      this.evento.img
    );

    // Llamada al servicio con el objeto de tipo Evento
    this.eventosService.updateEvento(eventoParaEnviar).subscribe({
      next: () => {
        // Si la actualización es exitosa, mostrar el snackBar y redirigir
        this.snackBar.open('Evento actualizado', undefined, {
          duration: 1500,
        });
        this.volver();  // Redirigir a la lista de eventos
      },
      error: (err) => {
        // En caso de error, mostrar un mensaje
        console.error('Error al actualizar el evento', err);
        this.snackBar.open('Error al actualizar el evento', undefined, {
          duration: 1500,
        });
      }
    });
  }

  // Método para formatear la fecha en 'YYYY-MM-DD'
  formatDate(date: Date): string {
    const d = new Date(date);
    return d.toISOString().split('T')[0];  // 'YYYY-MM-DD'
  }

  volver() {
    this.router.navigate(['/eventos']);
  }
}