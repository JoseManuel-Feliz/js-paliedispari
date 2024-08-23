console.log('JS OK')

/* palindroma */

/* 
  /3. Creare una funzione 
  
  //3b. Scomporre la intera parola in lettere ovvero
  recuperare ciascun carattere dell'intera stringa.
  
  //3c. creare un LOOP il quale inizia a contare dal ultimo carattere 
  per poter invertire l'ordine dei caratteri
  
  //3d. Una volta invertito l'ordine dei caratteri unificare tutti i caratteri in un stringa
  
  //3e. Creare una condizione che verifichi che la parola invertita sia identica 
  alla parola iniziale 
  */

function textReverser(text) {
    let reverseText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text.charAt(i);
    }

    text !== reverseText ? message = `${text} Non è una parola palindroma ${reverseText}`
        : message = `${text} è una parola palindroma  di ${reverseText}`

    return reverseText, message;
}


/* Pari o dispari */

//2. Creo le mie funzioni seguendo la scaletta


function randomnNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

function sumNumbers(a, b) {
    const sumNum = a + b
    return sumNum
}
function even(a) {
    let message;
    a % 2 === 0 ? message = 'Pari' : message = 'Dispari'
    return message
}
