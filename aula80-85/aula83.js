// Métodos de instância e estáticos

class ControleRemoto{
    constructor(tv){
        this.tv=tv;
        this.volume=30;
    }
    aumentarVolume(){
        if(this.volume<=60) this.volume+=5;
    }
    diminuirVolume(){
        if(this.volume>5) this.volume-=5;
        if(this.volume<=5) this.mutar();
    }
    mutar(){
        this.volume=0;
    }

    /// Exemplo
    static reiniciarControles(){
        this.tv='';
        this.volume=30;
    }
}

const controle=new  ControleRemoto("Samsung");
console.log(controle);
controle.diminuirVolume();
console.log(controle);
ControleRemoto.reiniciarControles();
