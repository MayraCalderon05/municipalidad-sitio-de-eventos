<?php
$registros=mysqli_query($con,"select uidEventos, nombre, fecha_inicio, fecha_finalizacion, descripcion, img from Eventos where uidEventos=$_GET[codigo]");
    
if ($reg=mysqli_fetch_array($registros))  
{
  $vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>