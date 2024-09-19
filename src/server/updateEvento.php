<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonEvento = json_decode(file_get_contents("php://input"));
if (!$jsonEvento) {
    exit("No hay datos");
}
$bd = include_once "db.php";
$sentencia = $bd->prepare("UPDATE eventos SET nombre = ?, fecha_inicio = ?, fecha_finalizacion = ?, descripcion = ?, img = ? WHERE uid = ?");
$resultado = $sentencia->execute([$jsonEvento->uid, $jsonEvento->nombre, $jsonEvento->fecha_inicio, $jsonEvento->fecha_finalizacion, $jsonEvento->descripcion, $jsonEvento->img]);
echo json_encode($resultado);
?>