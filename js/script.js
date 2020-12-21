// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// UTENTE SCEGLIE PARI O DISPARI MINUSCOLO + NUMERO DA 1 A 5 + NUMERO DA 1 A 5 PC RANDOM

var pariOdispari = prompt('Scegli pari o dispari').toLowerCase();
var numero = prompt('Inserisci un numero da 1 a 5');
var computer = numeroRandom(1,5);



//SOMMA NUMERO UTENTE E NUMERO COMPUTER

var sommaNumeri = somma(numero,computer);
// console.log(sommaNumeri);


// PARI E DISPARI + VINCITORE
var risultatoTotale = pariDispari(sommaNumeri);
console.log(risultatoTotale);

if (pariOdispari == risultatoTotale) {
  console.log('hai vinto');
}
else {
  console.log('hai perso');
}




//*********FUNZIONI*************
function numeroRandom(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function somma(n1,n2){
  return n1 + n2;
}

function pariDispari(n){
  var risultato = 'dispari';
  if (n % 2 == 0) {
    risultato = 'pari';
  }
  return risultato;
}
