import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import  { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost/api/public/index.php'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }

  registrarUsuario(usuarioData: User): Observable<any>{
    console.log(usuarioData);
    return this.http.post(`${this.baseUrl}../core/Router.php/registro`, usuarioData);
  }

  obtenerUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}../core/Router.php/registro`);
  }


}
