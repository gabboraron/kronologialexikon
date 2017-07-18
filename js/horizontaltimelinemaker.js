document.getElementById('showeditor').addEventListener('click',showOrHideTheEditor);
var editorIsOn = 0;

function showOrHideTheEditor() {
	if (editorIsOn == 0) {
		document.getElementById('editor').style.display= 'none';
		document.getElementById('content').style.display= 'none';
		document.getElementById('large_content').style.display= 'block';
		editorIsOn = 1;
		document.getElementById('showeditor').innerHTML = "Show the editor";

	} else {
		document.getElementById('editor').style.display= 'block';
		document.getElementById('content').style.display= 'block';
		document.getElementById('large_content').style.display= 'none';
		editorIsOn = 0;
		document.getElementById('showeditor').innerHTML = "Hide the editor";
	}
}

/*
function make_the_json() {
	return('');
}*/