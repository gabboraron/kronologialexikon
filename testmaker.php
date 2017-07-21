<?php
		/*
	if(!isset($_COOKIE[$MuzeumbaratOktatoprogramTestMaker])) {
	    $html=file_get_contents('testmaker_html.html');
		echo $html;
	} else {
		$keywords = array();
		$cover = "";
		$test_html = $_COOKIE[$MuzeumbaratOktatoprogramTestMaker];
		
		$new_test = rand().".html";
		$myfile = fopen($new_test, "w") or die("Unable to create file!");
		write($myfile, $test_html)  or die("Can't write to file");
		fclose($myfile)  or die("Can't close the file!");
		echo $new_test;
	}*/

	    $html=file_get_contents('testmaker_html.html');
		echo $html;
?>



<script type="text/javascript">


	document.getElementById('save_finaly_TEST').addEventListener("click", function(){
		cover = document.getElementById('cover').value;
		keywords = document.getElementById('keywords').value.split(",");
		
		notificationAboutElement = "Mentve! Kész!";
	    notifyMe(notificationAboutElement);
	  html_saver();
	//  var values = html;
	//  document.cookie = "MuzeumbaratOktatoprogramTestMaker=" + values;
	//  console.log("coockie: " + " MuzeumbaratOktatoprogramTestMaker" + values );

	<?php $test_html = "<script>document.write(html)</script>"?>   


	});	

</script>
<?php 
		$new_test = rand().".html";
		$myfile = fopen($new_test, "w") or die("Unable to create file!");
		write($myfile, $test_html)  or die("Can't write to file");
		fclose($myfile)  or die("Can't close the file!");
		echo $new_test;
?>


<script type="text/javascript">
	console.log("$test_html: " + <?php echo $test_html; ?>);
	console.log("$new_test: " + <?php echo $new_test; ?>);
</script> 