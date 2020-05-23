exports.paginaInicial= (req,res)=>{
    res.render('index',{
        titulo:'<b>Titulo<b> da página',
        numeros:[1,23,4,5,60]
    });
}

exports.trataPost=(req,res)=>{
    res.send(req.body);
}
