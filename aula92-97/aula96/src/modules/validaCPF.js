export default class CPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpf',{
            value:cpf.replace(/\D+/g,''),
            enumerable:false,
            configurable:false,
            writable:false,
        });
    }
    valido(){
        if(!this.cpf) return false;
        if(typeof this.cpf !=='string') return false;
        if(this.cpf.length!==11) return false;
        if(this.sequence()) return false;

        this.geraNovoCPF()
        return this.cpf === this.novoCPF;
    }
    geraNovoCPF(){
        const cpfSemDigito=this.cpf.slice(0,-2);
        const d1=CPF.geraDigito(cpfSemDigito);
        const d2=CPF.geraDigito(cpfSemDigito+d1);
        this.novoCPF=cpfSemDigito+d1+d2;
    }
    sequence(){
        return this.cpf=== this.cpf[0].repeat(11);
    }
    static geraDigito(cpfSemDigito){
        let total=0;
        let reverso=cpfSemDigito.length+1;
        for(let string of cpfSemDigito){
            total+=reverso*Number(string);
            reverso--;
        }
        const digito=11-(total%11);
        return digito<=9? String(digito) : '0'; 
    }
}