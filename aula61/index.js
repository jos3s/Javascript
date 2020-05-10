//Funções geradoras
//$ Retorna valores diferentes em momentos diferentes

function* geradora1(){
    //Código que gera um valor
    yield 'Valor 1';
    //Código que gera um outro
    yield 'Valor 2';
    //Código que gera um outro
    yield 'Valor 3';
}

const g1=geradora1();
for(let valor of g1){
    console.log(valor);
}

/* console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); */

function* geradora2() {
    let i=0;
    while(true){
        yield i;
        i++;
    }
}

const g2=geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
}
const g4=geradora4();
for(let valor of g4){
    console.log(valor);
}


function* geradora5(){
    yield function () {
        console.log('Vim do y1');
    };
    //! Se  tiver um return a função termina nele, nada abaixo é executado
    yield function () {
        console.log('Vim do y2');
    }
}
const g5=geradora5();
const func=g5.next().value;
const func2=g5.next().value;
func();
func2();