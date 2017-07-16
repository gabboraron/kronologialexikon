<?php 
	session_start(); 
?>
<!DOCTYPE html> 
<?php 
	$html=file_get_contents('bejelentkezes/index.html');
	
	$regisztracio = false;
	$bejelentkezes = false;
	
	$errors = array();
	$login_errors = array();
	
	$van = true;
	$talalt = false;
	
	$jelszavak = array();
	$felhasznalok = array();
	$mailek = array();
	
	$j = 0;
	$jj = 0;
	$ok = 1;
	
	//// adatbazis betoltese ////
		$json = file_get_contents('bejelentkezve/data/felhasznalokadatai.json');
		$array = json_decode($json, true);
		$i = 0;
		foreach ($array as $value){
			$i = $i+1;
		}
	//// xss védelem ////
		//forrás: http://www.w3schools.com/php/php_form_validation.asp
		function test_input($data) {
		  $data = trim($data);
		  $data = stripslashes($data);
		  $data = htmlspecialchars($data);
		  return $data;
		}
	
	///// bejelentkezes /////
		/*if(isset($_POST['email']) || isset($_POST['jelszo'])){
			$bejelentkezes = true;
		}
		
		//e-mail cim
		if(isset($_POST['email']) && !empty($_POST['email'])){
			if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) {
				$email=test_input($_POST['email']);
			}else{
				$van = false;
				array_push($login_errors, "Ez nem egy elfogadott e-mail cím!");
			}
		}else{
			$van = false;
			array_push($login_errors, "Adjon meg egy e-mail címet!");
		}
		
		//jelszo
		if(isset($_POST['jelszo']) && !empty($_POST['jelszo'])){
			$jelszo=test_input($_POST['jelszo']);
		}else{
			$van = false;
			array_push($login_errors, "Nem adott meg jelszót!");
		}
		
		//e-mail - jelszo paros ellenorzes
		foreach ($array as $value){
			$mailcim =  $value['mail'];
			if($mailcim == $email){
				$adatbazisjelszo = $value['password'];
				if($jelszo == $adatbazisjelszo){
					$talalt = true;
					
					$felhasznev  = $value['name'];
					$avatar  = $value['avatar'];
					$google_login = $value['google_login'];
				}
			}
		}
		if($talalt == false){
			$van = false;
			array_push($login_errors, "Hibás e-mail - jelszó páros!");
		}
		
		
		if($bejelentkezes){
			if($van){
				$_SESSION['belepve'] = true;
				$_SESSION['felhnev'] = $felhasznev;
				$_SESSION['jelszo'] = $jelszo;
				$_SESSION['mail'] = $email;
				$_SESSION['avatar'] = $avatar;
				$_SESSION['google_login'] = $google_login;
				
				header('Location: bejelentkezve/bejelentkezve.php');
				exit();
			}else{
				$html=file_get_contents('bejelentkezes/sikertelenbelepes.html');
			}
		}*/

	///// regisztracio /////
		if(isset($_POST['uj_felhasznalonev']) || isset($_POST['uj_felhasznalonev']) || isset($_POST['uj_email']) || isset($_POST['uj_jelszo']) || isset($_POST['uj_jelszoo']) || isset($_POST['uj_felhasznalo_jelszoemlekezteto'])){
			$regisztracio = true;
		}		
		//felhasznalo
		if(isset($_POST['uj_felhasznalonev']) && !empty($_POST['uj_felhasznalonev'])){
			$uj_felhasznalonev=test_input($_POST['uj_felhasznalonev']);
		}else{
			$van = false;
			array_push($errors, "Adjon meg egy felhsználónevet!");
		}
		
		//mailcim
		if(isset($_POST['uj_email']) && !empty($_POST['uj_email'])){
			//mail forma ellenorzese
			if (!filter_var($_POST['uj_email'], FILTER_VALIDATE_EMAIL) === false) {
				/* valid mailcim eset */
				//létezo felhsználó kiszurése
					foreach ($array as $value){
						$mailcim =  $value['mail'];
						if( $mailcim == $_POST['uj_email']){
							$talalt = true;
						}
					}
					if($talalt){
						$van = false;
						array_push($errors, 'Ilyen e-mail címmel már regisztráltak! kérjük lépjen be, vagy használja a jelszóemlékezteto funkciót!');
					}else{
						$uj_email=test_input($_POST['uj_email']);
					}				
			} else {
				/* NEM valid mailcim eset */
				$van = false;
				array_push($errors, "Ez nem egy elfogadott e-mail cím!");
			}	
		}else{
			$van = false;
			array_push($errors, "Adjon meg egy e-mail címet!");
		}

		//jelszo
		if(isset($_POST['uj_jelszo']) && !empty($_POST['uj_jelszo'])){
			$uj_jelszo=test_input($_POST['uj_jelszo']);
		}else{
			$van = false;
			array_push($errors, "Adjon meg egy jelszót!");
		}	
		
		//jelszo2
		if(isset($_POST['uj_jelszoo']) && !empty($_POST['uj_jelszoo'])){
			//jelszoegyezes
			if($_POST['uj_jelszoo'] != $_POST['uj_jelszo']){
				$van = false;
				array_push($errors, "Nem egyezik a két jelszó!");
			}else{
				$uj_jelszoo=test_input($_POST['uj_jelszoo']);
			}
		}else{
			$van = false;
			array_push($errors, "Nem egyezik a két jelszó!");
		}
		
		
		//uj_felhasznalo_jelszoemlekezteto
		if(isset($_POST['uj_felhasznalo_jelszoemlekezteto']) && !empty($_POST['uj_felhasznalo_jelszoemlekezteto'])){
			$uj_felhasznalo_jelszoemlekezteto=test_input($_POST['uj_felhasznalo_jelszoemlekezteto']);
		}else{
			$van = false;
			array_push($errors, "Nem adott meg emlékeztetöt!");
		}
		
		//ID megalkotasa
		$id=rand();
		while($idok != 2) {
			$idok=0;
			foreach ($array as $value){
				if( $id == $value['ID']){
					$id=rand();
					break;
					$idok=1;
				}
			}
			if($idok == 0){
				$idok =2;
			}
		}
		
		if($regisztracio){
			if($van){
				
				$array[$i]['ID'] = $id;
				$array[$i]['name'] = $uj_felhasznalonev;
				//$array[$i]['password'] = $uj_jelszo;
				$array[$i]['password'] = crypt($uj_jelszo);
				$array[$i]['mail'] = $uj_email;
				$array[$i]['emlekezteto'] = $uj_felhasznalo_jelszoemlekezteto;
				$array[$i]['jog'] = 'felhasznalo';
				$array[$i]['userinfo'] = $_SERVER['HTTP_USER_AGENT'];
				$array[$i]['google_login'] = 'nem';
				$array[$i]['avatar'] = '-';
				$array[$i]['vizsga'] = 'nemaktiv';
				$array[$i]['tel'] = '-';
				$array[$i]['bemutatkozas'] = '-';
				$array[$i]['teszteredmenyek'] = '[]';
				$array[$i]['ip'] = '-';
				
				$json = json_encode($array);
				file_put_contents("bejelentkezve/data/felhasznalokadatai.json", $json, LOCK_EX);
				$html=file_get_contents('bejelentkezes/sikeresregisztracio.html');
			}else{
				/*echo '<div id="hibak">';
				echo '<h1>Pár hibát észleltünk:</h1>';
				foreach($errors as $i){
					echo $i."<br>";
				}
				echo '</div>';*/
				$html=file_get_contents('bejelentkezes/sikertelenregisztracio.html');
			}
		}
?>

<script type="text/javascript">
	// regisztracios error tomb kiiratas
	<?php
		//utf atalkitas
		$utferrors = array();
		foreach ($errors as $error){
			array_push($utferrors, (mb_convert_encoding($error, 'UTF-8',mb_detect_encoding($error, 'UTF-8, ISO-8859-1', true))));
		}
		echo $utferrors;
	?>
	//javascript atadas
	var hibak = <?php echo '["' . implode('", "', $utferrors) . '"]'; ?>;
	//console.info('hibak: ' + hibak);


	/*
	// bejelentkezes error tomb kiiratas
	<?php
		//utf atalkitas
		$utferrors = array();
		foreach ($login_errors as $error){
			array_push($utferrors, (mb_convert_encoding($error, 'UTF-8',mb_detect_encoding($error, 'UTF-8, ISO-8859-1', true))));
		}
	?>
	//javascript atadas
	var belepes_hibak = <?php echo '["' . implode('", "', $utferrors) . '"]'; ?>;*/
</script>

<?php
	//html file kiíratás
	$html=mb_convert_encoding($html, 'UTF-8',mb_detect_encoding($html, 'UTF-8, ISO-8859-1', true));	
	echo $html;	
?>