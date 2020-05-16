// Métodos para Promises
//& Promise.all - Promise.race - Promise.resolve - Promise.reject

function rand(min,max) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min)+min); 
}

function espera(msg,tempo) {
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string'){
            reject('Um erro rejeitou todas');
            return;
        }
        setTimeout(() => {
            resolve(msg + ' -  Passei na promise');
        }, tempo);
    });
}

const promises=[
    'Primeiro valor',
    espera('Promise 1',rand(1,5)),
    espera('Promise 2',rand(1,5)),
    espera('Promise 3',3000),
    //espera(100,700),
    'Outro valor'
];
Promise.all(promises)
    .then((valor)=>{
        console.log(valor);
    })
    .catch(e=> console.log(e));
    //setInterval(()=>console.log(promise), 6000);

//% Retorna o a primeira promesis a ser retornada
Promise.race(promises)
    .then((valor)=>{
        console.log(valor);
    })
    .catch(e=> console.log(e));

function baixaPagina(){
    const emCache=true;

    if(emCache){
        //+ return Promise.resolve('Página em cache');
        return Promise.reject('Página em cache');
    }else{
        return espera("Baixando a página", rand(1,3));
    }
}

baixaPagina()
    .then(dados=> console.log(dados))
    .catch(e=> console.log('Error: '+e));