<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header('Content-Type: application/json'); // Establecer el tipo de contenido como JSON

// Incluir el archivo de conexión a la base de datos
$bd = include_once "db.php";

// Obtener el método de la solicitud HTTP
$metodo = $_SERVER["REQUEST_METHOD"];

// Comprobar si el método es diferente de DELETE y OPTIONS
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");  // Termina la ejecución si el método no es permitido
}

// Comprobar si el parámetro "idEvento" está vacío
if (empty($_GET["idEvento"])) {
    exit("No hay id de evento para eliminar");  // Termina la ejecución si no hay un ID de evento
}

// Asignar el valor del parámetro "idEvento" a una variable
$idEvento = $_GET["idEvento"];

// Preparar una consulta SQL para eliminar el evento por su ID
$sentencia = $bd->prepare("DELETE FROM eventos WHERE uid = ?");

// Ejecutar la consulta con el ID del evento proporcionado
$resultado = $sentencia->execute([$idEvento]);

// Codificar el resultado de la operación en formato JSON y enviarlo como respuesta
echo json_encode($resultado);
?>