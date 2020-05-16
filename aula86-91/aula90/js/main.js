
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
    fetch(href)
        .then(response=>{
            if(response.status <200 && response.status>=300) throw new Error('Error 404');
            return  response.text();
        })
        .then(html=> carregaResultado(html))
        .cath(e=>console.log(e));
}

function carregaResultado(response) {
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML=response;
}