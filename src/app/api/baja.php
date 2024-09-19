<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
include '../config/database.php';

// Verificamos si el parámetro uidEventos está presente
if (isset($_GET['uidEventos'])) {
    $uidEventos = $_GET['uidEventos'];

    // Preparamos la consulta usando PDO
    try {
        $stmt = $conn->prepare("DELETE FROM Eventos WHERE uidEventos = :uidEventos");
        $stmt->bindParam(':uidEventos', $uidEventos);

        if ($stmt->execute()) {
            $response = ['resultado' => 'OK', 'mensaje' => 'Evento borrado con éxito'];
        } else {
            $response = ['resultado' => 'ERROR', 'mensaje' => 'Error al borrar el evento'];
        }
    } catch (PDOException $exception) {
        $response = ['resultado' => 'ERROR', 'mensaje' => 'Error en la base de datos: ' . $exception->getMessage()];
    }
} else {
    $response = ['resultado' => 'ERROR', 'mensaje' => 'Falta el parámetro uidEventos'];
}

header('Content-Type: application/json');
echo json_encode($response);
