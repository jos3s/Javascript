const express=require('express');
const app=express();
const routes=require('./routes');
const path=require('path');
const middleware=require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended:true}));

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname,'src','views'));
app.set("view engine",'ejs');

app.use(middleware);
app.use(routes);

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000')
}); 