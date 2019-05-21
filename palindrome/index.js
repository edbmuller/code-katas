//  PALINDROME KATA!
//  """""""""""""""""
//  Get a string and check if its palindrome, beeing an word or frase that may contain non-alphanumerics characteres.

var form = document.querySelector('.form');
var input = document.querySelector('.input');
var output = document.querySelector('.output');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  palindrome(input.value);
  input.value = '';
});

const print = (templateStr) =>  {
  var resultado = document.createElement('span');
  resultado.innerHTML = templateStr;
  output.appendChild(resultado);
}

/* 05.20.19 - 40 min */
function palindrome(str) {

  var strCleaned = str.replace(/[\W_]/g, '').toLowerCase();
  var strTested = strCleaned.split('').reverse().join("");
  if ( strCleaned === strTested ) { return print(`É palindromo: ${strTested}`) }
  
  return print(`Não é palindromo: ${strTested}`);
}