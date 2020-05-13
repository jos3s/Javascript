function ValidaCPF(cpf){
    Object.defineProperty(this,'cpfLimpo', {
        get: function () {
            return cpf.replace(/\D+/g,'');
        }
    });
    
}
ValidaCPF.prototype.valida=function (){
    if(typeof this.cpfLimpo ==='undefined') return false; 
    if(this.cpfLimpo.length!==11) return false;
    if(this.isSequence()) return false;

    const cpfParcial=this.cpfLimpo.slice(0,-2);
    const digito1=this.criaDigito(cpfParcial);
    const digito2=this.criaDigito(cpfParcial+digito1);
    
    const novoCPF=cpfParcial+digito1+digito2;
    return novoCPF===this.cpfLimpo;
};
ValidaCPF.prototype.criaDigito=function (cpfParcial) {
    let cpfArray=Array.from(cpfParcial);
    let regressivo=cpfArray.length+1;  
    const total=cpfArray.reduce((ac, valor)=>{
        ac+=(regressivo*Number(valor));
        regressivo--;
        return ac;
    },0);
    let digito=11-(total%11);
    return digito>9? '0' : String(digito);
};
ValidaCPF.prototype.isSequence=function(){
    return this.cpfLimpo === this.cpfLimpo[0].repeat(11);
};

let cpf=new ValidaCPF('082.528.504-64');
console.log(cpf.valida() ? 'Cpf válido' : 'Cpf inválido');