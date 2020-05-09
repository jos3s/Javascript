//Retorno

//* Retornando funções
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco+' '+resto;
    }
    return falaResto;
}
const fala=falaFrase('olá');
const resto=fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador) {
    return function (n){
        //lembra do multiplicador da hora da criação
        return n*multiplicador;
    }
    /* function multiplicacao(n){
        return n*multiplicador;
    }
    return multiplicador; */
}

const duplica=criaMultiplicador(2);
const triplica=criaMultiplicador(3);
const quadriplica=criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));