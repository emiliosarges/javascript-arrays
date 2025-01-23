const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//     return nota + 1;
// }) 

const notasAtualizadas = notas.map((nota) => nota + 1 >=10 ? 10 : nota + 1); // os parenteses em volta do parametro sao opcionais -- arrow functions -- método ternario ( condição ? valorSeVerdadeiro : valorSeFalso )

console.log(notasAtualizadas);
