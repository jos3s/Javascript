import geraSenha from './gerador';

const senha=document.querySelector('.senha');
const qtd=document.querySelector('.qtd');
const maiusculas=document.querySelector('.chk-maiuscula');
const minusculas=document.querySelector('.chk-minuscula');
const num=document.querySelector('.chk-num');
const simb=document.querySelector('.chk-simb');
const btn=document.querySelector('.btn');

export default ()=>{
    btn.addEventListener('click', ()=>{
        senha.innerHTML=gera();
    });
}

function gera(){
    return geraSenha(
        qtd.value,
        maiusculas.checked,
        minusculas.checked,
        num.checked,
        simb.checked,
    ) || 'Nada selecionado, selecione pelo menos uma opção';
}