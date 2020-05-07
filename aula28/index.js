// Switch

const data=new Date(2020,4, 7);
const diaDaSemana= data.getDay();

console.log('O dia da semana é', diaSemana(diaDaSemana));

function diaSemana(dia) {
    let msg='';
    switch (dia){
        case 0:
            msg='Domingo';
            return msg;
        case 1:
            msg='Segunda';
            return msg;
        case 2:
            msg='Terça';
            return msg;
        case 3:
            msg='Quarta';
            return msg;
        case 4:
            msg='Quinta';
            return msg;
        case 5:
            msg='Sexta';
            return msg;
        case 6:
            msg='Sabado';
            return msg;
        default:
            return msg;
    } 
}