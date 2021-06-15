// prendo 2 parole
var res;
var parola1 = prompt("Inserisci una parola.");
var parola2 = prompt("Inserisci un'altra parola.");
// le confronto
checkLength(parola1, parola2)
// FUNZIONI
function checkLength(word1, word2){
    
     if (word1.length > word2.length){
         res = alert("La prima parola, " + word1 + " è più lunga.");
     } else if (word2.length > word1.length){
         res = alert("La seconda parola, " + word1 + " è più lunga!");
     } else {
         res = alert("Le parole hanno la stessa lunghezza! :)");
     }
     return res;
}

// snack2
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var numeri = [1, 9, 10, 15, 0, 44, 23, 60, 69];

// prendo min e max;

var less = parseInt(prompt("Inserisci un numero fra 0 e 8"));
var more = parseInt(prompt("Ora inserisci un numero fra 0 e 8, maggiore o uguale a quello prima!"));

console.log(filter(numeri, less, more));

function filter(array, min, max){
    var numeriInter = [];
    for (var  i = min - 1; i < max; i++){
         if ( min == max){
              numeriInter.push(array[min]);
         } else {
              numeriInter.push(array[i]);
         }
     }
return numeriInter;
}
   
//  snack3
// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro

var array1 = ["Rosa", "Violetta", "Ciclamini", "Caprifoglio"];
var array2 = ["Rossa", "Gialla", "Fucsia", "Verde"];

function incrociArray(){
     if (array1.length == array2.length ){
          var array3 = [];
          for (var i = 0; i < array1.length; i++){
               array3.push(array1[i], array2[i]);
          }
     } else {
          console.log("Numero diverso di elementi, non possibile");
     }

     console.log(array3);
}




// snack4
// Scrivi una funzione capitalize che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo

var str = "cognome";

str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(str);