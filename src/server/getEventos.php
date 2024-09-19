<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "db.php";
$sentencia = $bd->query("SELECT uid, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM eventos");
$eventos = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($eventos);
?>