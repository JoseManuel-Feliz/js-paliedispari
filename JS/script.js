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
