var form = document.querySelector('.form');
var input = document.querySelector('.input');
var output = document.querySelector('.output');

form.addEventListener( 'submit', function(evt) {
  evt.preventDefault();
  palindrome7(input.value);
  input.value = '';
});

const print = ( templateStr ) =>  {
  var resultado = document.createElement('span');
  resultado.innerHTML = templateStr;
  output.appendChild(resultado);
}


//  PALINDROME KATA!
//  """""""""""""""""
//  Get a string and check if its palindrome, beeing an word or frase that may contain non-alphanumerics characteres.

// Roma, me tem amor!
// Arara

/* 30.05.19 - 4 min */
const palindrome7 = ( str ) => {
  let strClean = str.replace(/[\W_]/g, '').toLowerCase();
  let strReversed = strClean.split('').reverse().join('');

  if ( strClean === strReversed ) { return print(`É palindromo: ${ strReversed }`); }

  return print(`Não é palindromo: ${ strReversed }`);
}













/*27.05.19 - 4 min */

const palindrome6 = ( str ) => {
  let strClean = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strClean.split('').reverse().join('');

  if ( strClean === strReversed ) {
    return print(`É palindromo | normal: ${ strClean } = reversed: ${ strReversed }`);
  }
  return print(`Não é palindromo | normal: ${ strClean } = reversed: ${ strReversed }`);
}










/*26.05.19 - 6 min */

const palindrome5 = ( str ) => {

  let strClean = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strClean.split('').reverse().join('');

  if ( strClean === strReversed ) { return print( `True | reversa: ${ strReversed } = normal: ${ strClean }` ) }

  return print( `False | reversa: ${ strReversed } != normal: ${ strClean }` );
}


/*
*
*
*
*
*
*
*/

/*24.05.19 - 3 min */

const palindrome4 = (str) => {

  let strClean = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strClean.split('').reverse().join('');

  if (strClean === strReversed) { return print(`É palindromo: ${ strReversed }`) }

  return print(`Não palindromo: ${ strReversed }`);
}

/*23.05.19 - 8 min */

const palindrome3 = (str) => {
  let strClean = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strClean.split('').reverse().join('');

  if ( strReversed === strClean ) {
    return print(`É palindromo: ${ strReversed }`);
  }

  return print(`Não é palindromo: ${ strReversed }`);
}


/*21.05.19 - 8 min */

const palindrome2 = (str) => {
  let strCleaned = str.toLowerCase().replace(/[\W_]/g, '');
  let strReversed = strCleaned.split('').reverse().join('');

  if (strReversed === strCleaned) {
    return print(`É palindromo: ${strReversed}`);
  } 

  return print(`Não palindromo: ${strReversed}`);
}


/*20.05.19 - 40 min */
function palindrome(str) {

  var strCleaned = str.replace(/[\W_]/g, '').toLowerCase();
  var strTested = strCleaned.split('').reverse().join("");
  if ( strCleaned === strTested ) { return print(`É palindromo: ${strTested}`) }
  
  return print(`Não é palindromo: ${strTested}`);
}