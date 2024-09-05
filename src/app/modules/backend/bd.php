<?php
    //datos de conexion
    $servername = 'localhost';
    $username = 'desarrollo';
    $password = 'fisca1234';
    $database = 'eventos_municipales';

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die . ("Error de conexion:" . $conn->connect_error);
    } 
    echo ("Conexión exitosa");
    

?>