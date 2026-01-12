<?php
	include "conf.inc.php";

	try {
		$connection = new mysqli($db_ip, $db_login, $db_psswd, $db_name);
		$connection->set_charset("utf8mb4");
	}
	catch (exception $e) {
		error_log($e->getMessage());
		exit("Database Connection Error. Unable to Connect.");
	}
?>