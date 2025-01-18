const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {     //includes() retorna true ou false - Verifica se há o valor no array.
        const indice = lista[0].indexOf(aluno); 
        const mediaAluno = lista[1][indice];
        return `${aluno} tem média ${mediaAluno}`;
    } else {
        return `Aluno ${aluno} não está na lista`;
    }
}

console.log(exibeNomeENota('Juliana'));
console.log(exibeNomeENota('Caio'));
console.log(exibeNomeENota('Carlos'));