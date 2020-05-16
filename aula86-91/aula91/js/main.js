/* fetch('pessoas.json')
    .then(resposta=> resposta.json())
    .then(json=> carregaElementos(json));
 */

function carregaElementos(json){
    const table=document.createElement('table');
    for(let pessoa of json){
        const tr=document.createElement('tr');
        tr.appendChild(criarTd(pessoa.nome));
        tr.appendChild(criarTd(pessoa.idade));
        tr.appendChild(criarTd(pessoa.salario));
        table.appendChild(tr);
    }
    const container=document.querySelector('.resultado');
    container.appendChild(table);  
}

function criarTd(conteudo){
    const td=document.createElement('td');
    td.innerHTML=conteudo;
    return td;
}

axios('pessoas.json')
    .then(resposta=> carregaElementos(resposta.data));