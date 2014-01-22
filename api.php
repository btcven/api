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
$usd_btc = $CoinDesk->{'bpi'}->{'USD'}->{'rate_float'};
$eur_btc = $CoinDesk->{'bpi'}->{'EUR'}->{'rate_float'};

// VEF Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/vef.json') or die("can't get rates");
$CoinDesk = json_decode($CoinDesk);
$vef_btc = $CoinDesk->{'bpi'}->{'VEF'}->{'rate_float'};

// ARS Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/ars.json') or die("can't get rates");
$CoinDesk = json_decode($CoinDesk);
$ars_btc = $CoinDesk->{'bpi'}->{'ARS'}->{'rate_float'};

$eur_usd = $eur_btc / $usd_btc;
$vef_usd = $vef_btc / $usd_btc;
$ars_usd = $ars_btc / $usd_btc;

// Black Market USD prices in VEF (XVE) and ARS (XAR), EUR price in VEF (XVE)
require_once('paralelos.php');

// Bitcoin prices
$usd = $usd_btc;
$eur = $usd_btc * $eur_usd;
$vef = $xve_usd * $usd_btc;
$ars = $xar_usd * $usd_btc;

$btcven_export = array (
	
	'BTC'=>
		array(
			'USD'=>$usd,
			'EUR'=>$eur,
			'VEF'=>$vef,
			'ARS'=>$ars
		),

	'exchange_rates'=>
		array(
			'EUR_USD'=>$eur_usd,
			'VEF_USD'=>$vef_usd,
			'ARS_USD'=>$ars_usd,
			'XVE_USD'=>$xve_usd,
			'XVE_EUR'=>$xve_eur,
			'XAR_USD'=>$xar_usd
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
		
	foreach ($btcven_json['exchange_rates'] as $key => $value) {
		
		echo $key.': '.ReplaceDot($value).'<br />';
		
	}
	
}

?>
