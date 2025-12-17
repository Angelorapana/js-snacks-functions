/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



 function ricercaVocali(parola){
    let conteggioVocali = 0;
    const vocali = ["a","e","i","o","u"];


 for (let index = 0; index < parola.length; index++) {

    if (vocali.includes(parola[index])) {
        conteggioVocali++;}}

      return(conteggioVocali);
 }
  


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(ricercaVocali(word));
      