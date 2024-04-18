<?php

session_start();
if (isset($_SESSION['username'])) {
    echo file_get_contents("home.html");
    exit;
}

$sname = "127.0.0.1";
$unmae = "u884001650_smiloadmin";
$password = "adminadmin";
$db_name = "u884001650_SmiloSphereDB";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {

    echo "Connection failed!";

} else {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $stmt = $conn->prepare("CALL userLogin(?, ?, @responseMessage)");
        $stmt->bind_param("ss", $username, $password);

        $stmt->execute();
        $stmt->close();

        $result = $conn->query("SELECT @responseMessage AS responseMessage");
        $row = $result->fetch_assoc();
        $responseMessage = $row["responseMessage"];

        if ($responseMessage === 'User successfully logged in') {
            session_start();
            $_SESSION['username'] = $username;
            // Redirect to home page
            echo file_get_contents("home.html");
            exit;
        } else {
            echo 'Error al iniciar sesión';
        }

    }
    $conn->close();
}