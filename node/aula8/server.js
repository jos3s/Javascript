const express=require('express');
const app=express();

app.use( express.urlencoded({ extended:true}) );

app.get('/', (req,res)=>{
    res.send(`
        <form action"/" method="POST">
        Nome <input type="text" name="nome">
        <button>Envia<button>
        </form>
    `);
});

app.get('/teste/:idUsuario?/:parametro?',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('oi');
});

app.post('/', (req,res)=>{  
    console.log(req.body)
    res.send('Formulário enviado');
});

app.get('/contato', (req,res)=>{
    res.send("Obrigado por entra em contato com a gente!");
});

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000')
});