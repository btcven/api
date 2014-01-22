<?php

ini_set( 'display_errors','0');

/*
Bitcoin Venezuela

URL: http://bitcoinvenezuela.com

Twitter: @btcven

Email: contacto@bitcoinvenezuela.com
*/

// config file with api keys and secrets
require_once('config.php');

// USD and EUR Bitcoin prices
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice.json') or die("can't get rates");
$CoinDesk = json_decode($CoinDesk);
$usdbtc = $CoinDesk->{'bpi'}->{'USD'}->{'rate_float'};
$eurbtc = $CoinDesk->{'bpi'}->{'EUR'}->{'rate_float'};

// VEF Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/vef.json') or die("can't get rates");
$CoinDesk = json_decode($CoinDesk);
$vefbtc = $CoinDesk->{'bpi'}->{'VEF'}->{'rate_float'};

// ARS Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/ars.json') or die("can't get rates");
$CoinDesk = json_decode($CoinDesk);
$arsbtc = $CoinDesk->{'bpi'}->{'ARS'}->{'rate_float'};

$eurusd_x = $eurbtc / $usdbtc;
$vefusd_x = $vefbtc / $usdbtc;
$arsusd_x = $arsbtc / $usdbtc;

// Black Market USD prices in VEF (XVE) and ARS (XAR), EUR price in VEF (XVE)
require_once('paralelos.php');

// Bitcoin prices
$usd = $usdbtc;
$eur = $usdbtc * $eurusd_x;
$vef = $vefpar * $usdbtc;
$ars = $arsblue * $usdbtc;

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
			'EUR_USD'=>$eurusd_x,
			'VEF_USD'=>$vefusd_x,
			'ARS_USD'=>$arsusd_x,
			'XVE_USD'=>$vefpar,
			'XVE_EUR'=>$eurpar,
			'XAR_USD'=>$arsblue
		)
	);
	
$btcven_json = json_encode($btcven_export);

if (!isset($_GET['html']) || $_GET['html'] == '') {
	
	echo $btcven_json;
	
} elseif (isset($_GET['html']) && $_GET['html'] == 'yes') {
	
	function ReplaceDot($number ='') {
		return number_format($number, 2, ',', '.');
	}
	
	$btcven_json = json_decode($btcven_json, true);
	
	echo '<br />1 BTC<br />';
	
	foreach ($btcven_json['BTC'] as $key => $value) {
		
		echo $key.': '.ReplaceDot($value).'<br />';
		
	}
	
	echo '<br />Tasas de Cambio<br />';
		
	foreach ($btcven_json['tasas_cambio'] as $key => $value) {
		
		echo $key.': '.ReplaceDot($value).'<br />';
		
	}
	
}

?>
