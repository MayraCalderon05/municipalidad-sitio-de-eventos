<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
 
  $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
  
  require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "INSERT INTO usuarios(nombre, telefono, email) VALUES
                  ('$params->nombre',$params->telefono, '$params->email')");    
  
  class Result {}

  // GENERA LOS DATOS DE RESPUESTA
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'SE REGISTRO EXITOSAMENTE EL USUARIO';

  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO
?>

<!-- 
include ("db.php"); /* incluir archivo para traer la variable conn que es la conexion */

if (isset($_POST['save'])) {
    $title = $_POST['titulo']; /*variable que almacena lo que se recibe a traves del metodo post y el nombre "titulo" */
    $description = $_POST['descripcion'];
    echo $title;
    echo $description;

    $query = "INSERT INTO nombre_tabla_bd(titulo, descripcion) VALUES ('$title', '$description')"; /* consulta para almacenar datos */
    $result = mysqli_query($conn, $query); /* formato consulta / parametros: conexion y consulta / guardarlo en una variable resultado*/
}  
-->