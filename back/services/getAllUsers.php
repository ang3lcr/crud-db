<?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");


include_once "../controllers/users.controllers.php";
include_once "../database.php";


// $_POST['id'] = 4;
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    exit; // Termina la ejecución después de enviar los encabezados CORS en la solicitud OPTIONS
}


if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $results = getAllUsers($conn);
    echo json_encode($results);
} 
?>