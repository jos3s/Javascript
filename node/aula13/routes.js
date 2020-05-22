const express= require('express');
const route = express.Router();
const homeController=require('./src/controllers/homeController');
const contatoController=require('./src/controllers/contatoController');


/* function middleware(req,res,next) {
    req.session={nome:'Luiz', sobrenome:"Miranda"};
    console.log("Passei no middleware");
    next();
}
 */
/* route.get('/',middleware, homeController.paginaInicial, function (req,res,next) {
    console.log('ainda to aqui');
    console.log(req.session);
}); */
//* Rotas da Home
route.get("/",homeController.paginaInicial);
route.post('/',homeController.trataPost);

//* Rotas Contato
route.get('/contato', contatoController.paginaInicial);

module.exports=route;