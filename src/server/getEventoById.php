<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
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