function getTimeSeconds(segundos) {
    const data=new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'GMT',
    })
}

const relogio=document.querySelector(".timer");

document.addEventListener('click', function (e) {
    const el =e.target;
    if(el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        segundos=0;  
        relogio.innerHTML='00:00:00';
    }
    if(el.classList.contains('iniciar')){
        clearInterval(timer);
        iniciaTimer();   
        relogio.classList.remove('pausado');
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});

let timer;
let segundos=0;

function iniciaTimer() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}