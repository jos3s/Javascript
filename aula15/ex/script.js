const NUMERO=Number(prompt("Digite um numero: "));

let num=document.getElementById('num');
let txt=document.getElementById('txt');

num.innerHTML=NUMERO;
txt.innerHTML= `<p> A raiz quadrade é: ${NUMERO**2}</p>
                <p> O numero é inteiro: ${Number.isInteger(NUMERO)}</p>
                <p> É NaN: ${Number.isNaN(NUMERO)}</p>
                <p> Arredondado pra baixo: ${Math.floor(NUMERO)}</p>
                <p> Arredondado pra cima: ${Math.ceil(NUMERO)}</p>
                <p> Com duas casas decimais: ${NUMERO.toFixed(2)}</p>`;