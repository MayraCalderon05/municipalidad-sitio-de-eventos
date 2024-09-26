<?php
// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Encabezados permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');

$bd = include_once "db.php";
$sentencia = $bd->query("SELECT uid, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM eventos");
$eventos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($eventos);
?>