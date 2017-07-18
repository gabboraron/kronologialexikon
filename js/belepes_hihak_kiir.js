console.info('belepes_hihak_kiir.js OK');

var hibalista = '<ul class="w3-ul w3-red">';

function logArrayElements(element, index, array) {
  hibalista = hibalista + '<li>' + element + '</li>';
}

belepes_hibak.forEach(logArrayElements);
hibalista = hibalista + '</ul>';

$('#regisztracios_hibak').innerHTML = hibalista;