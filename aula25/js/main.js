// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

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
	resultado(msg, true);
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

function resultado(msg, isValid){
	const resul=document.querySelector('#resultado');
	resul.innerHTML='';
	const p=criaParagrafo();

	if(isValid){
		p.classList.add('valido');
	}else{
		p.classList.add('invalido');
	}
	p.innerHTML=msg;
	resul.appendChild(p);
}