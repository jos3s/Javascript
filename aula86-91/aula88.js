// Async - Await

function rand(min=0,max=3) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max-min)+min); 
}

function espera(msg,tempo) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Valor incorreto');
                return;
            }
            resolve(msg);
        }, tempo);
    });
}

/* espera('Fase 1',rand())
    .then(fase=>{
        console.log(fase);
        return espera('Fase 2',rand());  
    })
    .then(fase=>{
        console.log(fase);
        return espera('Fase 3',rand());  
    })
    .then(fase=>{
        console.log(fase);
    })
    .catch(e=>console.log(e)); */

async function executa(){
    try{
        const fase1=await espera('Fase 1',rand());
        console.log(fase1)
        const fase2=await espera('Fase 2',rand());
        console.log(fase2)
        const fase3=await espera('Fase 3',rand());
        console.log(fase3)
        console.log("Fim da fases");
    }catch(e){
        console.log(e);
    }
}
executa();