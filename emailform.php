<?php

if($_POST["message"]) {

	$to = "rowan@twinoaks.org";
	$subject = "Test mail";
	$message = "Hello! This is a test email message.";
	$from = "me@example.com";
	$headers = "From:" . $from;

	mail($to,$subject,$message,$headers)

}

?>

