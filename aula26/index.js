//Operador ternario

//* condição ? se for verdade : se for falso

const pontosUsuario=999;

const nivelUsuario=pontosUsuario>=1000 ? 'Usuário vip' : 'Usuário normal';

//const corUsuario=null;
const corUsuario='Rosa';
const corPadrao=corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);