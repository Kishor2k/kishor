<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "karkikishor77@gmail.com";
    $subject = "You got a mail from your website";
    
    $headers = "From: ".$name. "\r\n" .
    
    $txt = "You have received an e-mail from ".$name . "\r\nEmail: " .$email ."\r\nMessage: ". $message;
    
   
        mail($to, $subject, $txt, $headers);
    
    
    header('Location:thankyou.html');
    
}




?>