<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Fake index</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>


    <?php
include 'db.php';
?>


    <?php

/* variables to be added to db */




/* LOGIN FUNCTION */

//function login(){ 
if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $passcode = $_POST['password'];
    $sql      = "SELECT firstName, lastName, passcode FROM users WHERE username='{$username}' AND passcode='{$passcode}'";
    $result   = $connection->query($sql);
    
    
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            
            echo $row['firstName'];
            echo $row['lastName'];
            echo 'login successful';
            
        }
        ;
    } else {
        echo 'incorrect username or password';
    }
    ;
    
    
} //end login function  


/* insert into db function */


else {
    
    $firstName   = $_POST['first-name'];
    $lastName    = $_POST['last-name'];
    $newUsername = $_POST['new-username'];
    $passcode    = $_POST['password'];
    $avatar      = $_POST['avatar'];
    
    $userexist = "SELECT * FROM users WHERE username='{$newUsername}'";
    $status    = $connection->query($userexist);
    
    if ($status->num_rows > 0) {
        
        echo 'username already exists';
        
    } else {
        
        $sql    = "INSERT INTO  users (firstName, lastName, username, passcode, avatar)
VALUES ('{$firstName}', '{$lastName}', '{$newUsername}', '{$passcode}', '{$avatar}')";
        $result = $connection->query($sql);
        echo 'registered';
        
    }
}
;
// end register function 






?>

   
    
</body>
</html>