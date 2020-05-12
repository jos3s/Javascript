//Prototypes
//- Criar uma unica função para todos os objetos (cada objeto não precisa criar a sua 'versão')

function Pessoa(nome,sobrenome) {
    this.nome=nome;
    this.sobrenome=sobrenome;
}
Pessoa.prototype.nomeCompleto= function(){
    return this.nome +' '+ this.sobrenome;
}

const p1=new Pessoa('Luiz','Oliveira');
const p2=new Pessoa('José','Ulisses');
console.log(p1.nomeCompleto());
console.log(p2.nomeCompleto());
console.dir(p1);