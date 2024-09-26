<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Encabezados permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');

if (empty($_GET["idEvento"])) {
    exit("No hay id de evento");
}
$idEvento = $_GET["idEvento"];
$bd = include_once "db.php";
$sentencia = $bd->prepare("SELECT uid, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM eventos WHERE uid = ?");
$sentencia->execute([$idEvento]);
$evento = $sentencia->fetchObject();
echo json_encode($evento);
?>