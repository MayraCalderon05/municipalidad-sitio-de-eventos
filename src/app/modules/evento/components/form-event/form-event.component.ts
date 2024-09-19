import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Evento } from 'src/app/models/evento';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css'],
})
export class FormEventComponent implements OnInit {

  constructor(private eventosService: EventService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  eventoModel = new Evento (0, "", new Date(), new Date(), "", "")

  onSubmit() {
    this.eventosService.addEvento(this.eventoModel).subscribe(() => {
      this.snackBar.open('Evento guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/eventos']);
    })
  }

  
}
