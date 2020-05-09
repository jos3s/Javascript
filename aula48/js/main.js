const tarefas=document.querySelector(".tarefas");
const entrada=document.querySelector('.entrada');

entrada.addEventListener('keypress', function (el) {
    if(el.keyCode===13){
        if(entrada.value) criarTarefa(entrada.value);
    }
});

window.addEventListener('click', function(el){
    e=el.target;
    if(e.classList.contains('remover')){
        e.parentElement.remove();
        salvarTarefas();
    }
    if(e.classList.contains('adicionar')){
        if(entrada.value) criarTarefa(entrada.value);
    }
});

function criarElemento(e, txt){
    let elemento=document.createElement(e);
    elemento.textContent=txt;
    return elemento;
}
function criarTarefa(txt){
    const li=criarElemento('li',txt);
    criarBotao(li);
    tarefas.appendChild(li);
    limparInput();
    salvarTarefas();
}
function criarBotao(li) {
    const apagar=criarElemento('button','Apagar');
    apagar.setAttribute('class','remover');
    apagar.setAttribute('tittle','Apagar a tarefa');
    li.appendChild(apagar);
}
function limparInput() {
    entrada.value='';
    entrada.focus();
};
function salvarTarefas() {
    const liTarefas=tarefas.querySelectorAll('li');
    const listaTarefas=[];
    for(let tarefa of liTarefas){
        listaTarefas.push(formatarTexto(tarefa));
    }
    const tarefasJSON=JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
};
function formatarTexto(txt) {
    let texto=txt.innerText;
    return texto.replace('Apagar','').trim();
}
function adicionaTarefasSalvas() {
    const tarefas=localStorage.getItem('tarefas');
    const listaTarefas=JSON.parse(tarefas);
    for(let tarefa of listaTarefas){
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();