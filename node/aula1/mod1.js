const nome='José';
const sobrenome='Ulisses';

const falaNome= ()=> console.log(nome,sobrenome);



class Pessoa {
    constructor(nome) {
        this.nome=nome;
    }
}



exports.Pessoa=Pessoa;
//+ module.exports.nome=nome;
//+ exports.N=nome;
exports.nome=nome;
exports.sobrenome=sobrenome;
exports.falaNome=falaNome;