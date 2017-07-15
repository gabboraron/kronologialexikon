"use strict";

console.log('indexportrait.js OK');

//////////////////////////////////////////////
function $(selector){
	return document.querySelector(selector);
}

function $$(selector){
	return document.querySelectorAll(selector);
}
////////////////////////////////////////////////

$('#impressum').addEventListener('click',impresszummutat);

	var i=0;

function impresszummutat(){
	if(i==0){
		$('#impresszum_leiras').style.display = 'block';
		i = 1;
	}else{
		$('#impresszum_leiras').style.display = 'none';
		i = 0;
	}
}