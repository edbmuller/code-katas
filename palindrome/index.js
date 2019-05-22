var form = document.querySelector('.form');
var input = document.querySelector('.input');
var output = document.querySelector('.output');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  palindrome2(input.value);
  input.value = '';
});

const print = (templateStr) =>  {
  var resultado = document.createElement('span');
  resultado.innerHTML = templateStr;
  output.appendChild(resultado);
}


//  PALINDROME KATA!
//  """""""""""""""""
//  Get a string and check if its palindrome, beeing an word or frase that may contain non-alphanumerics characteres.


/* 05.21.19 - 8 min */

const palindrome2 = (str) => {
  let strCleaned = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strCleaned.split('').reverse().join('');

  if (strReversed === strCleaned) {
    return print(`É palindromo: ${strReversed}`);
  } 

  return print(`Não palindromo: ${strReversed}`);
}

/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/

/* 05.20.19 - 40 min */
function palindrome(str) {

  var strCleaned = str.replace(/[\W_]/g, '').toLowerCase();
  var strTested = strCleaned.split('').reverse().join("");
  if ( strCleaned === strTested ) { return print(`É palindromo: ${strTested}`) }
  
  return print(`Não é palindromo: ${strTested}`);
}