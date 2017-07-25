"use strict"

var fst="";
var snd="";
var thrd="";
var keywords=[];
var keywordsNotSplitted;
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
	keywordsNotSplitted = document.getElementById('keywords');
  keywords = document.getElementById('keywords').value.split(",");
	
	notificationAboutElement = "Mentve! Szerverre küldést vár!";
    notifyMe(notificationAboutElement);
  html_saver();
  //var values = html;
  //document.cookie = "MuzeumbaratOktatoprogramTestMaker=" + values;
  //console.log("coockie: " + " MuzeumbaratOktatoprogramTestMaker" + values );
  document.getElementById('php_saver_box').style.display = "block";
  document.getElementById('final_save_ok').style.display = "none";
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


/**/
function byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
}
/**/

var html = "";
var head = "";
var body = "";

function html_saver(s) {
  head = '<!doctype html><html lang="hu" class="no-js">  <head>    <meta charset="UTF-8">    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">     <meta name="viewport" content="width=device-width, initial-scale=1.0">    <meta http-equiv="ScreenOrientation" content="autoRotate:enabled">      <meta name="twitter:card" content="summary" />    <meta name="twitter:site" content="@Muzeumbarat" />    <meta property="og:url" content="http://muzeumbarat.hu/oktat" />    <meta property="og:title" content="Kronológialexikon" />    <meta property="og:description" content="Ismeretterjesztő korosztálytól függetlenül, minden a kormeghatározásról" />    <meta property="og:image" content="'+ cover +'" />    <title>Kronológialexikon</title>    <meta name="description" content="Ismeretterjeszto korosztalytol fuggetlenul, minden a kormeghatározásról" />    <meta name="keywords" content="kutúra, minta, régi, kárpátmedence, magyarország, kronológia, ido, rendezés, sorrend, kultúrák, korok, tárgyak, régi, oktatóprogram, kultúrái, minták, tárgyak, múzeumok, tájegységek, oktatás, oktatóprogram, oktat, eucation, history, hungary, e-learning, online, ingyen, szabad' + keywordsNotSplitted + '" />' + "<meta name='owner' content='Vasi Múzeumbarát Egylet '>    <meta name='author' content='Burian Sándor' />" + '  <link rel="shortcut icon" href="css/ikonok/kicsi.gif">    <meta name="apple-mobile-web-app-title" content="Kronológialexikon"> ' + " <meta name='apple-mobile-web-app-capable' content='yes'>    <meta name='apple-touch-fullscreen' content='yes'> " +' <link rel="stylesheet" media="all and (orientation:landscape)" href="css/landscape.css">    <link rel="stylesheet" media="all and (orientation:portrait)" href="css/portrait.css"> <link rel="stylesheet" href="css/test.css"> <link rel="stylesheet" href="css/foundation.css"> </head>';
  body = '<body>  <div id="allomenu">      <div class="title-bar" data-responsive-toggle="menu" data-hide-for="medium">        <button class="menu-icon" type="button" data-toggle></button>        <div class="title-bar-title">Menü</div>      </div>    <div class="top-bar" id="menu">    <ul id="menu" class="top-bar vertical medium-horizontal  menu" data-dropdown-menu>      <div class="top-bar-left">              <li><a href="kulturaklista.php"  role="Az általunk bemutatott kultúrák és események listája">Lexikon</a></li>              <li><a href="test.php" role="Pár kérdésből álló Gyorstesztünk">Gyorsteszt</a></li>              <li><a href="#rolunk" role="Ugrás a bemutatkozásunkhoz">Rólunk</a></li>              <li><a href="#elerhetosegek" role="Ugrás az elérhetőségeinkhez">Elérhetőségek</a></li>              <li><a href="#impresszum" role="Ugrás az Impresszumhoz">Impresszum</a></li>      </div>      <div class="top-bar-right">              <li><a href="bejelentkezes.php">Bejelentkezés</a></li>      </div>    </ul>    </div>  </div><!-- fekvo menu -->  <div id="fekvomenu">    <div class="title-bar" data-responsive-toggle="menu" data-hide-for="medium">      <button class="menu-icon" type="button" data-toggle></button>      <div class="title-bar-title">Menü</div>    </div>    <div class="top-bar" id="menu">        <div class="top-bar">          <div class="top-bar-left">            <ul class="dropdown menu" data-dropdown-menu>              <li class="menu-text">Kronológialexikon</li>              <li><a href="kulturaklista.php" role="Az általunk bemutatott kultúrák és események listája">Lexikon</a></li>              <li><a href="test.php" role="Pár kérdésből álló Gyorstesztünk">Gyorsteszt</a></li>              <li><a href="#rolunk" role="Ugrás a bemutatkozásunkhoz">Rólunk</a></li>              <li><a href="#elerhetosegek" role="Ugrás az elérhetőségeinkhez">Elérhetőségek</a></li>              <li><a href="#impresszum" role="Ugrás az impresszumhoz">Impresszum</a></li>            </ul>          </div>          <div class="top-bar-right">            <ul class="menu">              <li><a href="bejelentkezes.php" role="Bejelentkezés">Bejelentkezés</a></li>            </ul>          </div>        </div>      </div>  </div>';

  body += '<div id="test_body"> <div id="description"> Kattints/koppints a megfelelő sorrendben a képekre/eseményekre </div>';
  body += '<div id="test" class="row" > <div id="fst" class="small-12 medium-4 large-4 columns">' + fst + '</div> <div id="snd" class="small-12 medium-4 large-4 columns">' + snd + '</div> <div id="thrd" class="small-12 medium-4 large-4 columns">' + thrd + '</div> </div>';
  body += '<a id="end_test" class="large success button" > Kész! </a> <div id="result"></div> <div>';
  body += '     <script src="js/vendor/jquery.js"></script>    <script src="js/vendor/what-input.js"></script>    <script src="js/vendor/foundation.js"></script>    <script src="js/app.js"></script>   <script src="js/test_randomizer_and_test_corrector.js"></script></body></html>';
  html = head + body;
  head = "";
  body = "";

  document.getElementById('html_php').value = html;
  document.getElementById('keywords_php').value = keywords;
  document.getElementById('cover_php').value = cover;
}
