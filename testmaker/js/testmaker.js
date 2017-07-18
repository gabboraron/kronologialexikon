"use strict"

var fst="";
var snd="";
var thrd="";
var keywords=[];
var cover="";

document.getElementById("save_test").addEventListener("click", function(){
	fst = document.getElementById("first").value;
	snd = document.getElementById("second").value;
	thrd = document.getElementById("third").value;

	if((fst!="")&&(snd!="")&&(thrd!=""))
	{
		document.getElementById("final_save_ok").style.display = "block";
		document.getElementById("final_save_NOTok").style.display = "none";

		notificationAboutElement = "Mentve: "+ fst + " " + snd + " " + thrd;
    	notifyMe(notificationAboutElement);

    	if(isURL(fst))
    	{
    		fst='<img src="'+fst+'" alt="picture for the test">';
    	}
    	
    	if(isURL(snd))
    	{
    		snd='<img src="'+snd+'" alt="picture for the test">';
    	}

    	if(isURL(thrd))
    	{
    		thrd='<img src="'+thrd+'" alt="picture for the test">';
    	}

	} else{
		document.getElementById("final_save_ok").style.display = "none";
		document.getElementById("final_save_NOTok").style.display = "block";
	}
});

document.getElementById('save_finaly_TEST').addEventListener("click", function(){
	cover = document.getElementById('cover').value;
	keywords = document.getElementById('keywords').value.split(",");
	
	notificationAboutElement = "Mentve! Kész!";
    notifyMe(notificationAboutElement);
});	

function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

