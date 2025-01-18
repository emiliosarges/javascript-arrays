// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const arrayPrimeiroDesafio = ['Emílio', 'Luiza', 'Anya', 'Luílio'];
for (let elemento of arrayPrimeiroDesafio) {
    console.log(elemento);  
}
// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function arrayMaroto(arrayTopzera) {
    for (let indice = 0; indice < arrayTopzera.length; indice++) {
        console.log(`O indice [${indice}] tem o conteúdo: ${arrayTopzera[indice]}`);
    }          
}
arrayMaroto(arrayPrimeiroDesafio);
// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const arrayInteiros = [10, 15, 20, 25, 30];

function somaArray(arrayNum) {
    let soma = 0
    for (let num of arrayNum) {
        soma += num;
    }
    return `A soma desse Array é ${soma}`;
}
console.log(somaArray(arrayInteiros))
// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const arrayNumerosVariados = [100, 200, 40, 5, 3, 990, 18, 14, 90];
function maiorMenorNumero (arrayLegal) {
    let valorMaior = arrayLegal[0];
    let valorMenor = arrayLegal[0];
    for (let i = 1; i < arrayLegal.length; i++) {
        if (arrayLegal[i] > valorMaior) {
            valorMaior = arrayLegal[i];
        }
        if (arrayLegal[i] < valorMenor) {
            valorMenor = arrayLegal[i];
        }
    }    
    console.log(`O maior valor é ${valorMaior} e o menor valor é ${valorMenor}`);
}
maiorMenorNumero(arrayNumerosVariados);
// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
for (let contador = 0; contador < numeros.length; contador++) {
    if (numeros[contador] % 2 === 0) {
        console.log(numeros[contador]);
    }
}
// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const arrayQualquerInteiros = [10, 7, 8, 30];

function calculoMedia(arrayInt) {
    let soma = 0
    for (let elemento of arrayInt) {
        soma += elemento;  
    }
    let media = soma / arrayInt.length;
    return media;
}
console.log(calculoMedia(arrayQualquerInteiros));