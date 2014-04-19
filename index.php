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

$btcven_json = file_get_contents('btcven.json');
$btcven_json_decode = json_decode($btcven_json, true);

$time = $btcven_json_decode['time']['timestamp'];

if(time()-900 > $time) {
	// Bitcoin
	include_once('coin/bitcoin.php');
	
	// BTC-e BTC_LTC price
	include_once('coin/litecoin.php');
	
	// MasterXchange BTC_MSC price
	include_once('coin/mastercoin.php');
	
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
				'ARS'=>$ars,
				'LTC'=>$ltc_btc,
				'MSC'=>$msc_btc
			),
		
		'LTC'=>
			array(
				'USD'=>$usd_ltc,
				'EUR'=>$eur_ltc,
				'VEF'=>$vef_ltc,
				'ARS'=>$ars_ltc,
				'BTC'=>$exchange_ltc_btc,
				'MSC'=>1/($exchange_msc_btc * $ltc_btc)
			),
			
		'MSC'=>
			array(
				'USD'=>$usd_msc,
				'EUR'=>$eur_msc,
				'VEF'=>$vef_msc,
				'ARS'=>$ars_msc,
				'BTC'=>$exchange_msc_btc,
				'LTC'=>$exchange_msc_btc * $ltc_btc
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
	
	$set_currency = strtoupper($_GET['currency']);
	$set_to = strtoupper($_GET['to']);
	
	
	$btcven_json = json_decode($btcven_json, true);
	
	$set_amount = str_replace(',', '.', $_GET['amount']);
	
	if ($set_currency == 'BTC') {
	
		if (isset($_GET['to']) && $_GET['to'] != '') {
		
			$price_in_currency = $set_amount * $btcven_json['BTC'][$set_to];
			
		} else {
		
			$price_in_currency = $set_amount * $btcven_json['BTC']['VEF'];
		}
		
	} else {
	
		$price_in_currency = $set_amount / $btcven_json['BTC'][$set_currency];
		
	}
	
	echo sprintf('%.8f', $price_in_currency);
	
} elseif (isset($_GET['html']) && $_GET['html'] == 'yes') {
	
	function ReplaceDot($number ='') {
		return number_format($number, 2, ',', '.');
	}
	
	$btcven_json = json_decode($btcven_json, true);
	
	echo '<br />1 BTC<br />';
	
	foreach ($btcven_json['BTC'] as $key => $value) {
		
		if ($key != 'LTC' && $key != 'MSC') {
			echo $key.': '.ReplaceDot($value).'<br />';
		} else {
			$echo = $key.': '.substr($value, 0, ((strpos($value, '.')+1)+8)).'<br />';
			echo str_replace('.', ',', $echo);
		}
		
	}
	
	if (isset($_GET['ltc']) && $_GET['ltc'] == 'yes') {
	
		echo '<br />1 LTC<br />';
			
		foreach ($btcven_json['LTC'] as $key => $value) {
			
			if ($key != 'BTC' && $key != 'MSC') {
				echo $key.': '.ReplaceDot($value).'<br />';
			} else {
				$echo = $key.': '.substr($value, 0, ((strpos($value, '.')+1)+8)).'<br />';
				echo str_replace('.', ',', $echo);
			}
			
		}
	
	}
	
	if (isset($_GET['msc']) && $_GET['msc'] == 'yes') {
		
		echo '<br />1 MSC<br />';
			
		foreach ($btcven_json['MSC'] as $key => $value) {
			
			if ($key != 'BTC' && $key != 'LTC') {
				echo $key.': '.ReplaceDot($value).'<br />';
			} else {
				$echo = $key.': '.substr($value, 0, ((strpos($value, '.')+1)+8)).'<br />';
				echo str_replace('.', ',', $echo);
			}
			
		}
	
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
