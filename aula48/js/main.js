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
        e.parentElement.parentElement.remove();
        salvarTarefas();
    }
    if(e.classList.contains('adicionar')){
        if(entrada.value) criarTarefa(entrada.value);
    }
    if(e.classList.contains('checkbox')){
        if(e.checked) e.parentElement.classList.add('checado');
        if(!e.checked) e.parentElement.classList.remove('checado');
        salvarTarefas();
    }
});

function criarElemento(e, txt=''){
    let elemento=document.createElement(e);
    elemento.textContent=txt;
    return elemento;
}
function criarTarefa(txt, data='', checado=false){
    const li=criarElemento('li');
    li.appendChild(criarCheckbox(txt,checado));
    const div=criarElemento('div', '');
    criarData(div, data);
    criarBotao(div);
    li.appendChild(div);
    tarefas.appendChild(li);
    limparInput();
    salvarTarefas();
}
function criarBotao(li) {
    const apagar=criarElemento('button','Apagar');
    apagar.setAttribute('class','remover');
    apagar.setAttribute('tittle','Apagar a tarefa');
    const i=criarElemento('i','');
    i.setAttribute('class','fas fa-trash');
    apagar.appendChild(i);
    li.appendChild(apagar);
}
function criarCheckbox(txt, checado=false){
    const label=criarElemento('label',txt);
    const chk=criarElemento('input','');
    chk.setAttribute('type','checkbox');
    chk.setAttribute('class','checkbox');
    if(checado){
        label.classList.add('class','checado');
        chk.setAttribute('checked',checado);
    }
    label.classList.add('class','label-tarefa');
    label.appendChild(chk);
    return label;
}
function criarData(li, data='') {
    if(data!==''){
        const small=criarElemento('small',data);
        li.appendChild(small)
    }else{
        let d=new Date();
        const small=criarElemento('small', d.toLocaleDateString());
        li.appendChild(small)
    }
}
function limparInput() {
    entrada.value='';
    entrada.focus();
};
function salvarTarefas() {
    const liTarefas=tarefas.querySelectorAll('li');
    const listaTarefas=[];
    const listaData=[];
    const listaChecado=[];
    for(let tarefa of liTarefas){
        listaChecado.push(checar(tarefa));
        listaTarefas.push(formatarTexto(tarefa));
        listaData.push(formatarData(tarefa));
    }
    const checadoJSON=JSON.stringify(listaChecado);
    localStorage.setItem('checados',checadoJSON);
    const datasJSON=JSON.stringify(listaData);
    localStorage.setItem('datas',datasJSON);
    const tarefasJSON=JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}
function checar(entrada){
    const chk=entrada.querySelector('input');
    return chk.checked;
}
function formatarTexto(txt){
    let texto=txt.innerText;
    const final=texto.indexOf('/');
    return texto.slice(0,final-2).trim();
}
function formatarData(data){
    let texto=data.innerText;
    const final=texto.slice(texto.indexOf('/')-2, texto.lastIndexOf('/')+5);
    return final;
}
function adicionaTarefasSalvas() {
    const tarefas=localStorage.getItem('tarefas');
    const listaTarefas=JSON.parse(tarefas);
    const datas=localStorage.getItem('datas');
    const listaDatas=JSON.parse(datas);
    const checados=localStorage.getItem('checados');
    const listaChecados=JSON.parse(checados);
    for(let i=0;i<listaTarefas.length;i++){
        criarTarefa(listaTarefas[i], listaDatas[i], listaChecados[i]);
    }
}
adicionaTarefasSalvas();