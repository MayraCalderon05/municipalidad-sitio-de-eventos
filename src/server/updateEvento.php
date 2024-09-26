<?php
// Permitir acceso desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Encabezados permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonEvento = json_decode(file_get_contents("php://input"));
if (!$jsonEvento) {
    exit("No hay datos");
}
$bd = include_once "db.php";
$sentencia = $bd->prepare("UPDATE eventos SET nombre = ?, fecha_inicio = ?, fecha_finalizacion = ?, descripcion = ?, img = ? WHERE uid = ?");
$resultado = $sentencia->execute([$jsonEvento->nombre, $jsonEvento->fecha_inicio, $jsonEvento->fecha_finalizacion, $jsonEvento->descripcion, $jsonEvento->img, $jsonEvento->uid]);
echo json_encode($resultado);


?>