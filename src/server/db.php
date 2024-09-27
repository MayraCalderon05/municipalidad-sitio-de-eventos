<?php
$usuario = "desarrollo";
$contraseña = "fisca1234";
$nombre_base_de_datos = "eventos_municipales";

try {
    // Intentar establecer una conexión a la base de datos MySQL usando PDO
    return new PDO('mysql:host=172.16.20.30;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
} catch (Exception $e) {
    // Capturar cualquier excepción que se produzca al intentar conectar
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}
?>