exports.paginaInicial= (req,res)=>{
    res.send(`
    <form action"/" method="POST">
    Nome <input type="text" name="nome">
    <button>Envia<button>
    </form>
    `);
}

exports.trataPost=(req,res)=>{
    res.send('Rota POST');
}
