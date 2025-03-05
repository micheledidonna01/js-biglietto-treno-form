
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

    //arrotondo il prezzo finale a 2 cifre dopo la virgola
    cost = cost.toFixed(2);

    //stampo il prezzo finale
    console.log(`Il costo del biglietto è ${cost}€`);
    
}
