//Revisão arrays e string

const nomes=['José','Jeferson','Girão','Vitória','Margarida'];
//+ const nomes2= new Array('Isaac','André');

console.log(nomes.length);

nomes[4]='Vicente';
delete nomes[4];
console.log(nomes);

//& Array passa valor por referência => mexer em um altera o outro
const novo=nomes;
novo.pop();
console.log(nomes, novo);

//$ Cópia completa de nomes
const novo2=[...nomes];

//* Removendo elementos e adicionando elementos
//~ pop -> fim & shift ->inicio
const retorno=nomes.pop();
const retorno2=nomes.shift();
console.log(retorno,retorno2);
//- push -> fim & unshift -> inicio
nomes.push('Eudes');
nomes.unshift('Lucas');
console.log(nomes);

//@ slice() -> fatia um arry
const nomes2=nomes.slice(1,3);
//+ const nomes2=nomes.slice(1,-1);
console.log(nomes2);

//@ split() -> fatia uma string com base em algo
const meu='José Ulisses Silva';
const meuArr=meu.split(' ');
console.log(meuArr);

//@ join() -> une um array com base em algo
const meuNome=meuArr.join('.');
console.log(meuNome);