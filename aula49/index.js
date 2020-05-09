//Declarações de funções

//* Declaração de função
function oi() {
    console.log('oi');
}

//* First-class objects (Objetos de primeira classe) => Function Expression
const dado=function () {
    console.log('Sou um dado');
};
dado();

function umaFuncao(funcao) {
    funcao();
}

umaFuncao(dado);

//* Arrow function
const funcao = () =>{
    console.log("Arrow function");
};

funcao();

//* Dentro de objeto
const obj={
    falar:function () {
        console.log("Estou falando");
    },
    comendo () {
        console.log("estou comendo");
    },
}