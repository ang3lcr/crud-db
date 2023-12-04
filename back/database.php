<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "empleados";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}


$userModel = file_get_contents(__DIR__ . "/models/users.sql");
$createUser = file_get_contents(__DIR__ . "/querys/users/createUser.sql");
$getUser = file_get_contents(__DIR__ . "/querys/users/getUserById.sql");
$getAllUsers = file_get_contents(__DIR__ . "/querys/users/getAllUsers.sql");


// Running model
if ($conn -> multi_query($userModel) === TRUE){
    // echo "Script ejecutado";
} else {
    echo "Error al ejecutar" , $conn -> error;
}

// Running createUser
if ($conn->multi_query($createUser) === TRUE) {
    // echo "Procedimiento almacenado CreateUser creado correctamente";
} else {
    echo "Error al crear el procedimiento almacenado: " . $conn->error;
}

// Running getUser
if ($conn->query($getUser) === TRUE) {
    // echo "Funcion almacenada GetUserById creada correctamente";
} else {
    echo "Error al crear el procedimiento almacenado: " . $conn->error;
}

// Running getAllUsers
if ($conn->query($getAllUsers) === TRUE) {
    // echo "Funcion almacenada GetAllUsers creada correctamente";
} else {
    echo "Error al crear el procedimiento almacenado: " . $conn->error;
}



?>