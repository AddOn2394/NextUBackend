<?php

$url = 'http://localhost/NextUBackend/data-1.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$array = json_decode($data, true);
$Ciudades = array();

foreach($array as $key => $value){
    if (!empty($value["Ciudad"]) && !in_array($value["Ciudad"], $Ciudades)){
        $Ciudades[] = $value["Ciudad"];
    }
}

print_r( json_encode($Ciudades));
