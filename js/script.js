// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// UTENTE SCEGLIE PARI O DISPARI MINUSCOLO + NUMERO DA 1 A 5 + NUMERO DA 1 A 5 PC RANDOM

var pariDispari = prompt('Scegli pari o dispari').toLowerCase();
var numero = prompt('Inserisci un numero da 1 a 5');
var computer = numeroRandom;



//*********FUNZIONI*************
function numeroRandom(min,max){
  return Math.floor(Math.random() * (max - min) ) + min;
}
