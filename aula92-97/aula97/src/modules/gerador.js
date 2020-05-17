function rand(min=97,max=123) {
    return Math.floor(Math.random()*(max-min)+min);
}

function gerarMaiuscula() {
    return String.fromCharCode(rand(65,91));
}
function gerarMinuscula() {
    return String.fromCharCode(rand());
}
function gerarNumero() {
    return String.fromCharCode(rand(48,58));
}
function gerarSimbolo() {
    const simb=',.;!?@#%$()+*/-{}[]_=';
    return simb[rand(0,simb.length)];
}

export default function geraSenha(qtd,maiuscula,minuscula,num,simb) {
    const senhaArray=[];
    qtd=Number(qtd);
    for(let i=0;i<qtd;i++){
        const r=rand(0,4);
        if(r==0){
            maiuscula && senhaArray.push(gerarMaiuscula());
            minuscula && senhaArray.push(gerarMinuscula());
            num && senhaArray.push(gerarNumero());
            simb && senhaArray.push(gerarSimbolo());
        }else if(r==1){
            simb && senhaArray.push(gerarSimbolo());
            num && senhaArray.push(gerarNumero());
            minuscula && senhaArray.push(gerarMinuscula());
            maiuscula && senhaArray.push(gerarMaiuscula());
        }else if(r==2){
            num && senhaArray.push(gerarNumero());
            maiuscula && senhaArray.push(gerarMaiuscula());
            simb && senhaArray.push(gerarSimbolo());
            minuscula && senhaArray.push(gerarMinuscula());
        }else{
            minuscula && senhaArray.push(gerarMinuscula());
            simb && senhaArray.push(gerarSimbolo());
            maiuscula && senhaArray.push(gerarMaiuscula());
            num && senhaArray.push(gerarNumero());
        }
    }
    return senhaArray.join("").slice(0,qtd);
}
