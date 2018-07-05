<?php 
$url = 'http://localhost/NextUBackend/data-1.json'; // path to your JSON file
$data = file_get_contents($url); // put the contents of the file into a variable
$array = json_decode($data, true);
$result = array();

foreach($array as $key => $value){

    if ($_POST["ciudad"] === '' && $_POST["tipo"] === '') { // echo 'No ha seleccionado ni ciudad ni tipo'

        $result[] = $value;


    } elseif ($_POST["ciudad"] !== '' && $_POST["tipo"] === '') { // 'Ha seleccionado ciudad ' . $_POST["ciudad"] . 'pero no tipo'
        if (!empty($value["Ciudad"]) && in_array($value["Ciudad"], [$_POST["ciudad"]])){
            $result[] = $value;
        }        
     

    } elseif ($_POST["ciudad"] === '' && $_POST["tipo"] !== '') { // 'Ha seleccionado tipo pero no ciudad' 

        if (!empty($value["Tipo"]) && in_array($value["Tipo"], [$_POST["tipo"]])){
            $result[] = $value;
        }        


    } else { //'Ha seleccionado ciudad y tipo'

        if (!empty($value["Ciudad"]) && !empty($value["Tipo"]) && in_array($value["Tipo"], [$_POST["tipo"]]) && in_array($value["Ciudad"], [$_POST["ciudad"]])){
            $result[] = $value;
        }        
       

    }

}

print_r( json_encode($result));
