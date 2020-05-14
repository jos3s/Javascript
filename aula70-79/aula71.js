// Object.defineProperty() e Object.defineProperties()

function Produto(nome,preco,estoque) {
    //% Configura várias propriedade
    Object.defineProperties(this,{
        nome:{
            enumerable  :true,   //mostra ou esconde a chave
            value       :nome,  //valor ou função
            writable    :true,   //pode alterar o valor ou não
            configurable:true,  //reconfigurar a chave ou apagar a chave
        },
        preco:{
            enumerable  :true,  //mostra ou esconde a chave
            value       :preco,  //valor ou função
            writable    :true,  //pode alterar o valor ou não
            configurable:true,  //reconfigurar a chave ou apagar a chave
        },
    });

    //% Configura apenas uma propriedade
    Object.defineProperty(this,'estoque',{
        enumerable  :true,      //mostra ou esconde a chave
        value       :estoque,   //valor ou função
        writable    :true,      //pode alterar o valor ou não
        configurable:false,     //reconfigurar a chave ou apagar a chave
    });
}
const p1=new Produto('Camiseta',20,3);
console.log(p1);
console.log(Object.keys(p1));