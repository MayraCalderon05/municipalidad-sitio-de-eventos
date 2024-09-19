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
    let idEvento: string | null = this.route.snapshot.paramMap.get("uid");

    // Asigna un valor por defecto si idEvento es null
    const eventoId: string | number = idEvento ?? '';

    this.eventosService.getEventoById(eventoId).subscribe(
      (evento: Evento) => this.evento = evento,
      (error) => console.error('Error al obtener el evento', error)
    );
  }
  volver() {
    this.router.navigate(['/eventos']);
  }

  onSubmit() {
    this.eventosService.updateEvento(this.evento).subscribe(() => {
      this.snackBar.open('Mascota actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }


}
