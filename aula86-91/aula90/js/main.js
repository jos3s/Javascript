
document.addEventListener('click', (el)=>{
    e=el.target;
    const tag=e.tagName.toLowerCase();
    if(tag ==='a'){
        el.preventDefault();
        carregaPagina(e);
    }
});

async function carregaPagina(el) {
    try{
        const href=el.getAttribute('href');
        const response= await fetch('href');

        if(response.status <200 && response.status>=300) throw new Error('Error 404');
        
        const hmtl=await response.text();
        carregaResultado(html);
    }catch(e){
        console.error(e);
    }
}

function carregaResultado(response) {
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML=response;
}