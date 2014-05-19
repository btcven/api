<?php

ini_set( 'display_errors','0');

include_once("DolarToday.php");

$jsonparalelo = "https://conectabitcoin.com/es/market_prices.json";
$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);

if (!isset($xve_usd) || $xve_usd == 0) {
	
	$xve_usd = $jsonparalelo['usd_vef']['sell'];

	$xve_eur = $jsonparalelo['eur_vef']['sell'];

}

$xar_usd = $jsonparalelo['usd_ars']['sell'];

if (!isset($xar_usd) || $xar_usd == 0) {

$jsonparalelo = "http://ws.geeklab.com.ar/dolar/get-dolar-json.php";
$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);

$xar_usd = $jsonparalelo['blue'];

}
?>