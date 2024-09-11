<?php
include ("db.php"); /* incluir archivo para traer la variable conn que es la conexion */

if (isset($_POST['save'])) {
    $title = $_POST['titulo']; /*variable que almacena lo que se recibe a traves del metodo post y el nombre "titulo" */
    $description = $_POST['descripcion'];
    echo $title;
    echo $description;

    $query = "INSERT INTO nombre_tabla_bd(titulo, descripcion) VALUES ('$title', '$description')"; /* consulta para almacenar datos */
    $result = mysqli_query($conn, $query); /* formato consulta / parametros: conexion y consulta / guardarlo en una variable resultado*/
}


?>