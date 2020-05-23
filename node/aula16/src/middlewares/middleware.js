module.exports=(req,res,next) =>{
    res.locals.umaVariavelLocal='Valor da variavel local';
    next();
}; 