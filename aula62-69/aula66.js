// Map
//~ Sempre tem o mesmo tamanho do array original

const nums=[5,50,80,1,2,3,5,8,7,11,15,22,27];

//+ const dobroNums=nums.map((valor, indice, array) => valor*2);
const dobroNums=nums.map(valor => valor*2);
console.log(dobroNums);

let pessoas=[
    {nome:'José', idade:20},
    {nome:'Gustavo', idade:23},
    {nome:'Vicente', idade:40},
    {nome:'Jeferson', idade:15},
    {nome:'Lucas', idade:27},
    {nome:'Eudes', idade:50},
    {nome:' Vitória', idade:18},
];

//Retorando um array com o nome das pessoas
const nomes=pessoas.map(obj => obj.nome);
console.log(nomes);

//Removendo a chave "nome" do objeto
//+ const idades=pessoas.map( obj => delete obj.nome);
const idades=pessoas.map( obj => ({idade:obj.idade}) );
console.log(idades);

//Adicionando uma chave id a cada objeto
let i=0;
const id=pessoas.map(obj => {
    const novo= {...obj};
    novo.id=i++;
    return novo;
});
console.log(id);
console.log(pessoas);

