<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  // Create a new PHPMailer instance
  $mail = new PHPMailer();

  // SMTP configuration (adjust with your email provider settings)
  $mail->isSMTP();
  $mail->Host = 'smtp.example.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'your-email@example.com';
  $mail->Password = 'your-email-password';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  // Email content
  $mail->setFrom('your-email@example.com', 'Your Name');
  $mail->addAddress('taylor@gmail.com'); // Update with your email address
  $mail->Subject = 'New Contact Form Submission';
  $mail->Body = "Name: $name\nPhone: $phone\n\n$message";

  // Send email
  if ($mail->send()) {
    // Successful submission, redirect back to the top of the website
    header('Location: /pages/index.html'); // Use the correct relative or absolute URL
    exit;
  } else {
    // Error sending email
    echo "There was an error sending your message. Please try again.";
  }
}
?>
