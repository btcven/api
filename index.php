<?php

ini_set( 'display_errors','0');

/*
Bitcoin Venezuela

URL: http://bitcoinvenezuela.com

Twitter: @btcven

Email: contacto@bitcoinvenezuela.com
*/

// Config file with api keys and secrets
require_once('config.php');

$btcven_json = file_get_contents('btcven.json') or die("can't get rates");

$time = json_decode($btcven_json, true);
$time = $time['time']['timestamp'];

if(time()-900 > $time) {
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
	
	// LocalBitcoins prices for coupons
	$LocalBitcoins_24h_avg_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_24h_avg_usd") or die("can't get rates");
	/*
	$LocalBitcoins_buy_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_buy_usd") or die("can't get rates");
	$LocalBitcoins_sell_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_sell_usd") or die("can't get rates");
	*/
	
	$LocalBitcoins_coupons = $LocalBitcoins_24h_avg_usd * $xve_usd;
	
	$btcven_export = array (
	
		'time'=>
			array(
				'timestamp'=>time()
			),
		
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
			),
			
		'LocalBitcoins_coupons'=>
				array(
					'USD'=>$LocalBitcoins_24h_avg_usd,
					'XVE'=>$LocalBitcoins_coupons
				)
		);
		
	$btcven_json = json_encode($btcven_export);
	
	// Write JSON for timestamp and 15 minutes delay
	$fp = fopen('btcven.json', 'w');
	fwrite($fp, $btcven_json);
	fclose($fp);

}

if (!isset($_GET['html']) || $_GET['html'] == '') {
	
	header('content-type: application/json; charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	
	echo $btcven_json;
	
} if (isset($_GET['currency']) && $_GET['currency'] != '' && isset($_GET['amount']) && $_GET['amount'] != '') {
	
	$btcven_json = json_decode($btcven_json, true);
	
	$set_amount = str_replace(',', '.', $_GET['amount']);
	
	if ($_GET['currency'] == 'btc') {
	
		if (isset($_GET['to']) && $_GET['to'] != '') {
		
			$price_in_currency = $set_amount * $btcven_json['BTC'][strtoupper($_GET['to'])];
			
		} else {
		
			$price_in_currency = $set_amount * $btcven_json['BTC']['VEF'];
		}
		
	} else {
	
		$price_in_currency = $set_amount / $btcven_json['BTC'][strtoupper($_GET['currency'])];
		
	}
	
	echo sprintf('%.8f', $price_in_currency);
	
} elseif (isset($_GET['html']) && $_GET['html'] == 'yes') {
	
	function ReplaceDot($number ='') {
		return number_format($number, 2, ',', '.');
	}
	
	$btcven_json = json_decode($btcven_json, true);
	
	echo '<br />1 BTC<br />';
	
	foreach ($btcven_json['BTC'] as $key => $value) {
		
		echo $key.': '.ReplaceDot($value).'<br />';
		
	}
	
	if (isset($_GET['rates']) && $_GET['rates'] == 'yes') {
	
		echo '<br />Tasas de Cambio<br />';
			
		foreach ($btcven_json['exchange_rates'] as $key => $value) {
			
			echo $key.': '.ReplaceDot($value).'<br />';
		}
		
	}
	
	if (isset($_GET['coupons']) && $_GET['coupons'] == 'yes') {
		
		echo '<br />Cupones de LocalBitcoins<br />';
		
		foreach ($btcven_json['LocalBitcoins_coupons'] as $key => $value) {
				
		echo $key.': '.ReplaceDot($value).'<br />';
		
		}
	}
	
}

?>
