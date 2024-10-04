import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // peticiones al servidor
import { Evento } from '../models/evento';
import { Observable } from 'rxjs'; // manejar las respuestas asincrónicas de las peticiones HTTP

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost/api/public/index.php'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }


  addEvento(eventoData: Evento): Observable<any> {
    console.log(eventoData);
    return this.http.post(`${this.baseUrl}../core/Router.php`, eventoData);
  }

  getEventos(): Observable<any> {
    return this.http.get(`${this.baseUrl}../core/Router.php`);
  }

  getEventoById(uid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}../core/Router.php?action=get&id=${uid}`);
  }

  deleteEvento(uid: number): Observable<any> {
    console.log(uid);
    return this.http.delete(`${this.baseUrl}../core/Router.php?uid=${uid}`);
  }

  updateEvento(uid: number, evento: Evento): Observable<any> {
    console.log(evento);
    return this.http.put(`${this.baseUrl}../core/Router.php?uid=${uid}`, evento);
  }

  // getEventos(): Observable {
  //   return this.http.get(`${this.baseUrl}/getEventos.php`);
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

