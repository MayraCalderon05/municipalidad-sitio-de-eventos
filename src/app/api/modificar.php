<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');

$json = file_get_contents('php://input');
$params = json_decode($json);

include '../config/database.php';

// Verificar si los parámetros necesarios están presentes
if (isset($params->nombreEvento) && isset($params->fechaInicio) && isset($params->fechaFinalizacion) && isset($params->descripcion) && isset($params->img) && isset($params->uidEventos) ) {
    try {
        // Preparar la consulta SQL de actualización
        $stmt = $conn->prepare("UPDATE Eventos SET nombre = :nombreEvento, fecha_inicio = :fechaInicio, fecha_finalizacion = :fechaFinalizacion, descripcion = :descripcion, img = :img WHERE uidEventos = :uidEventos");
        
        // Asignar los valores a las variables de la consulta
        $stmt->bindParam(':uidEventos', $params->uidEventos);
        $stmt->bindParam(':nombreEvento', $params->nombreEvento);
        $stmt->bindParam(':fechaInicio', $params->fechaInicio);
        $stmt->bindParam(':fechaFinalizacion', $params->fechaFinalizacion);
        $stmt->bindParam(':descripcion', $params->descripcion);
        $stmt->bindParam(':img', $params->img);
        
        // Ejecutar la consulta con los parámetros proporcionados
        $stmt->execute([
            ':nombreEvento' => $params->nombreEvento,
            ':fechaInicio' => $params->fechaInicio,
            ':fechaFinalizacion' => $params->fechaFinalizacion,
            ':descripcion' => $params->descripcion,
            ':img' => $params->img,
            ':uidEventos' => $params->uidEventos
        ]);
        $response = array("resultado" => "OK", "mensaje" => "Datos modificados");
    } catch (PDOException $exception) {
        $response = array("resultado" => "ERROR", "mensaje" => "Error en la actualización: " . $exception->getMessage());
    }
} else {
    $response = array("resultado" => "ERROR", "mensaje" => "Datos incompletos");
}

// Enviar la respuesta en formato JSON
header('Content-Type: application/json');
echo json_encode($response);

?>