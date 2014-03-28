<?php 

ini_set( 'display_errors','0');

$DolarToday = file_get_contents('http://dolartoday.com');

// Check if dolartoday.com is working or use _antibloqueo URL instead.
if ($DolarToday == '') {
	
	$antibloqueo = json_decode(file_get_contents('DolarToday.json'),true) or die("can't get _antibloqueo");
	
	$antibloqueo = $antibloqueo['_antibloqueo']['mobile'];
	
	$DolarToday = file_get_contents($antibloqueo);
}

list($item1, $DolarToday) = explode("<script type=\"text/javascript\" src=\"", $DolarToday);

list($DolarToday, $item2) = explode("rate.js", $DolarToday);

$DolarToday = 'https:'.$DolarToday.'rate.js';

$DolarToday = file_get_contents($DolarToday, NULL, NULL, 17);

// Only overwrite json file if not empty
if ($DolarToday != '') {

	$fp = fopen('DolarToday.json', 'w');
	fwrite($fp, $DolarToday);
	fclose($fp);
}

$jsonDolarToday = json_decode($DolarToday,true);
	
$xve_usd = $jsonDolarToday['USD']['efectivo'];

$xve_eur = $jsonDolarToday['EUR']['efectivo'];

if (!isset($xve_usd) || $xve_usd == '') {

	$btcven_json_2 = json_decode(file_get_contents('btcven.json'),true) or die("can't get rates");
	
	$xve_usd = $btcven_json_2['exchange_rates']['XVE_USD'];
	
	$xve_eur = $btcven_json_2['exchange_rates']['XVE_EUR'];
	
	// Notify by email that DolarToday prices are not working
	include('notify_mail.php');
}
	
if (isset($_GET['json']) && $_GET['json'] == 'yes') {

	header('content-type: application/json; charset=utf-8');
	header('Access-Control-Allow-Origin: *');
 
	echo json_encode($jsonDolarToday);
  	
}

?>