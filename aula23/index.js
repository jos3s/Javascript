// Avalição de curto circuito

//? && => false && true -> false "retorna o valor mesmo"
//? || => true && false -> vai retornar o (primeiro) valor verdadeiro
//* falso => false, 0, '' "" ``, null, undefined, NaN 

console.log('José' && 0 && 'Maria');
console.log('José' && true && 'Maria');
console.log('José' && true && NaN);
console.log('José' && 'Maria');
console.log('José' && undefined && 'Maria');


function falaOi() {
    return 'Oi';
}

//let vaiExecutar=false;
let vaiExecutar=true;
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'José' || true);

const corUsuario=null;
const corPadrao= corUsuario || 'preto';
console.log(corPadrao);

const a=0;
const b=null;
const c='false'; //Esse é verdade (true)
const d=false;
const e=NaN;
console.log(a||b||c||d||e);