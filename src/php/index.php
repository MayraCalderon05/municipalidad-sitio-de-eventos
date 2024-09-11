<?php include("db.php") /* incluye archivo "db.php2 para cuando inicie la app, se conecte */
?> 

<!-- interfaz-->

<div class="container p-4">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-body">
                <form action="save.php" method="POST"> <!-- a traves del metodo POST, se van a enviar los datos ingresados del formulario al archivo "save" -->
                    <div class="form-group">
                        <input type="text" name="titulo" placeholder="ingrese" autofocus>
                    </div>
                    <div class="form-group">
                        <textarea name="descripcion" id="" rows="2" placeholder="ingrese"></textarea>
                    </div>
                    <input type="submit" name="save" value="save">
                </form>
            </div>
        </div>

        <div class="col-md-8">

        </div>
    </div>
</div>