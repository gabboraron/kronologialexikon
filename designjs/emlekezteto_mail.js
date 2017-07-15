console.log('emlekezteto_mail.js OK');

$('#emlekzeteto_mail_kerese').addEventListener('click',emlekeztetoMutat);

	var i=0;

function emlekeztetoMutat(){
	if(i==0){
		$('#regisztracios_ablak').style.display = 'block';
		$('#emlekezteto_mail_kuldese').style.display = 'none';
		$('#emlekzeteto_mail_kerese').innerHTML = ' Elfelejtettem a jelszavam...';
		i = 1;
	}else{
		$('#emlekzeteto_mail_kerese').innerHTML = 'Regisztralok!';
		$('#regisztracios_ablak').style.display = 'none';
		$('#emlekezteto_mail_kuldese').style.display = 'block';
		i = 0;
	}
}
