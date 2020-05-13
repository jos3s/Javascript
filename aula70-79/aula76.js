// Herança

//- Camiseta, Caneta e Caneca

function Produto(nome,preco) {
    this.nome=nome;
    this.preco=preco;
}
Produto.prototype.aumento=function (quantia) {
    this.preco+=quantia;
}
Produto.prototype.desconto=function (quantia) {
    this.preco+=quantia;
}

function Camiseta(nome,preco,cor) {
    Produto.call(this, nome,preco);
    this.cor=cor;
}

//~ Adiciona as funções do proto de Produto a Camiseta (troca o construtor para produto)
Camiseta.prototype= Object.create(Produto.prototype);
//~ Devolve o construtor de Camiseta para Camiseta
Camiseta.prototype.constructor=Camiseta;

//~ Sobrescrevendo a função aumento
Camiseta.prototype.aumento= function(percentual){
    this.preco+=(this.preco*(percentual/100));
};

const camiseta=new Camiseta('Regata',7.5,'Laranja');
camiseta.aumento(100);
console.log(camiseta);

function Caneca(nome,preco,material, estoque=0 ) {
    Produto.call(this, nome, preco);
    this.material=material;
    Object.defineProperty(this,'estoque', {
        enumerable:true,
        configurable:false, 
        get: ()=>{ return estoque},
        set: (valor)=> {
            if(typeof valor!== 'number') this.estoque=valor;
        },
    });
}
Caneca.prototype=Object.create(Produto.prototype);
Caneca.prototype.constructor=Caneca;

const caneca=new Caneca("Harry Potter", 30, 'Cerâmica');
console.log(caneca);