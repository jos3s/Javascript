//Atribuição por desestruturação em objetos

const pessoa={
    nome:'José Ulisses',
    sobrenome:'Macedo',
    idade:18,
    endereco:{
        rua:'Felipe Santiago',
        numero:'520',
        cidade:'Russas',
        uf:'CE',
    },
};
console.log(pessoa);

//* A variavel pode ter um valor padrão
//const {nome='', sobrenome, idade}=pessoa;
//console.log(nome, sobrenome, idade);
const {nome: n, sobrenome, idade}=pessoa;
console.log(n, sobrenome, idade);

const {
    endereco:{rua, cidade:c='Trindade'}, //* É possivel altera o nome da variavel de saída
    endereco
} = pessoa;
console.log(rua, c);
console.log(endereco);
 
const {sobrenome:s, ...resto}=pessoa;
console.log(sobrenome, resto);