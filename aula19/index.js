//Valores primitivos e por referência

//? Primitivos => Strings, Number, Boolean, Undefined, Null
let nome='José';
nome='Jeferson';
//nome[0]='T'; //! Isso não é possível
console.log(nome);

let a='A';
let b='B';
console.log(a,b);
a='Z';
console.log(a,b);

//? Referências => Array, Object, Function
//faz o link entre as variáveis
let c=[1,2,3];
let d=c;
console.log(c,d);
c.push(6);
console.log(c,d); 
d.pop()
console.log(c,d);

let e=[...c];
c.push(5);
console.log(e, c, d); 

const A={
    nome:'Luiz',
    sobrenome:'Otávio',
};
//const B=A;
const B={...A};
A.nome='José';
console.log(A);
console.log(B);
