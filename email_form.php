<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "gfaraci1@ithaca.edu";
 
    $email_subject = "GitHub Contact Form";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "Sorry, but there were error(s) in the form you just submited ";
 
        echo "These are the errors: <br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['nameInput']) ||
 
        !isset($_POST['emailInput']) ||
 
        !isset($_POST['messageInput'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $name_Input = $_POST['nameInput']; // required
 
    $email_from = $_POST['emailInput']; // required
 
    $comments = $_POST['messageInput']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid email address, make sure to include the at symbol .<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name_Input)) {
 
    $error_message .= 'The name you entered does not appear to be valid. Name can not have any special characters in it besides periods, dashes or apostrophes. <br />';
 
  }
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'Do not forget to write a message, cannot send an email without one.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($name_Input)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Message: ".clean_string($comments)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 
 
<!-- include your own success html here -->
 
 
 
Thank you for contacting me. I will get back to you soon. 
 
 
 
<?php
 
}
 
?>