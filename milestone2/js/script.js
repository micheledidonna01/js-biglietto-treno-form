
//bottone che invia dati del form
let submit = document.getElementById('submitElement');

//inizializzo le variabili cost e discount
let cost;
let discount;

//aggiungo un evento al bottone durante il click assegnando le operazioni ad una funzione
submit.addEventListener('click', calcTicket);

//inizializzo la funzione
function calcTicket(event) {

    event.preventDefault();

    //numero di km da percorrere
    let km = document.getElementById('numKm').value;
    console.log(`Devi percorrere ${km}km`);

    //l'età del passegero
    let age = document.getElementById('eta').value;
    console.log(`L'età del passeggero è ${age}`);

    //se la lunghezza dei campi km e age sono pari a 0
    if (km.length == 0 || age.length == 0) {

        //mando un messaggio di inserire entrambi i campi
        alert('INSERISCI ENTRAMBI I CAMPI');
    //altrimenti
    } else {
        //se il passeggero ha un' età compresa tra i 0 e i 17 anni
        if ((age > 0) && (age < 18)) {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            //applicando uno sconto del 20%
            cost = (km * 0.21);

            //calcolo lo sconto
            discount = (cost * 20) / 100;
            console.log(`Avendo un età tra i 0 e 18 anni, lo sconto è del 20%, in questo caso di ${discount}€`);

            //calcolo il prezzo finale
            cost = cost - discount;

            //altrimenti il passegero ha un'età superiore ai 65 anni
        } else if (age >= 65) {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            //applicando uno sconto del 40%
            cost = (km * 0.21);

            //calcolo lo sconto
            discount = (cost * 40) / 100;
            console.log(`Avendo un età maggiore di 65 anni, lo sconto è del 40%, in questo caso di ${discount}€`);

            //calcolo il prezzo finale
            cost = cost - discount;

            //altrimenti
        } else {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            cost = (km * 0.21);

        }
    }

    //arrotondo il prezzo finale a 2 cifre dopo la virgola
    cost = cost.toFixed(2);

    //stampo il prezzo finale
    console.log(`Il costo del biglietto è ${cost}€`);

    //creo titolo per il risultato
    let h2 = document.getElementById('yourticket');
    h2.classList.add("d-block");

    //form contentente il risultato
    let result = document.querySelector('.result');

    //aggiungo una classe al div result
    result.classList.add('box');

    //creo elementi div
    let divKm = document.createElement('div');
    let divAge = document.createElement('div');
    let divResult = document.createElement('div');

    //creo elementi h3
    let h3Km = document.createElement('h3');
    let h3Age = document.createElement('h3');
    let h3Result = document.createElement('h3');

    //creo elementi h3
    let pKm = document.createElement('p');
    let pAge = document.createElement('p');
    let pResult = document.createElement('p');

    //definisco il display
    divKm.classList.add('col-4', 'flex-nowrap', 'text-center', 'border');
    divAge.classList.add('col-4', 'flex-nowrap', 'text-center', 'border');
    divResult.classList.add('col-4', 'flex-nowrap', 'text-center', 'border');

    //inserisco testo agli h3
    h3Km.innerText = 'Kilometri da percorrere';
    h3Age.innerText = 'Età del passeggero';
    h3Result.innerText = 'Costo biglietto';

    //inserisco testo ai p
    pKm.innerText = `${km}km`;
    pAge.innerText = `${age}`;
    pResult.innerText = `${cost}€`;

    //inserisco stile ai h3
    h3Km.style.fontSize = '16px';
    h3Age.style.fontSize = '16px';
    h3Result.style.fontSize = '16px';

    //aggiungo i div al divpadre
    result.appendChild(divKm);
    result.appendChild(divAge);
    result.appendChild(divResult);

    //aggiungo ai div titolo e testo
    divKm.appendChild(h3Km);
    divKm.appendChild(pKm);

    divAge.appendChild(h3Age);
    divAge.appendChild(pAge);

    divResult.appendChild(h3Result);
    divResult.appendChild(pResult);

}
