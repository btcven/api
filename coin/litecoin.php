<?php

// BTC-e BTC_LTC price
$exchange_ltc_btc = file_get_contents("https://btc-e.com/api/2/ltc_btc/ticker");
$exchange_ltc_btc = json_decode($exchange_ltc_btc, true);
$exchange_ltc_btc = ($exchange_ltc_btc != "" ? $exchange_ltc_btc['ticker']['last'] : $btcven_json_decode['LTC']['BTC']);

$usd_ltc = $usd * $exchange_ltc_btc;
$eur_ltc = $eur * $exchange_ltc_btc;
$vef_ltc = $vef * $exchange_ltc_btc;
$ars_ltc = $ars * $exchange_ltc_btc;

$ltc_btc = 1/$exchange_ltc_btc;
$ltc_btc = substr($ltc_btc, 0, ((strpos($ltc_btc, '.')+1)+8));

?>