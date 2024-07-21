<?php
// Establish a database connection (update with your database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "booking_details";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check the database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Insert data into the database
    $sql = "INSERT INTO details(name, email, phone, service, message)
            VALUES ('$name', '$email', '$phone', '$service', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Data added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>