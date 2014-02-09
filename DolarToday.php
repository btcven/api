<?php 

ini_set( 'display_errors','0');

$DolarToday = file_get_contents('http://dolartoday.com');

list($oficialprecio, $DolarToday) = explode("<script type=\"text/javascript\" src=\"", $DolarToday);
	
	$DolarToday = (strlen($DolarToday) > 51) ? substr($DolarToday,0,51) : $DolarToday;

$DolarToday = 'https:'.$DolarToday;


$jsonDolarToday = json_decode(file_get_contents($DolarToday, NULL, NULL, 17),true);
	
$xve_usd = $jsonDolarToday['USD']['efectivo'];

$xve_eur = $jsonDolarToday['EUR']['efectivo'];

if (isset($_GET['json']) && $_GET['json'] == 'yes') {
	
	header('content-type: application/json; charset=utf-8');
	
	echo json_encode($jsonDolarToday);
	
}

?>