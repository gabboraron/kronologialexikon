<?php 
	session_start(); 
?>
<!DOCTYPE html> 
<?php 
	// grab recaptcha library
	require_once "recaptchalib.php";

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
		if(isset($_POST['email']) || isset($_POST['jelszo'])){
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
				/*echo $adatbazisjelszo;
				echo '<br>';
				echo crypt($jelszo, $adatbazisjelszo);
				echo '<br>';*/
				//echo hash_equals($adatbazisjelszo, crypt($jelszo, $adatbazisjelszo));
				//if (hash_equals($adatbazisjelszo, crypt($jelszo, $adatbazisjelszo))) {
				if($adatbazisjelszo == crypt($jelszo, $adatbazisjelszo)){
					//echo "Password verified!";
				//}
				//if($jelszo == $adatbazisjelszo){
					$talalt = true;
					
					$felhasznev  = $value['name'];
					$avatar  = $value['avatar'];
					$google_login = $value['google_login'];
					$id=$value['ID'];
				}
				break;
			}
		}
		if($talalt == false){
			$van = false;
			array_push($login_errors, "Hibás e-mail - jelszó páros!");
		}
		
		//recaptcha ellenorzes
		//forrás: http://webdesign.tutsplus.com/tutorials/how-to-integrate-no-captcha-recaptcha-in-your-website--cms-23024
		
		// your secret key
		$secret = "6LfR_ycTAAAAANelSwHgoXTn3UW3Jm7_6KtyvyIB";
		 
		// empty response
		$response = null;
		 
		// check secret key
		$reCaptcha = new ReCaptcha($secret);
			
		// if submitted check response
		if ($_POST["g-recaptcha-response"]) {
			$response = $reCaptcha->verifyResponse(
				$_SERVER["REMOTE_ADDR"],
				$_POST["g-recaptcha-response"]
			);
		}
			
		if ($response != null && $response->success) {
			$ervenyesrecaptcha = true;
			//echo "Hi " . $_POST["name"] . " (" . $_POST["email"] . "), thanks for submitting the form!";
		} else {
			//echo "recaptcha NEM ok!";
			$html=file_get_contents('robot.html');
			$ervenyesrecaptcha = false;
		}
		
		if($bejelentkezes){
			if($ervenyesrecaptcha){
				if($van){
					$_SESSION['belepve'] = true;
					$_SESSION['ID'] = $id;
					$_SESSION['felhnev'] = $felhasznev;
					$_SESSION['jelszo'] = $jelszo;
					$_SESSION['mail'] = $email;
					$_SESSION['avatar'] = $avatar;
					$_SESSION['google_login'] = $google_login;
					$_SESSION['device'] = $_SERVER['HTTP_USER_AGENT'];
					
					//ip meghatarozas
					if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
						$ip = $_SERVER['HTTP_CLIENT_IP'];
					} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
						$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
					} else {
						$ip = $_SERVER['REMOTE_ADDR'];
					}
					$_SESSION['ip'] = $ip;
					
					//header('Location: bejelentkezve/bejelentkezve.php');
					//header('Location: mukodik.php');
					echo 'Átirányítás folyamatban...<br>';
					echo 'Redirecting...<br>';
					echo 'Réorienter...<br>';
					echo 'Umleiten...<br><br><br>';
					echo '<a href="bejelentkezve/bejelentkezve.php">Kattintson ide ha nem töltodne be!</a>';
					//echo '<a href="http://muzeumbarat.hu/oktat/bejelentkezve/bejelentkezve.php">bejelentkezve</a>';
					echo '<script>window.location.href="/oktat/bejelentkezve/bejelentkezve.php";</script>';
					  /*foreach ($_POST as $key => $value) {
						echo '<p><strong>' . $key.':</strong> '.$value.'</p>';
					  }*/
					exit();
				}else{
					echo "vmi nem stimmel";
					$html=file_get_contents('bejelentkezes/sikertelenbelepes.html');
				}
			}
		}
?>

<script type="text/javascript">
	// bejelentkezes error tomb kiiratas
	<?php
		//utf atalkitas
		$utferrors = array();
		foreach ($login_errors as $error){
			array_push($utferrors, (mb_convert_encoding($error, 'UTF-8',mb_detect_encoding($error, 'UTF-8, ISO-8859-1', true))));
		}
		echo $utferrors;
	?>
	//javascript atadas
	var belepes_hibak = <?php echo '["' . implode('", "', $utferrors) . '"]'; ?>;
</script>

<?php
	//html file kiíratás
	$html=mb_convert_encoding($html, 'UTF-8',mb_detect_encoding($html, 'UTF-8, ISO-8859-1', true));	
	echo $html;	
?>