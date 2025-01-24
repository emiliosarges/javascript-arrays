// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
function juntarArrays(...arrays) {
    return [].concat(...arrays);
  }
  // Exemplo de uso:
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  const array4 = [10, 11, 12];

  const resultado = [...juntarArrays(array1, array2, array3),13, 14];
  resultado.push(15, 16, 17);
  console.log(resultado);

//   2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
//Com função
const valores = [10, 20, 30, 40, 50];
function somaElementos(arrayNumerico) {
    const soma = arrayNumerico.reduce((acumulador, valorElemento) => acumulador + valorElemento, 0);
    return `A soma desse array é ${soma}`;
}
console.log(somaElementos(valores));
//Sem função
const valores = [10, 20, 30, 40, 50];
const soma = valores.reduce((acumulador, valorElemento) => acumulador + valorElemento, 0);
    console.log( `A soma desse array é ${soma}`);

// 3 - Considere duas listas de cores:

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);

// 4. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}
const numArray = [1, 2, 3, 4, 5, 6];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares); // Saída: [2, 4, 6]

// 5. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

function filtraNumeros(arr) {
    return arr.filter(num => num % 3 === 0 && num > 5); // Filtra números múltiplos de 3 e maiores que 5
}

const numerosFiltrados = filtraNumeros(listaNumeros);
console.log(numerosFiltrados); // Saída: [6, 9, 12]

// 6. Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
  }
  
  const listaNumeros = [1, 2, 3, 4, 5];
  const somaTotal = somaElementosDoArray(listaNumeros);
  console.log(somaTotal); // Saída: 15