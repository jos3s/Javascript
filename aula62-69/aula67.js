//Reduce

const nums=[5,50,80,1,2,3,5,8,7,11,15,22,27];

//+ const total=nums.reduce((acumulador,valor,indice,array), valor inicial);
const total=nums.reduce((acumulador,valor)=> acumulador+=valor ,0);
console.log(total);

//& Reduce como filter e map  
//! Não fazer isso
const filter=nums.reduce((acumulador,valor)=> {
    if(valor%2==0) acumulador.push(valor);
    return acumulador;
} ,[]);
const map=nums.reduce((acumulador,valor)=> {
    acumulador.push(valor*2);
    return acumulador;
} ,[]);
console.log(filter);
console.log(map);

let pessoas=[
    {nome:'José', idade:20},
    {nome:'Gustavo', idade:23},
    {nome:'Vicente', idade:40},
    {nome:'Jeferson', idade:15},
    {nome:'Lucas', idade:27},
    {nome:'Eudes', idade:55},
    {nome:'Vitória', idade:18},
];

//$ Retorna a pessoa mais velha
const maisVelha=pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade>valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);