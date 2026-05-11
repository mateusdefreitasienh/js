// let btnClique = document.getElementById("btn-clique-me");
// let entradaTexto = document.getElementById("entrada-texto");

// btnClique.onclick = function() {
//     alert(entradaTexto.value);
//     console.log(entradaTexto.value);
// };

let entrada1 = document.getElementById("entrada-1");
let entrada2 = document.getElementById("entrada-2");

let btnMais = document.getElementById("btn-mais");
let btnMenos = document.getElementById("btn-menos");
let btnMultiplicacao = document.getElementById("btn-multiplicacao");
let btnDivisao = document.getElementById("btn-divisao");

btnMais.onclick = function() {
    let resultado = parseFloat(entrada1.value + entrada2.value);
    parseFloat(alert(resultado));
    parseFloat(console.log(resultado));
}
