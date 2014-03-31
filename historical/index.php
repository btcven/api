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
			
			if (isset($row['vefbitcoin']) && $row['vefbitcoin'] != "" && $row['vefbitcoin'] != 0){
				
				$historical_XVE[$date] = str_replace(',', '', $row['vefbitcoin']);
			}
			
			if (isset($row['arsbitcoin']) && $row['arsbitcoin'] != "" && $row['arsbitcoin'] != 0){
							
				$historical_XAR[$date] = $usd = str_replace(',', '', $row['arsbitcoin']);
			}
		}	
	}

mysqli_close($connection);

$historical['VEF_BTC'] = $historical_XVE;
$historical['ARS_BTC'] = $historical_XAR;

echo json_encode($historical);

?>