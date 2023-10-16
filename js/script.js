// MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
// - Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
// - Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"
// MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
// Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.

const listaSpesa = [];

let lista = document.getElementById('lista');
console.log(listaSpesa);
let stop = false;

while (!stop){
    let domanda = prompt ('Cosa vuoi acquistare?');

    if (domanda === 'stop'){
        stop = true
    } else {
        listaSpesa.push(domanda);
    }
};

for (let i = 0; i < listaSpesa.length; i++) {
    lista.innerHTML = listaSpesa;
}