//* Paramentros

/* function funcao() {
    console.log(arguments);
}; */
function funcao(a,b,c) {
    console.log(arguments);
    console.log(a,b,c);
};
funcao(1,2,3,4);
funcao(1,2);

function somar(){
    let total=0;
    for(let argumento of arguments){
        total+=argumento;
    }
    return total;
}
console.log(somar(1,2,3,4));

function soma(a,b=0, c=0) {
    console.log(a+b+c);
}
soma(2);
soma(2,4);
soma(2, undefined ,3);

//* Destruturação com objetos
function desestruturacaoObj({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
desestruturacaoObj({
    nome:'José',
    sobrenome:'Ulisses',
    idade:19,
});
let obj={
    nome:'José',
    sobrenome:'Ulisses',
    idade:19,
}
desestruturacaoObj(obj);

//* Destruturação com arrays
function desestruturacaoArr([nome,sobrenome,idade]){
    console.log(nome,sobrenome,idade);
}
desestruturacaoArr(['José','Ulisses',19]);

//let conta=function conta(operador,acumulador,...numeros){}
//let conta= (operador,acumulador,...numeros) => {}
function conta(operador,acumulador,...numeros){
    for(let num of numeros){
       if(operador==="+") acumulador += num;
       if(operador==="-") acumulador -= num;
       if(operador==="*") acumulador *= num;
       if(operador==="/") acumulador /= num;
    }
    console.log(acumulador);
}
conta('*', 1, 12,56,46);