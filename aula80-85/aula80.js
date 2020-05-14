//Classes

class Pessoa {
    constructor(nome,sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
    falar(){
        console.log(`${this.nome} está falando`);
    }
}

let pessoa= new Pessoa('José','Ulisses');
console.log(pessoa);