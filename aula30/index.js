//Atribuição por destruturação em arrays

const num=[1,2,3,4,5,6,7,8,9];
//const primeiroNum=num[0];

//* ...->rest
const [primeiro, segundo, , quarto, ...resto]=num;
console.log(primeiro, segundo, quarto);
console.log(resto);

const numeros=[
    [1,2,3], [4,5,6], [7,8,9],
];
const [ ,[ , , seis]]=numeros;

console.log(seis);
console.log(numeros[1]);
console.log(numeros[1][2]);
 