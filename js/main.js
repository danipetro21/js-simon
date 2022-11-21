// PROBLEMA
// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const btn = document.getElementById("btn");
const numeri = document.querySelector(".numeri");
const listaNumeri = document.getElementById("lista");
const numeriGe = genArrMinMax(5, 1, 50);
const timerHtml = document.getElementById("timer");
const punteggio = document.getElementById("punteggio");


btn.addEventListener("click",
    function () {
        //stampo a video i numeri casuali

        for(let i=0; i<5;i++){
            let nuovoElemento = creaLista();
            nuovoElemento.append(numeriGe[i]);
            listaNumeri.appendChild(nuovoElemento);
        }

        //creo timer
        creaTimer();
        //dopo il timer compare input per l'utente

        setTimeout(function () {
            punteggio.innerHTML = "il tuo punteggio e di " + inputUser();
        }, 32000);
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

function creaLista() {
    const lista = document.createElement("li");
    return lista;
}

// // FUNZIONE RIPROVA

// function riprova {
//     window.location.reload();
// }

// FUNZIONE TIMER

function creaTimer() {

    var sec = 30;
    var timer = setInterval(function () {
        document.getElementById('timer').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            numeri.classList.add("hide");
        }
    }, 1000);
}


// input utente e verifica del punteggio

function inputUser() {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        let inputU = prompt("Inserisci un numero");
        //verifico se i numeri sono all'interno dell'array dei numeri generati

        if (inputU == numeriGe[i]) {
            counter++;
        }
    }

    return counter;

}

