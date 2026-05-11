// function somaDivide(numA, numB, numC) {
//     const resultadoSoma = numA + numB;
//     const resultadoDivide = resultadoSoma / numC;

//     return resultadoDivide;
// }

// const resultado = somaDivide(7, 3, 2);
// alert(resultado)

// ================================


// criar 4 funcoes, recebendo 2 numeros
// soma
// sobtrai
// multiplica
// divide

// function soma (n1, n2) {
//     return n1 + n2;
// }

// function subtrai (n1, n2) {
//     return n1 - n2;
// }

// function multiplica (n1, n2) {
//     return n1 * n2;
// }

// function divide (n1, n2) {
//     if (n2 === 0){
//         return "Inválido! Divisor não pode ser 0"
//     }
//     return n1 / n2;
// }

// console.log("Soma: ", soma(1, 3));
// console.log("Subtração: ", subtrai(1, 3));
// console.log("Multiplicação: ", multiplica(1, 3));
// console.log("Divisão: ", divide(10, 2));

// ===========================

// solicitar 2 numeros
// usuario escolhe a operação
// mostrar resultado

const numA = Number(prompt("Digite o numero A"));
const numB = Number(prompt("Digite o numero B"));
const operacao = prompt("Escolha a operação: +, -, *, /");

function calcular (n1, n2, op) {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Inválido! Divisor não pode ser 0";
            }
            return n1 / n2;
    }
}

const resultado = calcular(numA, numB, operacao);
alert("Resultado: " + resultado);