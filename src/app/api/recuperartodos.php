<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');

include '../config/database.php';

try {
    // Preparar y ejecutar la consulta usando PDO
    $stmt = $conn->query("SELECT uidEvento, nombre, fecha_inicio, fecha_finalizacion, descripcion, img FROM Eventos");

    // Obtener todos los resultados como un array asociativo
    $vec = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (!$vec) {
        // Si no hay resultados, devolver un array vacío
        $vec = [];
    }

    // Codificar los resultados en JSON
    $cad = json_encode($vec);

    // Enviar el contenido JSON como respuesta
    header('Content-Type: application/json');
    echo $cad;
} catch (PDOException $e) {
    // En caso de error, mostrar un mensaje de error en JSON
    echo json_encode(['error' => 'Error en la consulta: ' . $e->getMessage()]);
}

?>