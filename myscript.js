`use scrict`;

const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const color = document.getElementById('colorepreferito');
const numero = document.getElementById('numero');
const password = document.getElementById('password');

nome.innerHTML = 'il tuo nome:';
cognome.innerHTML = 'il tuo cognome:';
color.innerHTML = 'il tuo colore preferito:';
password.innerHTML = 'la tua password:';

console.log(nome);
console.log(cognome);
console.log(color);
console.log(numero);

const NomeInput = prompt('Inserisci il tuo nome');
const CognomeInput = prompt('Inserisci il tuo cognome');
const ColoreInput = prompt('Inserisci il tuo colore preferito');
const casuale = Math.floor(Math.random() * 100);
nome.innerHTML += NomeInput;
console.log(nome.innerHTML);

cognome.innerHTML += CognomeInput;
console.log(cognome.innerHTML);

color.innerHTML += ColoreInput;
console.log(color.innerHTML);

password.innerHTML += NomeInput + CognomeInput + casuale;
