//Getter e Setters

//~ Construtor function
function Produto(nome,preco,estoque) {
    this.nome=nome;
    this.preco=preco;

    let estoquePrivado=estoque;

    Object.defineProperty(this,'estoque',{
        enumerable  :true,      
        configurable:false,     
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if(typeof valor==='number'){
                estoquePrivado=valor;
                return
            }
            console.log("Valor inválido");
            //+ throw new TypeError("O parâmetro recebido deve ser um Number");
        },
    });
}
const p1=new Produto('Camiseta',20,3);
console.log(p1);
p1.estoque='a';

//~ Factory function
function criarProduto(nome,preco,quantidade) {
    return{
        nome,
        preco,
        quantidade,
        get quantidade(){
            return quantidade;
        },
        set quantidade(valor){
            if(typeof valor ==='number'){
                quantidade=valor;
                return;
            }
            console.log('Tipo inválido')
        },
    };
}

const p2=criarProduto('Lápis',1,10);
p2.quantidade=200;
console.log(p2);
console.log(p2.quantidade);