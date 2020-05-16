class ValidaFormulario{
    constructor(){
        this.formulario=document.querySelector('.formulario');
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener("submit", e=>{
            this.handleSubmit(e);
        });
    }
    handleSubmit(e){
        e.preventDefault();
        const validFields=this.validFields();
        const validPasswords=this.validPasswords();
        if(validFields && validPasswords) this.formulario.submit();
    }
    createError(field, msg){
        const div=document.createElement('div');
        div.innerHTML=msg;
        div.setAttribute('class','error-text');
        field.insertAdjacentElement('afterend',div);
    }
    validPasswords(){
        let valid=true;
        const password=document.querySelector('.senha');
        const repeatedPassaword=document.querySelector('.repetir-senha');
        if(password.value!== repeatedPassaword.value){
            valid=false;
            this.createError(repeatedPassaword,'A senha repetida precisa ser igual a senha');
        }
        if(password.value.length<6||password.value.length>12){
            valid=false;
            this.createError(password, 'Senha precisar estar entre 6 e 12 caracteres.')
        }
        return valid;
    }
    validFields(){
        let valid=true;
        for(let erroTxt of this.formulario.querySelectorAll(".error-text")){
            erroTxt.remove();
        }
        for(let field of this.formulario.querySelectorAll(".validar")){
            let label=field.previousElementSibling.innerText;
            if(!field.value){
                this.createError(field,`Campo "${label}" não pode estar em branco`);
                valid=false;
            }
            if(field.classList.contains('cpf')){
                if(!this.validCPF(field)) valid=false;
            }
            if(field.classList.contains('usuario')){
                if(!this.validUser(field)) valid=false;
            }
        }
        return valid;
    }
    validCPF(field){
        const cpf= new CPF(field.value);
        if(!cpf.valido()){
            this.createError(field, 'CPF inválido.');
            return false;
        }
        return true;
    }
    validUser(field){
        let valid=true;
        const user=field.value;
        if(user.length<3 || user.length>12){
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid= false;
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Usuário só pode conter letras e numeros.');
            valid= false;
        }
        return valid;
    }
}

const formulario=new ValidaFormulario();