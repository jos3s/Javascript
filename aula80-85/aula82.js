//Herança

class DispositivoEletronico {
    constructor(nome) {
        this.nome=nome;
        this.ligado=false;
    }
    ligar(){
        if(this.ligado) return;
        this.ligado=true;
    }
    desligar(){
        if(!this.ligado) return;
        this.ligado=false;
    }
}


const d1=new DispositivoEletronico('Celular');
console.log(d1);
d1.ligar();
console.log(d1);


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor,marca) {
        super(nome);
        this.cor=cor;
        this.marca=marca;
    }
}

const celular=new Smartphone('Galaxy S10+','Branco','Samsung');
console.log(celular);


class Tablet extends DispositivoEletronico {
    constructor(nome, cor,marca, wifi) {
        super(nome);
        this.cor=cor;
        this.marca=marca;
        this.wifi=wifi;
        this.bateria=0;
    }
    ligar(){
        if(this.bateria>2) this.ligado=true;
    }
}