import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import  { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost/api/index.php'; // URL base para las peticiones HTTP, donde se harán a un backend en PHP alojado localmente.

  constructor(private http: HttpClient) { }
}
