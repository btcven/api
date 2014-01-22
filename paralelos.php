<?php
//error_reporting(E_ALL); 
ini_set( 'display_errors','0');

//header('content-type: application/json; charset=utf-8');

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
/*echo $chavezparalelo->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();*/

$fp = fopen('twitter/status1.json', 'w') or die("can't open file");
fwrite($fp, $chavezparalelo->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest());
fclose($fp);

//-------- Dolar Paralelo actualizado

$jsonparalelo = "twitter/status1.json";
$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);

/*
echo "<pre>";
print_r($jsonparalelo);
echo "</pre>";
*/

$twit = $jsonparalelo[0]['text'];

list($oficialprecio, $vefpar) = explode("Dólar = ", $twit);

$vefpar = (strlen($vefpar) > 5) ? substr($vefpar,0,5) : $vefpar;

$vefpar = str_replace(",", ".", $vefpar);

$vefpar = trim($vefpar);

/*
echo $vefpar;
*/

//-------- Euro Paralelo actualizado
list($oficialprecio, $eurpar) = explode(" y Euro = ", $twit);

$eurpar = (strlen($eurpar) > 5) ? substr($eurpar,0,5) : $eurpar;

$eurpar = str_replace(",", ".", $eurpar);

$eurpar = trim($eurpar);

/*
echo $eurpar;
*/

if ($vefpar == 0 || $vefpar == '') {

	$dolarparalelo = "dolartoday";
	
	$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
	$getfield = '?screen_name='.$dolarparalelo.'&count=1';
	$requestMethod = 'GET';
	$chavezparalelo = new TwitterAPIExchange($settings);
	/*echo $chavezparalelo->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest();*/
	
	$fp = fopen('twitter/status1.json', 'w') or die("can't open file");
	fwrite($fp, $chavezparalelo->setGetfield($getfield)
	             ->buildOauth($url, $requestMethod)
	             ->performRequest());
	fclose($fp);
	
	//-------- Dolar Paralelo actualizado
	
	//$jsonparalelo = "twitter/status1.json";
	$jsonparalelo = "twitter/status1.json";
	$jsonparalelo = json_decode(file_get_contents($jsonparalelo),true);
	
	
	//echo "<pre>";
	//print_r($jsonparalelo);
	//echo "</pre>";
	
	
	$twit = $jsonparalelo[0]['user']['description'];
	
	list($oficialprecio, $vefpar) = explode("cotizando a BsF. ", $twit);
	
	$vefpar = (strlen($vefpar) > 5) ? substr($vefpar,0,5) : $vefpar;
	
	$vefpar = str_replace(",", ".", $vefpar);
	
	$vefpar = trim($vefpar);
	
	
	//echo $vefpar;
	
	
	//-------- Euro Paralelo actualizado
	list($oficialprecio, $eurpar) = explode("\\u20ac a BSF. ", $twit);
	
	$eurpar = (strlen($eurpar) > 5) ? substr($eurpar,0,5) : $eurpar;
	
	$eurpar = str_replace(",", ".", $eurpar);
	
	$eurpar = trim($eurpar);
	
	
	//echo $eurpar;
	
	
}





//-----------------------------------

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=DolarBlue&count=1';
$requestMethod = 'GET';
$DolarBlue = new TwitterAPIExchange($settings);
/*echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();*/
             
$fp = fopen('twitter/status2.json', 'w') or die("can't open file");
fwrite($fp, $DolarBlue->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest());
fclose($fp);


//-------- Dolar Azul actualizado
$dolarazul = "DolarBlue";

$jsonurlblue = "twitter/status2.json";
$jsonblue = json_decode(file_get_contents($jsonurlblue),true);

/*
echo "<pre>";
print_r($jsonparalelo);
echo "</pre>";
*/

$arsblue = $jsonblue[0]['text'];

list($item1, $arsblue) = explode("Dolar Paralelo: $", $arsblue);

$arsblue = (strlen($arsblue) > 5) ? substr($arsblue,0,5) : $arsblue;

$arsblue = str_replace(",", ".", $arsblue);

$arsblue = trim($arsblue);
//-----------------------------------

?>