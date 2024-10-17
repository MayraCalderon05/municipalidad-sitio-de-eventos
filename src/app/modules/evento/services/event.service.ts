import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // peticiones al servidor
import { Evento } from 'src/app/models/evento';
import { Observable } from 'rxjs'; // manejar las respuestas asincrónicas de las peticiones HTTP

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost/api/public/index.php'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }


  addEvento(eventoData: Evento): Observable<any> {
    console.log(eventoData);
    return this.http.post(`${this.baseUrl}/eventos`, eventoData);
  }

  getEventos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/eventos`);
  }

  getEventoById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/eventos?action=get&id=${id}`);
  }

  deleteEvento(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}/eventos?id=${id}`);
  }

  updateEvento(id: number, evento: Evento): Observable<any> {
    console.log(evento);
    return this.http.put(`${this.baseUrl}/eventos?id=${id}`, evento);
  }

  // getEventos(): Observable {
  //   return this.http.get(`${this.baseUrl}/getEventos.php`);
  // }

  // getEventoById(id: number): Observable<Evento> {
  //   return this.http.get<Evento>(`${this.baseUrl}/getEventoById.php?idEvento=${id}`);
  // }

  // addEvento(evento: Evento) {
  //   return this.http.post(`${this.baseUrl}/addEvento.php`, evento);
  // }

  // deleteEvento(evento: Evento) {
  //   return this.http.delete(`${this.baseUrl}/deleteEvento.php?idEvento=${evento.id}`);
  // }

  // updateEvento(evento: Evento): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/updateEvento.php`, evento);
  // }
  
}