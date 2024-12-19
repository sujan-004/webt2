<?php
session_start();

// Database Connection (Replace with your actual database credentials)
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "registration_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $fullName = filter_var($_POST['fullName'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    
    // Hash password (never store plain text passwords!)
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO users (full_name, email, phone, dob, gender, password) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $fullName, $email, $phone, $dob, $gender, $password);

    // Execute and check
    if ($stmt->execute()) {
        // Store success message in session
        $_SESSION['registration_success'] = true;
        $_SESSION['user_name'] = $fullName;
        
        // Redirect to confirmation page
        header("Location: confirmation.php");
        exit();
    } else {
        // Store error message
        $_SESSION['registration_error'] = "Registration failed. Please try again.";
        header("Location: index.html");
        exit();
    }

    $stmt->close();
}

$conn->close();
?>