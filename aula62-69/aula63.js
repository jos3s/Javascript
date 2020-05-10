//Método splice
//             0 -5   1 -4     2 -3      3 -2      4 -1
let nomes=['José','Girão','Vicente','Jeferson','Lucas'];

// nomes.splice(indice, remover(n), elem1,elem2,...);
//           (e a mexer)(qquant a del)(a add)

//+ const arry=nomes.splice(4,1);
//+ const arry=nomes.splice(-1,1);
//+ const arry=nomes.splice(-2,Number.MAX_VALUE);
//+ const arry=nomes.splice(-2,2);
const array=nomes.splice(-2,1);
console.log(array);
console.log(nomes);

nomes=['José','Girão','Vicente','Jeferson','Lucas'];

//+ const array2=nomes.splice(3,0,'Isaac');
//+ const array2=nomes.splice(3,1,'Isaac');
const array2=nomes.splice(3,2,'Isaac', 'Vitória');
console.log(array2);
console.log(nomes);

//& pop
const array3=nomes.splice(-1,1);
array3;
//& shift
const array4=nomes.splice(0,1);
array4;
//& push
nomes.splice((nomes.length),0,'Eudes','Lamec');
console.log(nomes);
//& unshift
nomes.splice(0,0,'Minos');
nomes;
