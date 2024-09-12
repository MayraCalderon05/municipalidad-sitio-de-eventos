<?php
//? el namespace es una forma de nombrar a un conjunto de funciones y elementos y evitar que se choquen
namespace App\Modules\Backend;
//?Estos encabezados proporcionan metadatos sobre la solicitud o la respuesta HTTP, permitiendo una comunicación más controlada
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//? importacion de la clase mysqli ya que ese es el tipo de bd que utilizaremos
use mysqli;
//? include hace que al importar un archivo desde otro lugar, en caso de no encontrarlo s{olo avisa y el script sigue
//?la diferencia con required es que este detiene el scriupt directamente
include('../../config/database.php');

class Evento
{
    //*CONSULTAR AL RESPECTO SI ES NECESARIO EL USO DE VARIABLES DE ESTA FORMA O ESTÁ BIEN CON ACCEDER DIRECTAMENTE A LA CONSTANTE
    /*public function obtenerConstante(){
        //!datos de conexion con el servidor y la base de datos
        $db_servername = DB_HOST; #recuerda preguntar por esta variable
        $db_username = DB_USER;
        $db_password = DB_PASS;
        $database_name = DB_NAME;
    }*/
    //? establece una conexión con la base de datos; 'mysqli' depende del tipo de base de datos
    #$connection = new mysqli($this->db_servername, $this->db_username, $this->db_password, $this->database_name);
    protected $connection = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    public function connection(){
        if ($this->connection->connect_error) {
            //? die: frena el programa para que no se siga ejecutando
            die('Error de conexión:' . $this->connection->connect_error);
        } else {
            echo 'Conexión exitosa a la base de datos,';
        }
    }
    $miInsert = $this->connection->prepare('INSERT INTO evento (uid,nombre,fecha_inicio,fecha_finalizacion,descripcion,img) VALUES (1,'curso de pasteleria','2024-09-10','2025-06-03','Curso sobre pasteleria básica','sin imagen adherida')') 
}
