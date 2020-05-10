//Filter => retorna um array
//& filter(valor,indice,array)
const num=[5,50,80,1,2,3,11,15,27];

//* Função fora do filtro e retorna um array
function maior10(num){
    let array=[];
    for(let valor of num){
        if(valor>=10) array.push(valor);
    }
    return array;
}
const num2 = maior10(num);
console.log(num2);

//* Função fora do filtro, mas usa true ou false para dizer se um elemento deve ser adicionado ao novo array
function filtra1(valor) {
    return valor>10;
} 
const num3=num.filter(filtra1);
console.log(num3);

//$ Filtra e retorna numeros acima de 10
const num4=num.filter(n => n>10);
console.log(num4);


const pessoas=[
    {nome:'José', idade:20},
    {nome:'Gustavo', idade:23},
    {nome:'Vicente', idade:40},
    {nome:'Jeferson', idade:15},
    {nome:'Lucas', idade:27},
    {nome:'Eudes', idade:50},
    {nome:' Vitória', idade:18},
];

//~ Pessoas com nome com mais de 5 letras
const array=pessoas.filter( obj => obj.nome.length>=5);
console.log(array);

//~ Pessoas com mais de 30 anos
const array2=pessoas.filter( obj => obj.idade>30);
console.log(array2);

//~ Pessoas com nome que termina com a
const array3=pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(array3);