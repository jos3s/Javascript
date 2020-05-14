// Getter e Setters

const _velocidade=Symbol('velocidade');
class Carro {
    constructor(modelo) {
        this.modelo=modelo;
        this[_velocidade]=0;
    }
    get velocidade(){
        return this[_velocidade];
    }
    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor>=100 || valor<0) return;
        this[_velocidade]=valor;
    }
    acelerar(){
        if(this[_velocidade]>=100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade]--;
    }
}

const carro=new Carro('Fusca');
for(let i=0;i<120;i++){
    carro.acelerar();
}

//* Cria uma nova chave velociade sem relação com o velocidade do Symbol
//~ carro.velocidade=200;

//* Acessando o setter que usa a Symbol(velocidade)
//~ carro.velocidade=70;
console.log(carro);

class Pessoa {
    constructor(nome,sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
    get nomeCompleto(){
        return this.nome+' '+this.sobrenome;
    }
}
let pessoa=new Pessoa("Carlos",'Luis');
console.log(pessoa);
console.log(pessoa.nomeCompleto);