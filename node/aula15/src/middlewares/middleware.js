module.exports=(req,res,next) =>{
    console.log("Middleware global");
    if(req.body.cliente){
        console.log(`O nome foi passado foi ${req.body.cliente}`);
    }
    next();
}; 