<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


include_once "../controllers/users.controllers.php";
include_once "../database.php";


if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    exit; // Termina la ejecución después de enviar los encabezados CORS en la solicitud OPTIONS
}



if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = file_get_contents("php://input");
    if (isset($data)) {    
        $decodedData = json_decode($data, true);
        $name = $decodedData['name'];
        $email = $decodedData['email'];
        $password = $decodedData['password'];
        $hashedPassword = sha1($password, false);
        
        $results = createUser($conn, $name, $email, $hashedPassword);
        echo json_encode($results);
    } else {
        echo json_encode(["error" => "No se proporcionó la informacion requerida"]);
    }
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo json_encode(["error" => "Método no permitido"]);
}
?>