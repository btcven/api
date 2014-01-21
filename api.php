<?php

ini_set( 'display_errors','0');

/*
Bitcoin Venezuela

URL: http://bitcoinvenezuela.com

Twitter: @btcven

Email: contacto@bitcoinvenezuela.com
*/

//require_once('config.php');

$json = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice.json') or die("can't get rates");
$jdec = json_decode($json);
$usdbtc = $jdec->{'bpi'}->{'USD'}->{'rate_float'};

include('conversion.php');

$eurusd_x = $json2['EUR'];
$vefusd_x = $json2['VEF'];
$arsusd_x = $json2['ARS'];

$vefpar = $json2['VEF_USDparalelo'];
$eurpar = $json2['VEF_EURparalelo'];
$arsblue = $json2['ARS_USDazul'];

$usd = $usdbtc;
$eur = $usdbtc * $eurusd_x;
$vef = $vefpar * $usdbtc;
$ars = $arsblue * $usdbtc;

if (!isset($_GET['html']) || $_GET['html'] == '') {
	
	$btcven_export = array (
	
	'BTC'=>
		array(
			'USD'=>$usd,
			'EUR'=>$eur,
			'VEF'=>$vef,
			'ARS'=>$ars
		),
	
	'tasas_cambio'=>
		array( 
			'EUR'=>$eurusd_x,
			'VEF'=>$vefusd_x,
			'ARS'=>$arsusd_x,
			'VEF_USDparalelo'=>$vefpar,
			'VEF_EURparalelo'=>$eurpar,
			'ARS_USDazul'=>$arsblue
		)
	);
	
	$btcven_export = json_encode($btcven_export);
	
	echo $btcven_export;
	
} else {
	
	function ReplaceDot($number ='') {
		return number_format($number, 2, ',', '.');
	}
	
	
}

?>