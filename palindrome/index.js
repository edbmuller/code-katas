
//  PALINDROME KATA!
//  """""""""""""""""
//  Get a string and check if its palindrome, beeing an word or frase that may contain non-alphanumerics characteres.


  
/* 05.20.19 - 40 min */

function palindrome(str) {

  var strCleaned = str.replace(/[\Ws_]/g, '').toLowerCase();
  var strTested = strCleaned.split('').reverse().join("");
  if ( strCleaned === strTested ) { return console.log(`É palindromo: ${strTested}`); }
  
  return console.log(`Não é palindromo: ${strTested}`);
}

palindrome("Rir, o breve verbo rir!");
palindrome("Testando!!");
palindrome("A grama é amarga.");
palindrome("Racecar");
palindrome("Eduardo");