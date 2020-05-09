//Factory Function => Função Fábrica

function criarPessoa(nome,sobrenome,altura,peso) {
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`;
        },
        altura,
        peso,
        //Getter
        get imc(){
            return (this.peso/this.altura**2).toFixed(2);
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor=valor.split(' ');
            this.nome=valor.shift() +' '+ valor.shift();
            this.sobrenome=valor.join(' ');
        }
    };
}

const p1=criarPessoa('José Ulisses', 'Silva',1.75, 64);
console.log(p1);
console.log(p1.fala('javascript'));
console.log(p1.imc);
console.log();

const p2=criarPessoa();
p2.nomeCompleto='Luiz Gustavo Girão Cardial';
console.log(p2.nomeCompleto);
console.log(p2.nome);
console.log(p2.sobrenome);