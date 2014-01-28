<?php
//error_reporting(E_ALL); 
ini_set( 'display_errors','0');

//header('content-type: application/json; charset=utf-8');

if(function_exists('curl_exec')) {

	require_once('twitter-api-php/TwitterAPIExchange.php');
	
	/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
	$settings = array(
	    'oauth_access_token' => $tw_oauth_access_token,
	    'oauth_access_token_secret' => $tw_oauth_access_token_secret,
	    'consumer_key' => $tw_consumer_key,
	    'consumer_secret' => $tw_consumer_secret
	);


	
	$dolarparalelo = "chavezparalelo";
	
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	$getfield = '?screen_name='.$dolarparalelo.'&count=1';
	$requestMethod = 'GET';
	$chavezparalelo = new TwitterAPIExchange($settings);

	
	$fp = fopen('twitter/status1.json', 'w') or die("can't open file");
	fwrite($fp, $chavezparalelo->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest());
	fclose($fp);
	
	
	//-------- XVE_USD
	
	$jsonparalelo = "twitter/status1.json";
	$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);
	
	
	$twit = $jsonparalelo[0]['text'];
	
	list($oficialprecio, $xve_usd) = explode("Dólar = ", $twit);
	
	$xve_usd = (strlen($xve_usd) > 5) ? substr($xve_usd,0,5) : $xve_usd;
	
	$xve_usd = str_replace(",", ".", $xve_usd);
	
	$xve_usd = trim($xve_usd);

	
	//-------- XVE_EUR
	
	list($oficialprecio, $xve_eur) = explode(" y Euro = ", $twit);
	
	$xve_eur = (strlen($xve_eur) > 5) ? substr($xve_eur,0,5) : $xve_eur;
	
	$xve_eur = str_replace(",", ".", $xve_eur);
	
	$xve_eur = trim($xve_eur);

	
	if ($xve_usd == 0 || $xve_usd == '') {
	
		$dolarparalelo = "dolartoday";
		
		$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
		$getfield = '?screen_name='.$dolarparalelo.'&count=1';
		$requestMethod = 'GET';
		$chavezparalelo = new TwitterAPIExchange($settings);
		
		$fp = fopen('twitter/status1.json', 'w') or die("can't open file");
		fwrite($fp, $chavezparalelo->setGetfield($getfield)
		             ->buildOauth($url, $requestMethod)
		             ->performRequest());
		fclose($fp);
		
		
		//-------- XVE_USD
		
		$jsonparalelo = "twitter/status1.json";
		$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);
		
		
		
		$twit = $jsonparalelo[0]['user']['description'];
		
		list($oficialprecio, $xve_usd) = explode("cotizando a BsF. ", $twit);
		
		$xve_usd = (strlen($xve_usd) > 5) ? substr($xve_usd,0,5) : $xve_usd;
		
		$xve_usd = str_replace(",", ".", $xve_usd);
		
		$xve_usd = trim($xve_usd);
		
		
		//-------- XVE_EUR
		
		list($oficialprecio, $xve_eur) = explode("\\u20ac a BSF. ", $twit);
		
		$xve_eur = (strlen($xve_eur) > 5) ? substr($xve_eur,0,5) : $xve_eur;
		
		$xve_eur = str_replace(",", ".", $xve_eur);
		
		$xve_eur = trim($xve_eur);
		
		
	}
	
	
	
	
	
	//-----------------------------------
	
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	$getfield = '?screen_name=DolarBlue&count=1';
	$requestMethod = 'GET';
	$DolarBlue = new TwitterAPIExchange($settings);
	             
	$fp = fopen('twitter/status2.json', 'w') or die("can't open file");
	fwrite($fp, $DolarBlue->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest());
	fclose($fp);
	
	
	//-------- XAR_USD
	
	$dolarazul = "DolarBlue";
	
	$jsonurlblue = "twitter/status2.json";
	$jsonblue = json_decode(file_get_contents($jsonurlblue),true);

	
	$xar_usd = $jsonblue[0]['text'];
	
	list($item1, $xar_usd) = explode("Dolar Paralelo: $", $xar_usd);
	
	$xar_usd = (strlen($xar_usd) > 5) ? substr($xar_usd,0,5) : $xar_usd;
	
	$xar_usd = str_replace(",", ".", $xar_usd);
	
	$xar_usd = trim($xar_usd);

} else {

	$jsonparalelo = "https://conectabitcoin.com/es/market_prices.json";
	$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);
	
	$xve_usd = $jsonparalelo['usd_vef']['buy'];
	
	$xve_eur = $jsonparalelo['eur_vef']['buy'];
	
	$xar_usd = $jsonparalelo['usd_ars']['buy'];
	
}

?>