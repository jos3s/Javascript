function getTimeSeconds(segundos) {
    const data=new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'GMT',
    })
}

const relogio=document.querySelector(".timer");
const iniciar=document.querySelector('#iniciar');
const pausar=document.querySelector('#pausar');
const zerar=document.querySelector('#zerar');


iniciar.addEventListener("click", function () {
    clearInterval(timer);
    iniciaTimer();   
    relogio.classList.remove('pausado');
});
pausar.addEventListener("click", function(){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener("click", function(){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos=0;  
    relogio.innerHTML='00:00:00';
});

let timer;
let segundos=0;

function iniciaTimer() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}