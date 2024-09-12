import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('')
  }






/*
  const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'contraseña',
    database: 'nombre_base_datos'
});

connection.connect();
*/
}
