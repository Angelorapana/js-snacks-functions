/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console
function iniziaConA (names){
    let namesStartA =[];
    for (let index = 0; index < names.length; index++) {
        if (names[index][0] == "A")
        namesStartA.push(names[index]);
         }
         return (namesStartA); 
}




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(iniziaConA(names));
