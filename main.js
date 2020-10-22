// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.

var listaMine = [];
var leMiePosizioni = [];

while (listaMine.length < 16) {

    var minaRandom = getRndInteger (1, 100);
    // verifico se bomba è già presente nell'array
    // la inserisco solo se non è presente
    if (listaMine.includes(minaRandom) == false) {
        listaMine.push(minaRandom);
    }

}
console.log("lista mine :", listaMine);

// chiedere numero ad utente e verificare se già presente nella lista mine
// se presente gioco finisce e viene comunicato risultato
// se non è presente continuo ad inserire numeri fino ad un massimo di 84
var isBombaTrovata = false;


do {

    var laMiaScelta = parseInt(prompt("Inserisci un numero"));

    // verificare che la mia scelta non sia presente nell'array delle mine
    // listaMine.includes(laMiaScelta) == false)

    // verificare che la mia scelta non sia presente tra quelli inseriti
    // leMiePosizioni.includes(laMiaScelta) == false)
    var isGameOver = isUnaMina(laMiaScelta,listaMine);

    if (isGameOver == true) {

        isBombaTrovata = true;
        alert("Hai perso, hai totalizzato:" + leMiePosizioni.length + "punti");

    } else if (leMiePosizioni.includes(laMiaScelta) == false) {

        leMiePosizioni.push(laMiaScelta);

    } else {
        // avviso che si tratta di duplicato
        alert ("Dulpicato");
    }


} while ( isBombaTrovata == false && leMiePosizioni.length < 84);

 console.log(laMiaScelta);

if (leMiePosizioni.length == 84) {
    alert("Hai vinto, hai totalizzato:" + leMiePosizioni.length + "punti");
}

function isUnaMina (SceltaUtente, ArrayMine) {
    var controllo = false;

    if (ArrayMine.includes(SceltaUtente) == true) {
        controllo = true;
    }
    return controllo;
}

function getRndInteger (min,max){
    var RandomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return RandomNumber;
}
