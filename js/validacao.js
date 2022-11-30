//Validação simples

function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}


$("#form").validate({  //chama o formulario por ID
    
    rules: {    //Regras da valudacao
        debug: true,   //nessa opção podemos definir true para o plugin não permitir a submissão do formulário Esta opção é interessante quando desejamos realizar algum tipo de teste.
        nome:{    // Chama o elemento por ID no caso id "nome"
            required: true,
            minlength: 3,
        },

        sobrenome:{
            required: true,            
        },

        cpf:{
            required: true,
            minlength: 14 ,
        },

        endereco:{
            required: true
        },

        gender:{
            required: true,
            min: 1, 
            max: 4,
        },

        email:{
            required: true,
        },

        cep:{
            required: true,
            minlength: 10
        },

        pais:{
            required: true
        },

        estado:{
            required: true
        },

        cidade:{
            required: true
        },

        telefone:{
            required: true,
            minlength: 14
        },
        
        usuario:{
            required: true,
            minlength: 3
        },

        senha:{
            required: true,
            minlength: 8,
        },

        cnpj:{
            required: true,
            minlength: 18
        },
        
        nomeempresa:{
            required: true,
            minlength: 3,
        },

        cartao:{
            required:true,
            minlength: 16,
        },

        data:{
            minlength:5,
        },

},
    messages:{
        cartao: "Número do cartão é obrigatório!",
        nome: "É necessário informar o nome",
        data: "Data inválida",
        sobrenome: "É necessário informar o sobrenome",
        gender: "Selecione uma opção:",
        cpf: "É necessário informar um CPF",
        endereco: "É necessário informar o endereço",
        bairro: "É necessário informar o bairro",
        cep:"É necessário informar o CEP",
        pais: "Selecione uma opção:",
        estado: "Selecione uma opção:",
        cidade: "Selecione uma opção:",
        telefone:"É necessário informar o número completo no formato (DDD) 99999-9999",
        email:"É necessário informar um E-mail válido",
        emailc:"É necessário confirmar o E-mail ",

    }
})



function verific(){

        if (document.getElementById('entrega-01').checked  || document.getElementById('entrega-02').checked ) {
            window.location.href ="pagina-pagamento-03.html"
            
        } else {
            alert('Selecione uma opção de Frete!')
            return false
        }

    
}

function confirm(){
    if ((!document.getElementById('credito').checked && !document.getElementById('debito').checked)) {
        alert('Selecione Credito ou Debito!')
    }
}


/*LINK REFERENCIA:
https://www.devmedia.com.br/validacao-com-jquery-como-usar-o-plugin-validation/33670#:~:text=Para%20come%C3%A7ar%20com%20o%20jQuery,
validar%20de%20um%20formul%C3%A1rio%20web.&text=Observe%20que%20no%20script%20n%C3%A3o,do%20jQuery%20a%201.11.1.*/

