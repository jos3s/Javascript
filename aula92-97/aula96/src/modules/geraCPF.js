import validaCPF from './validaCPF';

export default class geraCPF{
    rand(min=100000000,max=999999999){
        const digitos = String(Math.floor(Math.random() * (max - min) + min));
     
        const sequencia = Array.from(digitos).filter(numero => {
            return digitos[0] === numero;
        });
    
   
        if (sequencia.length === digitos.length) return this.rand();
        
        return digitos;
    }
    geraNovoCPF(){
        const cpfSemDigito=this.rand();
        const d1=validaCPF.geraDigito(cpfSemDigito);
        const d2=validaCPF.geraDigito(cpfSemDigito+d1);

        const novoCPF=cpfSemDigito+d1+d2;
        return this.formatado(novoCPF);
    }
    formatado(cpf){
        return cpf.slice(0,3)+ '.' +cpf.slice(3,6)+ '.' +cpf.slice(6,9)+ '-' + cpf.slice(9,11);   
    }
}