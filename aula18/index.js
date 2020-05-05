//Objetos

/* const NOME='José Ulisses';
const SOBRENOME='Silva';
const IDADE=18; */

//* Declarando objetos diretamente
const PESSOA= {
    nome:'José Ulisses',
    sobrenome:'Silva',
    idade:25,

    fala(){
        console.log(`${this.nome +' '+ this.sobrenome} tem ${this.idade} anos`)
    }
};
console.log(PESSOA);
console.log(PESSOA.fala());


//* Função que cria objetos
function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; //*nome:nome
}
let pessoa=criarPessoa('Gustavo', 'Girão',18);
let pessoa1=criarPessoa('Vicente', 'Augusto',18);
console.log(pessoa, pessoa1);

