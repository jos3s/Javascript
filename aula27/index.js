//Objeto Date

const tresHoras=60*60*3*1000;
const umDia=60*60*24*1000;

let data= new Date();
//const dataUnix= new Date(0);
const dataUnix= new Date(0 +tresHoras);
console.log(dataUnix.toDateString());
console.log(data.toString());

//? Date(ano, mes, dia, hora, min, seg, ms);
data=new Date(2019, 3,20, 15, 14, 27, 500);
console.log(data.toString());

let dataString= new Date('2019-12-20 20:12:56');
console.log('Data: ',dataString.getDate());
console.log('Mês:',dataString.getMonth()+1); //0->Janeiro
console.log('Ano: ',dataString.getFullYear());
console.log('Hora: ',dataString.getHours());
console.log('Minutos: ',dataString.getMinutes());
console.log('Segundos: ',dataString.getSeconds());
console.log('MS: ',dataString.getMilliseconds());
console.log('Dia semana: ',dataString.getDay()); //0->Domingo
console.log('',dataString.toString());

console.log(Date.now());

const dataAtual=new Date();
console.log(dataAtual.toString());
const dataBrasil=formataData(dataAtual);
console.log(dataBrasil);

function formataData(data) {
    const dia=zero(data.getDate());
    const mes=zero(data.getMonth() +1) ;
    const ano=zero(data.getFullYear());
    const hora=zero(data.getHours());
    const min=zero(data.getMinutes());
    const seg=zero(data.getSeconds());
     
    return `${dia}/${mes}/${ano} ${hora}:${seg}:${min}`;
}
function zero(num){
    return num<10 ? `0${num}` : num;
}