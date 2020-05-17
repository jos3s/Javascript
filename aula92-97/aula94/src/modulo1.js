const nome='José';
const sobrenome='Ulisses';
//+ export const nome='José';
//+ export const sobrenome='Ulisses';
const idade=18;


function soma(x,y) {
    return x+y;
}

class Pessoa {
    constructor(nome,sobrenome) {
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
}

export default (x,y)=>x*y;
//+ export {nome as nome2, sobrenome,idade,soma};
export {nome , sobrenome,idade};