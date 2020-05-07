let txt=document.querySelector("#txt");
const data= new Date();
txt.innerHTML= formatarData(data);

function formatarData(data) {
	const diaSemana=data.getDay();
	const numeroMes=data.getMonth();

	const nomeDia=nomeDiaSemana(diaSemana)
	const nomeMes=nomeDoMes(numeroMes)

	const hora=zero(data.getHours());
	const min=zero(data.getMinutes());
	return (
		`${nomeDia}, ${data.getDate()} de ${nomeMes}` 
		+ ` de ${data.getFullYear()}` 
		+ `${hora}:${min}` 
	);
}

function zero(num){
    return num<10 ? `0${num}` : num;
}

function nomeDiaSemana(dia) {
	const dias=['domingo','segunda-feira', 'terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
	return dias[dia];
}

function nomeDoMes(mes) {
	const meses=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
	return meses[mes];
}