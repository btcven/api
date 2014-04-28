<?php

// MasterXchange BTC_MSC price
$exchange_msc_btc_json = file_get_contents("https://masterxchange.com/api/v2/trades.php?currency=msc");
$exchange_msc_btc = json_decode($exchange_msc_btc_json, true);

if ($exchange_msc_btc_json != "") {
	
	$i_MSC = 0;
	$msc_last_trades = 0;
	
	while ($i_MSC <= 9) {

		$msc_last_trades = $exchange_msc_btc[$i_MSC]['price'] + $msc_last_trades;
		
		$i_MSC++;
	}
	
	$exchange_msc_btc = $msc_last_trades/10;
	
} else {
	$exchange_msc_btc = $btcven_json_decode['MSC']['BTC'];
}

$usd_msc = $usd * $exchange_msc_btc;
$eur_msc = $eur * $exchange_msc_btc;
$vef_msc = $vef * $exchange_msc_btc;
$ars_msc = $ars * $exchange_msc_btc;

$msc_btc = 1/$exchange_msc_btc;
$msc_btc = substr($msc_btc, 0, ((strpos($msc_btc, '.')+1)+8));

?>