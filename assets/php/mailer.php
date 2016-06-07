<?php
    require_once('recaptchalib.php'); 

    $secret = '#';
    $recaptcha_response = null;
    $reCaptcha = new ReCaptcha($secret);

    $response = array( 'success' => false );
    $formData = file_get_contents( 'php://input' );

    $data = json_decode( $formData );    

    if ( $data->submit) {
        $g_response = $data->google_response;
        $recaptcha_response = $reCaptcha->verifyResponse(
        'http://www.ericbarber.me',
        $g_response
    );

        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        if ( $name != '' && $email != '' && $message != '' ) {
            $mailTo = 'eric@ericbarber.me';
            $subject = 'New Site Inquiry';
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            if( $recaptcha_response->success){
                $success = mail( $mailTo, $subject, $body );
                if ( $success ) {
                $response[ 'success' ] = true;
                }
            }

          
        }
    }

    echo json_encode( $response );
?>