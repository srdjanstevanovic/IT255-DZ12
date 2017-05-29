<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");


include("functions.php");



if(isset($_POST['id']) && isset($_POST['name'])){
	
$gunID = intval($_POST['id']);
$name = intval($_POST['name']);
addGun($gunID,$name);

}



?>