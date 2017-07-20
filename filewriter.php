 <?php
	$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
	$txt = "Mickey Mouse\n";
	fwrite($myfile, $txt) or die("Nem lehet a fileba írni");
	$txt = "Minnie Mouse\n";
	fwrite($myfile, $txt)  or die("Nem lehet a fileba írni");
	fclose($myfile)  or die("Nem lehet a filet bezárni");
?> 