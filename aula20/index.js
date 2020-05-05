function escopo() {
    const form=document.querySelector('.form');
    const resultado=document.querySelector('#resultado');

    form.addEventListener('submit', receberEvento);
    
    const pessoas=[]; 

    function receberEvento(evento) {
        evento.preventDefault();

        const nome=(form.querySelector('.nome')).value;
        const sobrenome=(form.querySelector('.sobrenome')).value;
        const peso=(form.querySelector('.peso')).value;
        const altura=(form.querySelector('.altura')).value;
        pessoas.push({
            nome:nome,
            sobrenome:sobrenome,
            peso:peso, 
            altura:altura,
        });
        
        resultado.innerHTML += `<p>${nome} ${sobrenome} tem ${altura} de altura e ${peso} peso </p>`;
    };
}
escopo();