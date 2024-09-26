<?php

// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Encabezados permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');

$metodo = $_SERVER["REQUEST_METHOD"];
if ($metodo != "DELETE" && $metodo != "OPTIONS") {
    exit("Solo se permite método DELETE");
}

if (empty($_GET["idEvento"])) {
    exit("No hay id de evento para eliminar");
}
$idEvento = $_GET["idEvento"];
$bd = include_once "db.php";
$sentencia = $bd->prepare("DELETE FROM eventos WHERE uid = ?");
$resultado = $sentencia->execute([$idEvento]);
echo json_encode($resultado);
?>