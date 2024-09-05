import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(public http: HttpClient) { }
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
