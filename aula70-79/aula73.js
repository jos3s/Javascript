//Outros métodos para objetos

//& Apenas linka as variáveis
const produto={nome:'Caneca', preco:1.8}; 
const outro=produto;
outro.nome='Borracha';
console.log(outro);
console.log(produto);

//$ Opções para fazer uma cópia
const outraCoisa={
    ...produto,  
    cor:"vermelha",     //- Criar uma outra chave
};
outraCoisa.nome='Caneta';
console.log(outraCoisa);

const caneca=Object.assign({},produto,{material:'porcelana'});  //%Recebe 1 ou n objetos
console.log(caneca);

const caneca2={nome:produto.nome};

//$ Vendo as configurações de propriedade de uma chave
console.log(Object.getOwnPropertyDescriptor(produto,'nome')); //+ (objeto,propriedade)

//$ Mostrando os valores da chaves
console.log(Object.values(produto));

//$ Mostrando as chaves e o valores em arrays
console.log(Object.entries(produto));