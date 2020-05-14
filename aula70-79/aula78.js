// Polimofirsmo

function Conta(agencia,conta,saldo){
    this.agencia=agencia;
    this.conta=conta;
    this.saldo=saldo;
}
Conta.prototype.sacar= function(valor){
    if(valor>this.saldo){
        console.log("Saldo insuficente");
        this.verSaldo();
        return;
    }
    this.saldo-=valor;
    this.verSaldo();
};
Conta.prototype.depositar=function (valor){
    this.saldo+=valor;
    this.verSaldo();
};
Conta.prototype.verSaldo= function(){
    console.log(`Ag/C ${this.agencia}/${this.conta}`+
    ` Saldo: R$${this.saldo.toFixed(2)}`)
};

/* let conta=new Conta(11,22,10);
conta.verSaldo();
conta.depositar(20);
conta.sacar(12);
conta.sacar(19); */

function ContaCorrente(agencia,conta,saldo,limite) {
    Conta.call(this,agencia,conta,saldo);
    this.limite=limite;
}
ContaCorrente.prototype=Object.create(Conta.prototype);
ContaCorrente.prototype.constructor=ContaCorrente;

ContaCorrente.prototype.sacar=function(valor) {
    if(valor>this.saldo + this.limite){
        console.log("Saldo insuficente");
        this.verSaldo();
        return;
    }
    this.saldo-=valor;
    this.verSaldo();
};

/* let cc=new ContaCorrente(11,20,0,100);
cc.depositar(10);
cc.sacar(90);
cc.sacar(21);
console.log(cc); */

function ContaPoupanca(agencia,conta,saldo) {
    Conta.call(this,agencia,conta,saldo);
}
ContaPoupanca.prototype=Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor=ContaCorrente;


let cp=new ContaPoupanca(12,33,0);
cp.depositar(10);
cp.sacar(10);