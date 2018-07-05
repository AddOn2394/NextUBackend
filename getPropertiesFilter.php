<?php

$url = 'http://localhost/NextUBackend/data-1.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$array = json_decode($data, true);
function filter($value)
{
return($value == "New York");
}
print_r(array_filter($array,"filter"));
print_r( json_encode($array));
