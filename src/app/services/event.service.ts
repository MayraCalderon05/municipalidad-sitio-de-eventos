import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  // baseUrl = // investigar http del servidor

  // constructor(private http: HttpClient) { }

  // getEvents() {
  //   return this.http.get(`${this.baseUrl}/getAll.php`);
  // }

  // getEvent(id: string | number) {
  //   return this.http.get(`${this.baseUrl}/get.php?idEvento=${id}`);
  // }

  // addEvent(evento: Evento) {
  //   return this.http.post(`${this.baseUrl}/post.php`, evento);
  // }

  // deleteEvent(evento: Evento) {
  //   return this.http.delete(`${this.baseUrl}/delete.php?idEvento=${evento.uid}`);
  // }

  // updateEvent(evento: Evento) {
  //   return this.http.put(`${this.baseUrl}/update.php`, evento);
  // }

}




