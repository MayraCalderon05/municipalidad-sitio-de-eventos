<?php
header("Access-Control-Allow-Origin: *"); // Permitir acceso desde cualquier origen
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // Métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header('Content-Type: application/json'); // Establecer el tipo de contenido como JSON

// Incluir el archivo de conexión a la base de datos
$bd = include_once "db.php";

// Realizar una consulta para seleccionar todos los eventos
$sentencia = $bd->query("SELECT uid, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM eventos");

// Recuperar todos los resultados de la consulta como un array de objetos
$eventos = $sentencia->fetchAll(PDO::FETCH_OBJ);

// Codificar el array de eventos en formato JSON y enviarlo como respuesta
echo json_encode($eventos);
?>