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

        endereço:{
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

        ccard:{
            required:true,
            maxlength:16
        },
}})



/*LINK REFERENCIA:
https://www.devmedia.com.br/validacao-com-jquery-como-usar-o-plugin-validation/33670#:~:text=Para%20come%C3%A7ar%20com%20o%20jQuery,
validar%20de%20um%20formul%C3%A1rio%20web.&text=Observe%20que%20no%20script%20n%C3%A3o,do%20jQuery%20a%201.11.1.*/

