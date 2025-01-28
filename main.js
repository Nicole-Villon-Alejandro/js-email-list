/*Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/

//Endpoint: https://flynn.boolean.careers/exercises/api/random/mail


//const emaillist = document.getElementById('email-list');

for( let i = 0; i < 10; i++ ){


fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {

    console.log(data.response);
    //risultato.innerHTML = data.response

})
    
   
}

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response => response.json())
.then(data => {

    console.log(data.response);

})

.catch(error => {
    // codice da eseguire in caso di errore
    console.error (error);
});




