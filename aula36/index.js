// For of

const nome='José Ulisses';
const nomes=['José', 'Ulisses','Silva'];

/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
} */

//* For in
for(let i in nome){
    console.log(nome[i]);
}
for(let i in nomes){
    console.log(nomes[i]);
}

//* For of
for (let valor of nome) {
    console.log(valor);
}
for (let valor of nomes) {
    console.log(valor);
}

// Aceita um terceiro elemento que retorna o array completo
nomes.forEach((element, i) => {
    console.log(element, i);
});


const pessoa={
    nome:'José',
    sobrenome:'Ulisses',
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//! For of e o For não funciona com objetos