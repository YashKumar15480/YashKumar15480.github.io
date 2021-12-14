<?php
   $sname = "localhost";
   $username = "root";
   $passname = "";
   $dbname = "psm";

   $conn = mysqli_connect($sname,$username,$passname,$dbname);
if($conn){
    echo"connection ok"; 
}
?> 