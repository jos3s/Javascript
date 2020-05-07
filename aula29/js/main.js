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
		`${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
		` de ${data.getFullYear()} ${hora}:${min}` 
	);
}

function zero(num){
    return num<10 ? `0${num}` : num;
}

function nomeDiaSemana(dia) {
	let msg='';
	switch (dia){
		case 0:
		    msg='Domingo';
		    return msg;
		case 1:
		    msg='Segunda-feira';
		    return msg;
		case 2:
		    msg='Terça-feira';
		    return msg;
		case 3:
		    msg='Quarta-feira';
		    return msg;
		case 4:
		    msg='Quinta-feira';
		    return msg;
		case 5:
		    msg='Sexta-feira';
		    return msg;
		case 6:
		    msg='Sabado';
		    return msg;
		default:
		    return msg;
    } 
}

function nomeDoMes(mes) {
	let msg='';
	switch (mes){
		case 0:
		    msg='janeiro';
		    return msg;
		case 1:
		    msg='fevereiro';
		    return msg;
		case 2:
		    msg='março';
		    return msg;
		case 3:
		    msg='abril';
		    return msg;
		case 4:
		    msg='maio';
		    return msg;
		case 5:
		    msg='junho';
		    return msg;
		case 6:
		    msg='julho';
		    return msg;
		case 7:
		    msg='agosto';
		    return msg;
		case 8:
		    msg='setembro';
		    return msg;
		case 9:
		    msg='outubro';
		    return msg;
		case 10:
		    msg='novembro';
		    return msg;
		case 11:
		    msg='dezembro';
		    return msg;
		default:
		    return msg;
    } 
}