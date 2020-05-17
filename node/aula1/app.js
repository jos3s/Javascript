//+ const mod1= require('./mod1.js');
//+ const {nome,sobrenome,falaNome} = require('./mod1');
const axios=require('axios');
const mod1= require('./mod1');
const {Pessoa}=require('./mod1');


const p=new Pessoa('José');
console.log(p);

mod1.falaNome();
console.log(mod1);