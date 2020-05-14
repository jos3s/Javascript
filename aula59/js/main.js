function Calculadora() {
    this.display=document.querySelector('.display');
    
    //% Métodos
    this.iniciar= ()=>{
        this.clickBotoes();
        this.pressionaEnter();
    };
    this.pressionaEnter= ()=>{
        this.display.addEventListener('keyup', e => {
            if(e.keyCode===13) this.realizaConta();
        });
    };
    this.clickBotoes= ()=>{
        document.addEventListener("click", e=>{ 
            //& O this fica travado em quem chama a função
            const el=e.target;
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del'))   this.apagaUm();
            if(el.classList.contains('btn-num'))   this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-eq'))    this.realizaConta();
        });
    },

    this.clearDisplay= ()=> this.display.value='';
    this.apagaUm= ()=> this.display.value=this.display.value.slice(0,-1);
    
    this.btnParaDisplay= txt=> {
        this.display.value+=txt;
        this.display.focus();  
    };
    this.realizarConta= ()=>{
        let conta=this.display.value;
		try{
			conta=eval(conta);
			if(!conta){
				alert("Conta inválida");
				return;
			}
			this.display.value=String(conta);
		}catch(e){
			alert("Conta inválida");
			return;
		}
    };
};

const calculadora=new Calculadora();
calculadora.iniciar();