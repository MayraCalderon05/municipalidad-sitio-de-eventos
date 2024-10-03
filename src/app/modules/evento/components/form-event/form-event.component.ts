import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Evento } from 'src/app/models/evento';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css'],
})

export class FormEventComponent implements OnInit {

// Inyección de dependencias a través del constructor:
  constructor(
    private eventosService: EventService, 
    private snackBar: MatSnackBar,
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  // Inicializa un modelo del evento, creando un nuevo objeto de la clase `Evento` con valores por defecto.
  eventoModel = new Evento(0, "", new Date(), new Date(), "", "");

  // Método para enviar datos del formulario cuando se guardan
  onSubmit() {
    // Llama método `addEvento` para agregar el evento utilizando los datos del modelo `eventoModel`.
    this.eventosService.addEvento(this.eventoModel).subscribe(() => {
      this.snackBar.open('Evento guardado', undefined, {
        duration: 1500, 
      });
      this.router.navigate(['/eventos']);
    });
  }
}

