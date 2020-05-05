//Arrys

//let alunos = ['José', 'Jeferson', 'Lucas', 1, 2, null];
let alunos = ['José', 'Jeferson', 'Lucas'];

console.log(`O tipo de Alunos é? ${typeof alunos}`);
console.log(`Alunos é uma instância de Arry?  ${alunos instanceof Array}`);

//alunos[0]='Eduardo';  

//* Adicionar elementos ao fim do arry
alunos[3]='Girão';   
alunos[alunos.length]='Vicente';
alunos[alunos.length]='Eudes';
alunos.push("Vitória");

//* Adicionar elemento ao inicio do arry
alunos.unshift('Isaac') ;
alunos.unshift('André');

//! Remove elementos do arry
let removido=alunos.pop();           //fim
let removidoInicio=alunos.shift();   //inicio
console.log(removido, removidoInicio);

//! Deleta o item nessa posição, mas a posição vai contiuar existindo
delete alunos[2];

//? Fatiando arrys
console.log(alunos.slice(0,4));

//* Verificando elemento inexistente no arry
console.log(alunos[50]);

console.log(alunos);
//console.log(alunos[1]); 