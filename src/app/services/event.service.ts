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


  addEvento(eventoData: Evento): Observable<any> {
    console.log(eventoData);
    return this.http.post(`${this.baseUrl}/eventos`, eventoData);
  }

  getEventos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/eventos`);
  }

  getEventoById(uid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/eventos?action=get&id=${uid}`);
  }

  deleteEvento(uid: number): Observable<any> {
    console.log(uid);
    return this.http.delete(`${this.baseUrl}/eventos?uid=${uid}`);
  }

  updateEvento(uid: number, evento: Evento): Observable<any> {
    console.log(evento);
    return this.http.put(`${this.baseUrl}/eventos?uid=${uid}`, evento);
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

