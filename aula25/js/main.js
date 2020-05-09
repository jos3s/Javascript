// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
const historico=document.querySelector(".historico");
const tituloHistorico=document.querySelector(".historico-txt");

window.addEventListener('click', function(el){
    e=el.target;
    if(e.classList.contains('remover')){
		e.parentElement.parentElement.remove();
		salvarHistorico();
    }
});
tituloHistorico.addEventListener('click', e => {
	historico.classList.toggle('open');
});

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const inputPeso=e.target.querySelector('#peso');
	const inputAltura=e.target.querySelector('#altura');
	const peso=Number(inputPeso.value);
	const altura=Number(inputAltura.value);
	if(!peso){
		resultado('Peso inválido.', false);
		return;
	}
	if(!altura){
		resultado('Altura inválida.',false);
		return;
	}
	const imc=(peso/(altura**2)).toFixed(2);
	const nivel=nivelIMC(imc);
	const msg=`O seu IMC é ${imc} (${nivel}).`;
	const valores=`Peso: ${peso} | Altura: ${altura}`;
	resultado(msg, true, valores);
});

function nivelIMC(imc){
	const nivel=['Abaixo do peso', 'Peso normal', 'Sobrepeso',
	'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
	if(imc>=39.9) return nivel[5];
    if(imc>=34.9) return nivel[4];
    if(imc>=29.9) return nivel[3];
    if(imc>=24.9) return nivel[2];
    if(imc>=18.5) return nivel[1];
	if(imc<18.5)  return nivel[0]; 
}
function criaParagrafo(){
	const p=document.createElement('p');
	return p;
}
function resultado(msg, isValid, valores){
	const resul=document.querySelector('#resultado');
	resul.innerHTML='';
	const p=criaParagrafo();

	if(isValid){
		p.classList.add('valido');
		criarHistorico(msg,valores);
	}else{
		p.classList.add('invalido');
	}
	p.innerHTML=msg;
	resul.appendChild(p);
}

function criarHistorico(msg, valores){
	const li=criarElemento('li',msg);
	const div=criarElemento('div','');
	const p=criarElemento('p', valores);
	div.appendChild(p);
	criarBotao(div);
	li.appendChild(div);
	historico.appendChild(li);
	salvarHistorico();
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
function criarElemento(e, txt=''){
    let elemento=document.createElement(e);
    elemento.textContent=txt;
    return elemento;
}

function salvarHistorico() {
	const historicos=historico.querySelectorAll('li');
	const listaHistorico=[];
	const listaValores=[];
	for(let historico of historicos){
		listaHistorico.push(formatarTexto(historico));
		listaValores.push(formatarValores(historico));
	}
	const historicoJSON=JSON.stringify(listaHistorico);
	localStorage.setItem('historico',historicoJSON);
	const valoresJSON=JSON.stringify(listaValores);
	localStorage.setItem('historicoValores',valoresJSON);
}
function formatarTexto(txt){
	let texto=txt.innerText;
	texto=texto.slice(0,texto.lastIndexOf(')')+1)
    return texto;
}
function formatarValores(valores){
	let texto=valores.innerText;
	texto=texto.replace('Apagar','').trim();
    return texto.slice(texto.lastIndexOf('P'));
}
function recuperarHistorico() {
	const historicos=localStorage.getItem('historico');
	const listaHistorico=JSON.parse(historicos);
	const historicosValores=localStorage.getItem('historicoValores');
	const listaValores=JSON.parse(historicosValores);
	for(let i=0;i<listaHistorico.length;i++){
		criarHistorico(listaHistorico[i], listaValores[i]);
	}
}
recuperarHistorico();