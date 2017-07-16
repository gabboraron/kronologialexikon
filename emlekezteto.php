<?php 
	session_start(); 
?>
<!DOCTYPE html> 
<?php 
	$html=file_get_contents('bejelentkezes/index.html');
	
	$regisztracio = false;
	
	$errors = array();
	$van = true;
	
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
	
	///// emlekezteto mail /////
		if(isset($_POST['emlekezteto_email']) && !empty($_POST['emlekezteto_email'])){
			if (!filter_var($_POST['emlekezteto_email'], FILTER_VALIDATE_EMAIL) === false) {
				$emlekezteto_email=$_POST['emlekezteto_email'];
				/// kereses ///
				$talalt = false;
				$x = 0;
				foreach ($array as $value){
					$mailcim =  $value['mail'];
					//echo $mailcim; 
					if( $mailcim == $emlekezteto_email){
						$talalt = true;
						
						// The message
						$message = "Kedves ".$value['name']."!\r\n A megadott emlékezteto: " .$value['emlekezteto']."\r\n\r\nEz egy automatikusan továbbított üzenet, kérjük ne válaszoljon!";
						// Send
						mail($emlekezteto_email, 'Jelszo emlekezteto', $message);
						$html=file_get_contents('bejelentkezes/sikeresemlekeztetokeres.html');
						//echo "elment";
						break;
					}	
				}
			} else {
				/* NEM valid mailcim eset */
				$talalt = false;
			}
			
			if($talalt == false){
				$html=file_get_contents('bejelentkezes/sikertelenemlekeztetokeres.html');
				//echo "nincs ilyen cím";
			}
			
		}
	
	$html=mb_convert_encoding($html, 'UTF-8',mb_detect_encoding($html, 'UTF-8, ISO-8859-1', true));	
	echo $html;
	
?>