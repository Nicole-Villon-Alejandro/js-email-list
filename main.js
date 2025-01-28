/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/

//Endpoint: https://flynn.boolean.careers/exercises/api/random/mail

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {
    // codice per far qualcosa con la risposta
    console.log(data.response);
    risultato.innerHTML = data.response

})
.catch(error => {
    // codice da eseguire in caso di errore
    console.error(error);
});



