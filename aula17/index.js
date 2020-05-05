//Funções

function saudacao(nome){
    //console.log(`Bom Dia, ${nome}!`);
    return `Bom Dia, ${nome}!`;
}

const MSG=saudacao('José');
console.log(MSG);

function soma(x=0,y=0){
    return x+y;
}

console.log(soma(10,34));
console.log(soma(56,2.3));
console.log(soma());


const raiz= function (valor) {
    return valor**0.5;
}

console.log(raiz(9));


//* Arrow Function
const quadrado = n => n*n;

console.log(quadrado(9));