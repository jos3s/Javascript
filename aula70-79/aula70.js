//Revisando objetos

//% Objetos literais
const p1={
    nome:"José Ulisses", 
    sobrenome:'Silva'
};
delete p1.nome;
console.log(p1);
console.log(p1.sobrenome);

let p2 = new Object();
p2.nome="Luiz";
p2.sobrenome='Silva';
p2.idade=18;
p2.falarNome=function() {
    return 'Está falando';
};
p2.getAnoNascimento=function () {
    const dataAtual=new Date();
    return dataAtual.getFullYear()-this.idade;
}

console.log(p2); 
console.log(p2.falarNome()); 
console.log(p2.getAnoNascimento()); 
for (const key in p2){    
    console.log(p2[key]);
}


//% Factory function
function criarPessoa(nome,sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const pessoa=criarPessoa('Jeferson','Carlos');
console.log(pessoa.nomeCompleto);

const pessoa1=criarPessoa('Vicente','Augusto');
Object.freeze(pessoa1); //$ Congela a pessoa 1
pessoa1.nome='Carlos';
console.log(pessoa1.nomeCompleto);

//% Constructor function
function Cliente(nome,sobrenome) {
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.nomeCompleto=function(){
        return `${this.nome} ${this.sobrenome}`
    }
    //+ Object.freeze(this)
    //- Congela todos os objetos criado por essa função
}
const cliente=new Cliente('Eudes','Mendes');
console.log(cliente);