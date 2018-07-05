<?php

$url = 'http://localhost/NextUBackend/data-1.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$array = json_decode($data, true);

print_r( json_encode($array));
