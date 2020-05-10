//* Função Contrutora => Objeto

function Pessoa(nome,sobrenome) {
    //+ Atributos privados -> criados sem o this
    const ID=1;
    const metodoInterno=function () {
        
    };

    //$ Atributos publicos -> criados com o this
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.fala=function (assunto) {
        console.log("Estou falando...");
    }
}

const p=new Pessoa('José', 'Silva');
const p1=new Pessoa('Luiz', 'Gustavo');
console.log(p,p1);
p1.fala();