<?php
namespace App\Config;
include 'credenciales.php';
use PDO;
use PDOException;

Class database {
    private $dbHost = DB_HOST;
    private $dbUser = DB_USER;
    private $dbPass = DB_PASS;
    private $dbName = DB_NAME;
    private $conn;

    public function getconnection() { 
        $this ->conn = null;

        try {
            $this ->conn = new PDO("mysql:host=". $this->dbHost. ";dbname=". $this->dbName, $this->dbUser, $this->dbPass);
            $this ->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Connection error: ". $exception->getMessage();
        }
        return $this ->conn;  //retornamos la conexión al objeto PDO
    }

}
?>