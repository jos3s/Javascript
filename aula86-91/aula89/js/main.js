const request = obj=>{
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open(obj.method,obj.url,true);
        xhr.send();
    
        xhr.addEventListener('load', ()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }      
        });
    });
};

document.addEventListener('click', (el)=>{
    e=el.target;
    const tag=e.tagName.toLowerCase();
    if(tag ==='a'){
        el.preventDefault();
        carregaPagina(e);
    }
});

async function carregaPagina(el) {
    const href=el.getAttribute('href');
    const objConfig={
        method:'GET',
        url:href,
    };
    try{
        const response=await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML=response;
}