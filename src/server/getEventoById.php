<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header('Content-Type: application/json'); // Establecer el tipo de contenido como JSON

// Comprobar si el parámetro "idEvento" está vacío
if (empty($_GET["idEvento"])) {
    exit("No hay id de evento");  // Termina la ejecución si no hay un ID de evento
}

// Asignar el valor del parámetro "idEvento" a una variable
$idEvento = $_GET["idEvento"];

// Incluir el archivo de conexión a la base de datos
$bd = include_once "db.php";

// Preparar una consulta SQL para seleccionar el evento por su ID
$sentencia = $bd->prepare("SELECT uid, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM eventos WHERE uid = ?");

// Ejecutar la consulta con el ID del evento proporcionado
$sentencia->execute([$idEvento]);

// Recuperar el evento como un objeto
$evento = $sentencia->fetchObject();

// Codificar el objeto del evento en formato JSON y enviarlo como respuesta
echo json_encode($evento);
?>