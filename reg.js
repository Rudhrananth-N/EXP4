<?php 
$t = $_POST['fname'];
$l = $_POST['lname'];
$a = $_POST['mname'];
$b = $_POST['course'];
$c = $_POST['phone'];
$d = $_POST['email'];
$e = $_POST['pass'];
$f = $_POST['pass2'];
$p = "none";
if($b==1){
    $p="BE";
    }
    else if($b==2){
        $p="B.Tech";
        }
        else if($b==3){
            $p="MBA";
            }
            else if($b==4){
                $p="ME";
                }
                else if($b==5){
                    $p="M.Tech";
                    }
$con = mysqli_connect("localhost","root","","myapp9");
$sql = "INSERT INTO iot VALUES ('$t','$l','$a','$p','$c','$d','$e')";
$r=mysqli_query($con,$sql);
if($r){
    echo "Status - ok<br>";
    echo "Data Entered: <br> name: $t $a $l <br> course: $p <br> email id: $d <br>phone no: $c <br>password: $e";
}
else{
    echo "Status - oops";
}
?>
