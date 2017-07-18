console.info('jelszoegyezes.js OK');

$('#regisztralok').addEventListener('click',jelszoegyezes);

function jelszoegyezes(){
	var elsojelszo = $("#uj_jelszo").value;
	var masodikjelszo = $("#uj_jelszo2").value;
	
	if(elsojelszo != masodikjelszo){
		$('#jelszoegyezes').innerHTML ="Nem egyezik a két jelszó!";
	}
	
}
