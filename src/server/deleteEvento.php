<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE");

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