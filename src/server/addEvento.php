<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header('Content-Type: application/json'); // Establecer el tipo de contenido como JSON

// Decodificar el contenido JSON recibido en la petición HTTP
$jsonEvento = json_decode(file_get_contents("php://input"));

// Comprobar si la decodificación fue exitosa
if (!$jsonEvento) {
    exit("No hay datos"); // Terminar la ejecución si no se reciben datos válidos
}

// Incluir el archivo de conexión a la base de datos
$bd = include_once "db.php";

// Preparar una sentencia SQL para insertar un nuevo evento en la base de datos
$sentencia = $bd->prepare("INSERT INTO eventos (nombre, fecha_inicio, fecha_finalizacion, descripcion, img) VALUES (?,?,?,?,?)");

// Ejecutar la sentencia SQL con los datos del evento decodificado
$resultado = $sentencia->execute([
    $jsonEvento->nombre, 
    $jsonEvento->fecha_inicio, 
    $jsonEvento->fecha_finalizacion, 
    $jsonEvento->descripcion, 
    $jsonEvento->img
]);

// Retornar el resultado de la operación como un objeto JSON
echo json_encode([
    "resultado" => $resultado, // El resultado de la operación (true o false)
]);
?>