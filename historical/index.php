<?php

ini_set( 'display_errors','0');

header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once('../config.php');

$connection = mysqli_connect($db_server, $db_user, $db_password, $db_database);
			
	if (mysqli_connect_errno()) {
	    printf("Connect failed: %s\n", mysqli_connect_error());
	    exit();
	}
	
	$q = "SELECT * FROM `$db_table_historical`";
			
	$result = mysqli_query($connection, $q);
	
	if (!$result){
	
		echo 'error in database';
	
	} else {
		
		mysqli_data_seek($result, 0);
		
		while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
			
			list($date, $item1) = explode(" ", $row['date']);
			
			// Filters
			if (isset($_GET['coin']) && $_GET['coin'] != "") {
							
				$set_coin = strtoupper($_GET['coin']);
			}
			
			if (isset($_GET['pair']) && $_GET['pair'] != "") {
				
				$set_pair = strtoupper($_GET['pair']);
			}
			
			// Bitcoin
			if ($set_coin != "BTC" && $set_coin != "") {
			
			} else {
					
				if (isset($row['usdbitcoin']) && $row['usdbitcoin'] != "" && $row['usdbitcoin'] != 0){
					
					if ($set_pair != "USDBTC" && $set_pair != "") {
						
					} else {
						$historical_USD_BTC[$date] = str_replace(',', '', $row['usdbitcoin']);
						
						$historical['USD_BTC'] = $historical_USD_BTC;
					}
					
				}
				
				if (isset($row['eurbitcoin']) && $row['eurbitcoin'] != "" && $row['eurbitcoin'] != 0){
					
					if ($set_pair != "EURBTC" && $set_pair != "") {
										
					} else {
						$historical_EUR_BTC[$date] = str_replace(',', '', $row['eurbitcoin']);
	
						$historical['EUR_BTC'] = $historical_EUR_BTC;
					}
				}
				
				if (isset($row['vefbitcoin']) && $row['vefbitcoin'] != "" && $row['vefbitcoin'] != 0){
					
					if ($set_pair != "VEFBTC" && $set_pair != "") {
										
					} else {
						$historical_XVE_BTC[$date] = str_replace(',', '', $row['vefbitcoin']);
						
						$historical['VEF_BTC'] = $historical_XVE_BTC;
					}
				}
				
				if (isset($row['arsbitcoin']) && $row['arsbitcoin'] != "" && $row['arsbitcoin'] != 0){
					
					if ($set_pair != "ARSBTC" && $set_pair != "") {
										
					} else {
						$historical_XAR_BTC[$date] = str_replace(',', '', $row['arsbitcoin']);
						
						$historical['ARS_BTC'] = $historical_XAR_BTC;
					}
				}
			} // if coin
			
			// Litecoin
			if ($set_coin != "LTC" && $set_coin != "") {
			
			} else {
			
				if (isset($row['usdlitecoin']) && $row['usdlitecoin'] != "" && $row['usdlitecoin'] != 0){
								
					if ($set_pair != "USDLTC" && $set_pair != "") {
																		
					} else {		
						$historical_USD_LTC[$date] = str_replace(',', '', $row['usdlitecoin']);
						
						$historical['USD_LTC'] = $historical_USD_LTC;
					}
				}
							
				if (isset($row['eurlitecoin']) && $row['eurlitecoin'] != "" && $row['eurlitecoin'] != 0){
								
					if ($set_pair != "EURLTC" && $set_pair != "") {
																		
					} else {		
						$historical_EUR_LTC[$date] = str_replace(',', '', $row['eurlitecoin']);
						
						$historical['EUR_LTC'] = $historical_EUR_LTC;
					}
				}
				
				if (isset($row['veflitecoin']) && $row['veflitecoin'] != "" && $row['veflitecoin'] != 0){
					
					if ($set_pair != "VEFLTC" && $set_pair != "") {
														
					} else {
						$historical_XVE_LTC[$date] = str_replace(',', '', $row['veflitecoin']);
	
						$historical['VEF_LTC'] = $historical_XVE_LTC;
					}
				}
				
				if (isset($row['arslitecoin']) && $row['arslitecoin'] != "" && $row['arslitecoin'] != 0){
					
					if ($set_pair != "ARSLTC" && $set_pair != "") {
																		
					} else {		
						$historical_XAR_LTC[$date] = str_replace(',', '', $row['arslitecoin']);
	
						$historical['ARS_LTC'] = $historical_XAR_LTC;
					}
				}
				if (isset($row['litecoin']) && $row['litecoin'] != "" && $row['litecoin'] != 0){
					
					if ($set_pair != "BTCLTC" && $set_pair != "") {
																		
					} else {		
						$historical_BTC_LTC[$date] = str_replace(',', '', $row['litecoin']);
	
						$historical['BTC_LTC'] = $historical_BTC_LTC;
					}
				}
			} // if coin
			
			// Mastercoin
			if ($set_coin != "MSC" && $set_coin != "") {
			
			} else {
			
				if (isset($row['usdmastercoin']) && $row['usdmastercoin'] != "" && $row['usdmastercoin'] != 0){
								
					if ($set_pair != "USDMSC" && $set_pair != "") {
																		
					} else {		
						$historical_USD_MSC[$date] = str_replace(',', '', $row['usdmastercoin']);
						
						$historical['USD_MSC'] = $historical_USD_MSC;
					}
				}
							
				if (isset($row['eurmastercoin']) && $row['eurmastercoin'] != "" && $row['eurmastercoin'] != 0){
								
					if ($set_pair != "EURMSC" && $set_pair != "") {
																		
					} else {		
						$historical_EUR_MSC[$date] = str_replace(',', '', $row['eurmastercoin']);
						
						$historical['EUR_MSC'] = $historical_EUR_MSC;
					}
				}
				
				if (isset($row['vefmastercoin']) && $row['vefmastercoin'] != "" && $row['vefmastercoin'] != 0){
					
					if ($set_pair != "VEFMSC" && $set_pair != "") {
														
					} else {
						$historical_XVE_MSC[$date] = str_replace(',', '', $row['vefmastercoin']);
	
						$historical['VEF_MSC'] = $historical_XVE_MSC;
					}
				}
				
				if (isset($row['arsmastercoin']) && $row['arsmastercoin'] != "" && $row['arsmastercoin'] != 0){
					
					if ($set_pair != "ARSMSC" && $set_pair != "") {
																		
					} else {		
						$historical_XAR_MSC[$date] = str_replace(',', '', $row['arsmastercoin']);
	
						$historical['ARS_MSC'] = $historical_XAR_MSC;
					}
				}
				
				if (isset($row['mastercoin']) && $row['mastercoin'] != "" && $row['mastercoin'] != 0){
					
					if ($set_pair != "BTCMSC" && $set_pair != "") {
																		
					} else {		
						$historical_BTC_MSC[$date] = str_replace(',', '', $row['mastercoin']);
	
						$historical['BTC_MSC'] = $historical_BTC_MSC;
					}
				}
			} // if coin
		} // while
	}

mysqli_close($connection);

echo json_encode($historical);

?>