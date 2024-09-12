<?php
$contraseña = "fisca1234";
$usuario = "desarollo";
$nombre_base_de_datos = "evento_municipales";
try {
    return new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}
?>