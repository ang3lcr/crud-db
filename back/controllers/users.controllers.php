<?php
require_once("../database.php");


function createUser ($conn, $name, $email, $password) {
    $stmt = $conn->prepare("CALL CreateUser(?, ?, ?)");
    if ($stmt === false) {
    die('Error: ' . $conn->error);
    }
    $stmt->bind_param("sss", $name, $email, $password);

    if ($stmt->execute()) {
        echo "User created";
    } else {
        echo "Error occurred: " . $stmt->error;
    }
    $stmt->close();
    $conn->close();
};

function getUserById($conn, $id) {
    $stmt = $conn->prepare("CALL GetUserById(?)");
    if ($stmt === false) {
        die('Error: ' . $conn->error);
    }
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        // $resultsArray = array("result" => $result);
        return $result;
    } else {
        echo "Error occurred: " . $stmt->error;
    }
    $stmt->close();
    return null;
}

function getAllUsers($conn) {
    $stmt = $conn->prepare("CALL GetAllUsers()");

    if ($stmt === false) {
        throw new Exception('Error en la preparación de la consulta: ' . $conn->error);
    }

    if ($stmt->execute()) {
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $result;
    } else {
        $stmt->close();
        throw new Exception('Error al ejecutar la consulta: ' . $stmt->error);
    }
}

?>