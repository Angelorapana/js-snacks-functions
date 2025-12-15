/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
vocali(word);

// Invoca la funzione qui e stampa il risultato in console

 function vocali(word){
 let ricercaVocali=[];
 for (let index = 0; index < word.length; index++) {
    let contenutoVocali=[];

    if (contenutoVocali == "a" && "e" && "i " && "o" && "u"){
        ricercaVocali.join("");
    }
 }return(ricercaVocali);
 }


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(vocali(word));