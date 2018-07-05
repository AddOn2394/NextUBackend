<?php

$url = 'http://localhost/NextUBackend/data-1.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$array = json_decode($data, true);
$Prices = array();

foreach($array as $key => $value){
    if (!empty($value["Precio"]) && !in_array($value["Precio"], $Prices)){
        $Prices[] = $value["Precio"];
    }
}
$variable=$_GET['variable'];
print_r( json_encode($Prices));
