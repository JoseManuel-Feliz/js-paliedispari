console.log('JS OK')

/* 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */


/*
//1. Chiedere all'utente di inserire una parola con un form.
    //1.b Recuperare l'elemento di interesse dal DOM.

//2.Raccogliere al click i dati inserite dall'utente

//3. Creare una funzione 
    //3b. Scomporre la intera parola in lettere ovvero
        recuperare ciascun carattere dell'intera stringa.

    //3c. creare un LOOP il quale inizia a contare dal ultimo carattere 
        per poter invertire l'ordine dei caratteri

    //3d. Una volta invertito l'ordine dei caratteri unificare tutti i caratteri in un stringa

    //3e. Creare una condizione che verifichi che la parola invertita sia identica 
        alla parola iniziale 

//4. Stampare in console una messaggio appropiato riguardante l'esito della funzione

*/


/* Fase di preparazione */

//1. Chiedere all'utente di inserire una parola con un form.
//1.b Recuperare l'elemento di interesse dal DOM.

/* Form */
const formInput = document.getElementById('Palindroma')
/* Text area */
const textInputField = document.getElementById('Pali-word')
/* Btn */
const btnSubmit = document.getElementById('Btn-form')


/* Fase gestione eventi*/

//2.Raccogliere al click i dati inserite dall'utente


btnSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    const textToReverse = textInputField.value.trim();
    console.log(textToReverse);


    const reverseWord = textReverser(textToReverse);
    console.log(reverseWord);

    /* Fase output */

    const messageWrapper = document.getElementById('Palindroma-message')
    messageWrapper.innerText = message

})

/* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.

*/


//1. Recuperare gli elementi di interesse dal DOM. 

//2. Creo una funzione per poter generare un numero al cpu

//3. Recupero i dati inseriti dall'utente 

//4. Summo i due nr possibilmente con un funzione

//5. Creo una funzione per poter stabilire se la somma
// è pari oppure dispari

//6. Stampo sia il risultato e sia chi è stato il vincitore

/* Fase di elaborazione */

//1. Recuperare gli elementi di interesse dal DOM. 
const numChoiced = document.getElementById('Choice-num')

const evenOdd = document.getElementById('even-odd')

const btnRandomizer = document.getElementById('nolose')

const winnerPrintMessage = document.getElementById('winner-message')


/* Fase di gestione eventi */

//numero random cpu

const cpuMaxNum = 5;
btnRandomizer.addEventListener('click', function (e) {
    e.preventDefault

    const cpu = randomnNum(cpuMaxNum)
    console.log(cpu)

    //3. Recupero i dati inseriti dall'utente 

    const fieldnumChoiced = parseInt(numChoiced.value)
    console.log(fieldnumChoiced)

    const fieldEvenOdd = evenOdd.value
    console.log(fieldEvenOdd)
    //4. Summo i due nr possibilmente con un funzione

    const sumTotal = sumNumbers(cpu, fieldnumChoiced)
    console.log(sumTotal)

    //5. aggiungo la funzione creata in precedenza per poter stabilire se la somma
    // è pari oppure dispari

    const evenValidator = even(sumTotal)
    console.log(typeof evenValidator)
    let winner;

    //6. Stampo sia il risultato e sia chi è stato il vincitore

    fieldEvenOdd === evenValidator ? winner = 'player' : winner = 'cpu'

    const winnerMessage = `${evenValidator} ha vinto ${winner}`
    console.log(winnerMessage)
    winnerPrintMessage.innerText = winnerMessage


})




