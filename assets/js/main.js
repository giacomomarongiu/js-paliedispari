console.log("Ben collegato");

//Creo una variabile e le assegno come valore una stringa
const myWord = "annnnna";
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
    }
    // Entrerò nell'else solo quando le mie variabili si saranno
    // invertite la posizione (essendo la parola palindroma)
} 
