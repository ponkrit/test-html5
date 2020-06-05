<?php

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: '.$name.'<'.$email.'>' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

//$toEmail = 'rainer.heck@nine-elephants.com';
$toEmail = 'ponkrit13@gmail.com';
$subject = "Contact form";

$message = '
<table border="0" cellpadding="8">
    <tr>
        <td>Name: </td>
        <td>'.$name.'</td>
    </tr>
    <tr>
        <td>Company: </td>
        <td>'.$company.'</td>
    </tr>
    <tr>
        <td>Email: </td>
        <td>'.$email.'</td>
    </tr>
    <tr>
        <td>Phone No.: </td>
        <td>'.$phone.'</td>
    </tr>
    <tr>
        <td>Message: </td>
        <td>'.htmlspecialchars($message).'</td>
    </tr>
</table>';

$result = mail($toEmail, $subject, $message, $headers);
echo $result;
exit;
