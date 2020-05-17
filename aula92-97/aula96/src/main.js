import geraCPF from './modules/geraCPF';
import './assets/css/style.css';


document.addEventListener('click',el=>{
    let e=el.target;
    if(e.classList.contains('gerar')){
        const gera=new geraCPF();
        const cpfGerado=document.querySelector('.resultado');
        cpfGerado.innerHTML=gera.geraNovoCPF();
    }
})

