/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
iniziali();

// Invoca la funzione qui e stampa il risultato in console

function iniziali(names){
    let inizialiArray = [];
     for (let index = 0; index < names.length; index++) {
        inizialiArray.push(names[index][0]);
     }
    return (inizialiArray);
}

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(iniziali(names))