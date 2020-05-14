// Factory functions com prototypes

function criaPessoa(nome,sobrenome){
    const pessoaPrototype={
        comer(){
            console.log(`${this.nome} está comendo`);
        },
        beber(){
            console.log(`${this.nome} está bebendo`);
        },
        falar(){
            console.log(`${this.nome} está falando`);
        },
    };
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome},
    });
}

let pessoa=criaPessoa('José','Ulisses');
pessoa.falar();
let pessoa1=criaPessoa('Maria','Antônia');
pessoa1.falar();