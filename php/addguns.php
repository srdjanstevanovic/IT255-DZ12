<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');


include("functions.php");



if(isset($_POST['id']) && isset($_POST['name'])){
	
$gunID = $_POST['id'];
$name = $_POST['name'];
addGun($gunID,$name);

}



?>