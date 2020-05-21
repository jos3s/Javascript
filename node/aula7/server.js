const express=require('express');
const app=express();



app.get('/', (req,res)=>{
    res.send(`
        <form action"/" method="POST">
        Nome <input type="text" name="nome">
        <button>Envia<button>
        </form>
    `);
});

app.post('/', (req,res)=>{  
    res.send('Formulário enviado');
});

app.get('/contato', (req,res)=>{
    res.send("Obrigado por entra em contato com a gente!");
});

app.listen(3000, ()=>{
    console.log('Servidor executando na porta 3000')
});