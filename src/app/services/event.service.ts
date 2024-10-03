import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // peticiones al servidor
import { Evento } from '../models/evento';
import { Observable } from 'rxjs'; // manejar las respuestas asincrónicas de las peticiones HTTP

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost/api-jueves/API-municipalidad/public/index.php'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }


  addEvento(eventoData: Evento): Observable<Evento[]> {
    console.log(eventoData);
    return this.http.post<Evento[]>(`${this.baseUrl}../core/Router.php`, eventoData);
  }

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}../core/Router.php`);
  }

  getEventoById(uid: number): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrl}../core/Router.php?action=get&id=${uid}`);
  }

  deleteEvento(evento: Evento): Observable<Evento[]> {
    console.log(evento);
    return this.http.delete<Evento[]>(`${this.baseUrl}../core/Router.php?action=delete=${evento}`);
  }

  updateEvento(evento: Evento): Observable<Evento[]> {
    console.log(evento);
    return this.http.put<Evento[]>(`${this.baseUrl}../core/Router.php`, evento);
  }

  // getEventos(): Observable<Evento[]> {
  //   return this.http.get<Evento[]>(`${this.baseUrl}/getEventos.php`);
  // }

  // getEventoById(uid: number): Observable<Evento> {
  //   return this.http.get<Evento>(`${this.baseUrl}/getEventoById.php?idEvento=${uid}`);
  // }

  // addEvento(evento: Evento) {
  //   return this.http.post(`${this.baseUrl}/addEvento.php`, evento);
  // }

  // deleteEvento(evento: Evento) {
  //   return this.http.delete(`${this.baseUrl}/deleteEvento.php?idEvento=${evento.uid}`);
  // }

  // updateEvento(evento: Evento): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/updateEvento.php`, evento);
  // }
  
}

