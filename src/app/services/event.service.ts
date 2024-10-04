import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // peticiones al servidor
import { Evento } from '../models/evento';
import { Observable } from 'rxjs'; // manejar las respuestas asincrónicas de las peticiones HTTP

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost/api-eventos'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get<Evento[]>(`${this.baseUrl}../core/Router.php`);
  }

  getEventoById(uid: number): Observable<any> {
    return this.http.get<Evento>(`${this.baseUrl}../core/Router.php?get&id=${uid}`);
  }

  addEvento(evento: Evento):Observable<any> {
    return this.http.post(`${this.baseUrl}../core/Router.php`, evento);
  }

  deleteEvento(evento: Evento): Observable<any> {
    return this.http.delete(`${this.baseUrl}../core/Router.php?uid=${evento.uid}`);
  }

  updateEvento(evento: Evento): Observable<any> {
    return this.http.put(`${this.baseUrl}../core/Router.php`, evento);
  }
  
}

