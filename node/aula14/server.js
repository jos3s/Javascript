require("dotenv").config();

const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        app.emit('on');
    })
    .catch(e=>console.log(e));

const routes=require('./routes');
const path=require('path');
const middleware=require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended:true}));

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname,'src','views'));
app.set("view engine",'ejs');

app.use(middleware);
app.use(routes);

app.on('on',()=>{
    app.listen(3000, ()=>{
        console.log('Servidor executando na porta 3000')
    }); 
});
