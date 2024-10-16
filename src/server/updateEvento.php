<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header('Content-Type: application/json'); // Establecer el tipo de contenido como JSON

// Incluir archivo de conexión a la base de datos
$bd = include_once "db.php";

// Comprobar si el método de solicitud es PUT
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");  
}

// Decodificar el JSON recibido en la solicitud
$jsonEvento = json_decode(file_get_contents("php://input"));

// Comprobar si se recibieron datos
if (!$jsonEvento) {
    exit("No hay datos");  
}

// Preparar la sentencia SQL para actualizar el evento en la base de datos
$sentencia = $bd->prepare("UPDATE eventos SET nombre = ?, fecha_inicio = ?, fecha_finalizacion = ?, descripcion = ?, img = ? WHERE uid = ?");

// Ejecutar la sentencia con los datos del evento
$resultado = $sentencia->execute([
    $jsonEvento->nombre, 
    $jsonEvento->fecha_inicio, 
    $jsonEvento->fecha_finalizacion,
    $jsonEvento->descripcion, 
    $jsonEvento->img, 
    $jsonEvento->uid
]);

// Devolver el resultado de la operación como JSON
echo json_encode($resultado);
?>
