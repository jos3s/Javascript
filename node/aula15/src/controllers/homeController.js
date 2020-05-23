exports.paginaInicial= (req,res)=>{
    console.log(req.flash('info'),req.flash('error'),req.flash('sucess'))
    res.render('index');
}

exports.trataPost=(req,res)=>{
    res.send(req.body);
}
