const paragrafo=document.querySelector('.paragrafos');
const paragrafos=paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const background = estilosBody.backgroundColor;

for (let p of paragrafos){
    p.style.color='white';
    p.style.backgroundColor=background;
}