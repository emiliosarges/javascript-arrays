// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.
const numeros = [1,,3,,,,7,,,];
console.log(numeros);
console.log(numeros.length);
//-----------------------------------------------------------------------------------
// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
const elementos = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4', 'Elemento5'];
console.log(`Os elementos antes da alteração são:  ${elementos}`);
elementos[0] = 'NovoElemento';
console.log(`Os elementos após a alteração são:  ${elementos}`);
//-----------------------------------------------------------------------------------
// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const arrayVazio=[];
arrayVazio.push(1,2,3);
console.log(`Os número que constam no array são ${arrayVazio}`);
arrayVazio[0] = 2;
console.log(`O arrayVazio[0] recebeu o dobro do valor anterior e agora nosso array ficou com os seguintes valores: ${arrayVazio}`);
//------------------------------------------------------------------------------------
// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const outroArrayVazio = [];
outroArrayVazio.push(50, 100, 150);
console.log(`outroArrayVazio: ${outroArrayVazio}`);
//------------------------------------------------------------------------------------
// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = [];
clinica.push('Anya', 'Baunilha', 'Pitoco');
console.log(clinica);
clinica.pop();
console.log(clinica);
clinica.pop();
console.log(clinica);
clinica.pop();
console.log(clinica);
//------------------------------------------------------------------------------------