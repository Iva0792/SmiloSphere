<?php
header("Content-Type: application/json");

// Database connection settings
$servername = "localhost";
$database = "u433694412_SmiloSphereDB";
$username = "u433694412_smiloadmin";
$password = "4&Mk/>OcxOsX";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get the search query from the URL parameters
$searchQuery = isset($_GET['q']) ? $_GET['q'] : '';

if (empty($searchQuery)) {
    echo json_encode(["error" => "Query parameter is required"]);
    exit;
}

// Prepare the SQL statement with a LIKE query
$sql = $conn->prepare("SELECT * FROM pacient WHERE name LIKE ?");
$searchTerm = "%" . $conn->real_escape_string($searchQuery) . "%";
$sql->bind_param("s", $searchTerm);

// Execute the query
$sql->execute();
$result = $sql->get_result();

// Fetch all results
$data = $result->fetch_all(MYSQLI_ASSOC);

// Return the results as JSON
echo json_encode($data);

// Close the connection
$sql->close();
$conn->close();
?>
