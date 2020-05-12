//Manipulando Prototypes

//& new Object -> Object.prototype

const objA={
    chaveA:'A',
};
const objB={
    chaveB:'B',
};
const objC= new Object({chaveC:'C'});

//$ O objB tem como __proto__ o objA, que tem o proto padrão
Object.setPrototypeOf(objB, objA);
//+ Object.setPrototypeOf(objC, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveC,objC.chaveB, objC.chaveA);

function Produto(nome,preco) {
    this.nome=nome;
    this.preco=preco;
}
Produto.prototype.desconto= function (desconto) {
    this.preco -=(this.preco*(desconto/100));
};
Produto.prototype.aumento= function (aumento) {
    this.preco +=(this.preco*(aumento/100));
};
const produto=new Produto('Caneta',7);
produto.desconto(10);
console.log(produto.preco); 

const produtoLiteral={
    nome:"Caderno",
    preco:30,
};
Object.setPrototypeOf(produtoLiteral,Produto.prototype);
produtoLiteral.aumento(10);
console.log(produtoLiteral);

//& Definindo o prototype e criando (preenchendo) as chaves
const produto2=Object.create(Produto.prototype, {
    nome:{
        writable:true,
        configurable:true,
        enumerable:true,
        value: 'Lapis',
    },
    preco:{
        value:1.5,
        writable:true,
        configurable:true,
        enumerable:true,
    }
});
//+ produto2.preco=113;
produto2.aumento(100);
console.log(produto2);
