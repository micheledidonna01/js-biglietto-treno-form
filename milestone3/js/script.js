
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

    let select = document.getElementById('select').value;
    //se la lunghezza dei campi km e age sono pari a 0
    if (km.length == 0 || age.length == 0) {

        //mando un messaggio di inserire entrambi i campi
        alert('INSERISCI ENTRAMBI I CAMPI');

    //altrimenti
    } else {
        //se il passeggero ha un' età compresa tra i 0 e i 17 anni
        if (select == 2) {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            //applicando uno sconto del 20%
            cost = (km * 0.21);

            //calcolo lo sconto
            discount = (cost * 20) / 100;
            console.log(`Avendo un età tra i 0 e 18 anni, lo sconto è del 20%, in questo caso di ${discount}€`);

            //calcolo il prezzo finale
            cost = cost - discount;

            //altrimenti il passegero ha un'età superiore ai 65 anni
        } else if (select == 3) {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            //applicando uno sconto del 40%
            cost = (km * 0.21);

            //calcolo lo sconto
            discount = (cost * 40) / 100;
            console.log(`Avendo un età maggiore di 65 anni, lo sconto è del 40%, in questo caso di ${discount}€`);

            //calcolo il prezzo finale
            cost = cost - discount;

            //altrimenti
        } else if(select == 1) {
            //il costo del biglietto si calcola moltiplicando i km con 0,21(costo al km)
            cost = (km * 0.21);

        } else{
            alert('INSERISCI ENTRAMBI I CAMPI');
        }
    }

    //arrotondo il prezzo finale a 2 cifre dopo la virgola
    cost = cost.toFixed(2);

    //stampo il prezzo finale
    console.log(`Il costo del biglietto è ${cost}€`);

    //creo titolo per il risultato
    let h2 = document.getElementById('yourticket');
    h2.className = "d-block";
    h2.classList.add('text-center', 'my-4');

    //form contentente il risultato
    let result = document.querySelector('.result');

    //aggiungo una classe al div result
    result.classList.add('box');

    //creo elementi div
    let divPasseggero = document.createElement('div');
    let divInfo = document.createElement('div');

    let divKm = document.createElement('div');
    let divAge = document.createElement('div');
    let divResult = document.createElement('div');

    //creo elementi h3
    let h3Km = document.createElement('h3');
    let h3Age = document.createElement('h3');
    let h3Result = document.createElement('h3');
    let nomePasseggero = document.createElement('h3');

    //creo elementi p
    let pKm = document.createElement('p');
    let pAge = document.createElement('p');
    let pResult = document.createElement('p');
    let pPassegero = document.createElement('p');
    

    //definisco il display
    divKm.classList.add('col-4', 'flex-nowrap', 'text-left', 'align-middle', 'p-2');
    divAge.classList.add('col-4', 'flex-nowrap', 'text-left', 'align-middle', 'p-2');
    divResult.classList.add('col-4', 'flex-nowrap', 'text-left', 'align-middle', 'p-2');

    divPasseggero.classList.add('d-flex', 'col-3', 'flex-wrap', 'p-2');
    nomePasseggero.classList.add('text-center', 'p-2', 'd-block');
    pPassegero.classList.add('d-block');
    
    

    divInfo.classList.add('d-flex', 'col-9');
    

    //inserisco testo agli h3
    h3Km.innerText = 'Kilometri da percorrere';
    h3Age.innerText = 'Età del passeggero';
    h3Result.innerText = 'Costo biglietto';

    //inserisco testo ai p
    pKm.innerText = `${km}km`;
    pAge.innerText = `${age}`;
    pResult.innerText = `${cost}€`;
    pPassegero.innerText = `Nome passegero:`;
    nomePasseggero.innerText = 'Michele Didonna';

    //inserisco stile ai h3
    h3Km.style.fontSize = '14px';
    h3Age.style.fontSize = '14px';
    h3Result.style.fontSize = '14px';

    divPasseggero.style.backgroundColor = 'gray';
    nomePasseggero.style.fontSize = '12px';
    pPassegero.style.fontSize = '12px';
    //aggiungo i div al divpadre
    result.appendChild(divInfo);
    result.appendChild(divPasseggero);

    divPasseggero.appendChild(pPassegero);
    divPasseggero.appendChild(nomePasseggero);

    divInfo.appendChild(divAge);
    divInfo.appendChild(divResult);
    divInfo.appendChild(divKm);

    //aggiungo ai div titolo e testo
    divKm.appendChild(h3Km);
    divKm.appendChild(pKm);

    divAge.appendChild(h3Age);
    divAge.appendChild(pAge);

    divResult.appendChild(h3Result);
    divResult.appendChild(pResult);

}
