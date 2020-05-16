const request = obj=>{
    const xhr=new XMLHttpRequest();
    xhr.open(obj.method,obj.url,true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
        if(xhr.status>=200 && xhr.status<300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText);
        }      
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

function carregaPagina(el) {
    const href=el.getAttribute('href');
    request({
        method:'GET',
        url:href,
        success(response){
            carregaResultado(response);
        },
        error(erroText){
            console.log(erroText);
        }
    });
}

function carregaResultado(response) {
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML=response;
}