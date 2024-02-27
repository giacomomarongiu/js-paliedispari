console.log("Ben collegato");

//Creo una variabile e le assegno come valore una stringa
/*const myWord = "annnnnna";
const myWord2 = "giacomo";

//Provo a muovermi dentro la stringa come se fosse un array
//console.log(myWord[2]); // Funziona

//Creo un ciclio for dove utilizzo due indici per l'array
for (let index = 0; index < myWord.length; index++) {
    //Uno parte dall'inizio
    const firstLetter = myWord[index];
    //Verifico la giusta selezione
    console.log(firstLetter);
    //L'altro parte dalla fine e avanza in modo speculare
    const lastLetter = myWord[myWord.length - (index + 1)]
    console.log(lastLetter);
    // Se sono diversi interrompo il ciclo se no il ciclo continua
    if (firstLetter !== lastLetter) {
        console.log("La parola non è palindroma");
        break;
    } else if ( index===(myWord.length-1)){
        //Se completo il ciclo senza interruzioni significa che la parola è palindroma
        console.log("La parola è palindroma");

    }
    // Entrerò nell'else solo quando le mie variabili si saranno
    // invertite la posizione (essendo la parola palindroma)
} */


//Guardo ciò che ho scritto e cerco di incorporare
// il codice in una funzione per essere riutilizza

//Cerco un nome adatto alla funzione
//Il parametro myWord è diverso dalla variabile omonima
function isThisWordPalindrome(myWord) {
    //Assegno il valore in entrata a una variabile interna
    checkedWord = myWord;
    //Copio il codice scritto sopra (ora commentato)
    for (let index = 0; index < myWord.length; index++) {
        //Uno parte dall'inizio
        const firstLetter = myWord[index];
        //Verifico la giusta selezione
        //console.log(firstLetter);
        //L'altro parte dalla fine e avanza in modo speculare
        const lastLetter = myWord[myWord.length - (index + 1)]
        //console.log(lastLetter);
        // Se sono diversi interrompo il ciclo se no il ciclo continua
        if (firstLetter !== lastLetter) {
            //console.log("La parola non è palindroma");
            //break;
            return false;
        } else if (index === (myWord.length - 1)) {
            //Se completo il ciclo senza interruzioni significa che la parola è palindroma
            return true;
        }
        // Entrerò nell'else solo quando le mie variabili si saranno
        // invertite la posizione (essendo la parola palindroma)
    }
}

//Chiamo la funzione e faccio un test
//isThisWordPalindrome("pippo")
//isThisWordPalindrome("anna")

//Faccio la stessa cosa ma con il promt
//const myWord = prompt("Inserisci una parola con lettere minuscole")
//console.log("Hai inserito", myWord);
//Visualizzo con valori booleani se la parola è palindroma
//console.log( isThisWordPalindrome(myWord));



//Ex 2
//PARI E DISPARI
//Dichiaro due variabili
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
const choice = Number(prompt("Inserisci 0 se pensi il numero sia pari, 1 se dispari"))
console.log("hai inserito", choice);
let randomNum= Number(Math.floor(Math.random() * 5));
let sum = randomNum + userNumber;

//Vedo la somma
console.log("la somma è",sum); //ok2

//Devo fare due verifiche
//La prima è capire se il numero random è pari/dispari
if (sum % 2 === 0) {
    //test
    console.log("Il numero è pari");
} else {
    console.log("E' dispari");
}

//La seconda è capire se la mia scelta è uguale all'esito del confronto precendente
if ((sum % 2 === choice)) {
    console.log("hai vinto");
 } else { console.log("hai perso"); }

