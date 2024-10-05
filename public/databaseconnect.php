<?php
$servername = "localhost";
$database = "u433694412_SmiloSphereDB";
$username = "u433694412_smiloadmin";
$password = "4&Mk/>OcxOsX";
 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
 
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);
    
    $user = $dData['user'];
    $pass = $dData['pass'];
    $result = "";
    
    if ($user != "" and $pass != "") {
        
        // Prepare the statement to call the stored procedure
        $stmt = $conn->prepare("CALL UserLogin(?, ?, @responseMessage)");
        $stmt->bind_param("ss", $user, $pass);
        
        // Execute the statement
        if ($stmt->execute()) {
            
            // Fetch the output parameter
            $select = $conn->query("SELECT @responseMessage AS responseMessage");
            $res = $select->fetch_assoc();
            $result = $res['responseMessage'];
            
        } else {
            $result = "Error executing query.";
        }
        
        // Close the statement
        $stmt->close();
        
    } else {
        $result = "";
    }
    $conn -> close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}

?>