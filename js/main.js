// PROBLEMA
// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const btn = document.getElementById("btn");
const numeri = document.querySelector(".numeri");
let seconds = 30;

btn.addEventListener("click",
    function () {
        //stampo a video i numeri casuali
        numeri.innerHTML += genArrMinMax(5, 1, 50);      
        //creo timer
        //dopo il timer compare input per l'utente
        //verifico se i numeri sono all'interno dell'array dei numeri generati
        //restituisco il risultato

    });



// FUNZIONE GENERA NUMERI CASUALI

function randomInteger(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min)));
}
// ARRAY 5 NUMERI CASUALI

function genArrMinMax(quanti, minNum, maxNum) {

    const arrayRandom = [];
    // genera array di numeri random
    while (arrayRandom.length < quanti) {
        let newNumber = randomInteger(minNum, maxNum);
        if (!arrayRandom.includes(newNumber)) {
            arrayRandom.push(newNumber);
        }

    }

    return arrayRandom;
}


// // FUNZIONE RIPROVA

// function riprova {
//     window.location.reload();
// }

// FUNZIONE TIMER

function timer(second) {
    
    second--;

}


