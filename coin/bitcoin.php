<?php

// USD and EUR Bitcoin prices
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice.json');
$CoinDesk = json_decode($CoinDesk, true);
$usd_btc = ($CoinDesk != "" ? $CoinDesk['bpi']['USD']['rate_float'] : $btcven_json_decode['BTC']['USD']);
$eur_btc = ($CoinDesk != "" ? $CoinDesk['bpi']['EUR']['rate_float'] : $btcven_json_decode['BTC']['EUR']);

// VEF Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/vef.json');
$CoinDesk = json_decode($CoinDesk, true);
$vef_btc = ($CoinDesk != "" ? $CoinDesk['bpi']['VEF']['rate_float'] : $btcven_json_decode['BTC']['VEF']);

// ARS Bitcoin price (gov's regulated price)
$CoinDesk = file_get_contents('http://api.coindesk.com/v1/bpi/currentprice/ars.json');
$CoinDesk = json_decode($CoinDesk, true);
$ars_btc = ($CoinDesk != "" ? $CoinDesk['bpi']['ARS']['rate_float'] : $btcven_json_decode['BTC']['ARS']);

$eur_usd = $eur_btc / $usd_btc;
$vef_usd = $vef_btc / $usd_btc;
$ars_usd = $ars_btc / $usd_btc;

// Black Market USD prices in VEF (XVE) and ARS (XAR), EUR price in VEF (XVE)
require_once('paralelos.php');
// Hola soy Yurian Probando los permisos de acceso
// Bitcoin prices
$usd = $usd_btc;
$eur = $usd_btc * $eur_usd;
$vef = $xve_usd * $usd_btc;
$ars = $xar_usd * $usd_btc;

// LocalBitcoins prices for coupons
$LocalBitcoins_24h_avg_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_24h_avg_usd");
$LocalBitcoins_24h_avg_usd = ($LocalBitcoins_24h_avg_usd != "" ? $LocalBitcoins_24h_avg_usd : $btcven_json_decode['LocalBitcoins_coupons']['USD']);
/*
$LocalBitcoins_buy_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_buy_usd");
$LocalBitcoins_sell_usd = file_get_contents("https://localbitcoins.com/equation/localbitcoins_sell_usd");
*/

$LocalBitcoins_coupons = $LocalBitcoins_24h_avg_usd * $xve_usd;

?>