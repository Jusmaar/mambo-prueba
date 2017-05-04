<?php

$db = require __DIR__.'/db.php';


class Users
{

	/*Creamos la Tabla*/
	public function Create_Table(){
		$sql= "CREATE TABLE 'users'(
		'id' INT AUTO_INCREMENT PRIMARY KEY,
		'name' VARCHAR(100) NOT NULL,
		'last_name' VARCHAR(100) NOT NULL,
		'address' VARCHAR(200) NOT NULL,
		'telephone' VARCHAR(7) NOT NULL,
		'cellphone' VARCHAR(9) NOT NULL,
		'avatar' VARCHAR(500)
		)";

		$db->query($sql);
	}


	/*Insertamos los datos del archivo .csv*/
	public function Insert_Users(){
		$archivo = fopen("users.csv", "r");
		while ($datos = fgetcsv($archivo,0,"|") !== FALSE) {
			$sql= "INSERT INTO users(id,name,last_name,address,telephone,cellphone,avatar) 
			VALUES (
				'$datos[1]',
				'$datos[3]',
				'$datos[4]',
				'$datos[5]',
				'$datos[6]',
				'$datos[7]')";
			$db->query($sql);
		}

	}

}

?>