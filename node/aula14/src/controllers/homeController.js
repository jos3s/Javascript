const HomeModel=require('../models/HomeModel');

HomeModel.create({
    titulo:'Outro titulo de teste',
    descricao:'Testando'
}).then(dados=>console.log(dados))
  .catch(e=>console.log(e));

exports.paginaInicial= (req,res)=>{
    res.render('index');
}

exports.trataPost=(req,res)=>{
    res.send(req.body);
}
