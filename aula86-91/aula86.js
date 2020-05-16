//Promises

function rand(min,max) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min)+min); 
}

function espera(msg,tempo) {
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') reject('Valor incorreto');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

espera('oi',rand(1,3))
    .then(resposta=> {
        console.log(resposta);
        return espera("oi 2", rand(1,3));
    })
    .then(resposta=> {
        console.log(resposta);
        return espera(2, rand(1,3));
    })
    .then(resposta=> {
        console.log(resposta);
    })
    .catch(e=> console.log('Error: '+e));