<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');

$json = file_get_contents('php://input');
$params = json_decode($json);

include '../config/database.php';

if ($params === null) {
    echo json_encode(['error' => 'No se recibieron datos o el formato es incorrecto']);
    exit;
}


try {
    $stmt = $conn->prepare("INSERT INTO Eventos (nombre, fecha_inicio, fecha_finalizacion, descripcion, img) VALUES (:nombre, :fecha_inicio, :fecha_finalizacion, :descripcion, :img)");
    $stmt->bindParam(':nombre', $params->nombreEvento);
    $stmt->bindParam(':fecha_inicio', $params->fechaInicio);
    $stmt->bindParam(':fecha_finalizacion', $params->fechaFinalizacion);
    $stmt->bindParam(':descripcion', $params->descripcion);
    $stmt->bindParam(':img', $params->img);

    if ($stmt->execute()) {
        echo json_encode(['resultado' => 'OK', 'mensaje' => 'Datos grabados']);
    } else {
        echo json_encode(['resultado' => 'ERROR', 'mensaje' => 'No se pudo insertar los datos']);
    }
} catch (PDOException $e) {
    echo json_encode(['resultado' => 'ERROR', 'mensaje' => 'Error en la base de datos: ' . $e->getMessage()]);
}
?>