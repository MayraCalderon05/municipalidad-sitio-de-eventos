<?php
/*  conexion */
/* variable para guardar el objeto de conexion que se devolvio */
$conn = mysqli_connect(
    'localhost', /* ip o  dominio de la bd (en este caso es local) */
    'root', /* usuario (en xampp -> root) */
    '', /* contraseña (al ser xampp, por defecto no tiene clave para usuario root) */
    'crud_php', /* nombre de bd a la que quiero conectarme */
)

if (isset($conn)) { /* si existe, muestra el echo */
    echo "La base de datos esta conectada"
}

?>