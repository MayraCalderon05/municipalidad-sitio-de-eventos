import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost/php';

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}/getEventos.php`);
  }

  getEventoById(uid: string | number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrl}/getEventoById.php?idEvento=${uid}`);
  }

  addEvento(evento: Evento) {
    return this.http.post(`${this.baseUrl}/addEvento.php`, evento);
  }

  deleteEvento(evento: Evento) {
    return this.http.delete(`${this.baseUrl}/deleteEvento.php?idEvento=${evento.uid}`);
  }

  updateEvento(evento: Evento) {
    return this.http.put(`${this.baseUrl}/updateEvento.php`, evento);
  }
}
