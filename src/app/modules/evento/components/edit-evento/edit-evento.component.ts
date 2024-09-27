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
 
  // Inicializa un objeto evento con valores por defecto.
  public evento: Evento = new Evento(0, "", new Date(), new Date(), "", "");

  // Inyeccion de dependencias a traves de el constructor
  constructor(
    private route: ActivatedRoute,  
    private router: Router,  
    private eventosService: EventService,  
    private snackBar: MatSnackBar  
  ) { }

  ngOnInit() {
    // Obtiene el parámetro "uid" de la URL, que corresponde al ID del evento.
    let idEvento: string | null = this.route.snapshot.paramMap.get("uid");

    // si el ID del evento existe...
    if (idEvento) {
      //cConvierte el ID del evento de string a número.
      let idEventoNumber: number = Number(idEvento);

      // metodo para obtener el evento por su ID.
      this.eventosService.getEventoById(idEventoNumber).subscribe((evento: Evento) => {
        // Asigna los datos obtenidos al objeto `evento` del componente.
        this.evento = evento;
        // las fechas recibidas del backend se convierten en objetos Date.
        this.evento.fecha_inicio = new Date(evento.fecha_inicio);
        this.evento.fecha_finalizacion = new Date(evento.fecha_finalizacion);
      });

    } else {
      // Si no se proporciona un ID válido se redirige
      this.volver()
    }
  }

  // metodo para cuando se guardan los datos del formulario
  onSubmit() {
    // Prepara el objeto del evento para enviarlo al backend.
    const eventoFormateado = {
      uid: this.evento.uid,
      nombre: this.evento.nombre,
      fecha_inicio: this.evento.fecha_inicio,  // Mantiene el formato 'YYYY-MM-DD'.
      fecha_finalizacion: this.evento.fecha_finalizacion,  // Mantiene el formato 'YYYY-MM-DD'.
      descripcion: this.evento.descripcion,
      img: this.evento.img
    };

    // metodo del servicio para actualizar el evento.
    this.eventosService.updateEvento(eventoFormateado).subscribe({
      // si se actualiza...
      next: () => {
        this.snackBar.open('Evento actualizado', undefined, {
          duration: 1500,  
        });
        // redirigir a la lista de eventos
        this.volver();
      },
      // si no se actualiza...
      error: (err) => {
        console.error('Error al actualizar el evento', err);
        this.snackBar.open('Error al actualizar el evento', undefined, {
          duration: 1500,  
        });
      }
    });
  }

  // Método para redirigir a la lista de eventos.
  volver() {
    this.router.navigate(['/eventos']);
  }
}