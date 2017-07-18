console.info('regisztracios_hihak_kiir.js OK');

var hibalista = '<ul class="w3-ul w3-red">';

function logArrayElements(element, index, array) {
  hibalista = hibalista + '<li>' + element + '</li>';
}

hibak.forEach(logArrayElements);
hibalista = hibalista + '</ul>';

//console.info("hibak: " + hibak);
//console.info("hibalista: " + hibalista);



$('#regisztracios_hibak').innerHTML = hibalista;