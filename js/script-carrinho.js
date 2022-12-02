//1_INICIAL//  1_INICIAL//  1_INICIAL//  1_INICIAL//  1_INICIAL//  1_INICIAL//  1_INICIAL
function paghome() {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}


//2_PRODUTOS//  2_PRODUTOS//  2_PRODUTOS//  2_PRODUTOS//  2_PRODUTOS//  2_PRODUTOS//  2_PRODUTOS

(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

//3_CARRINHO//  3_CARRINHO//  3_CARRINHO//  3_CARRINHO//  3_CARRINHO//  3_CARRINHO//  3_CARRINHO



//4_PAGAMENTO//  4_PAGAMENTO//  4_PAGAMENTO//  4_PAGAMENTO//  4_PAGAMENTO//  4_PAGAMENTO//  4_PAGAMENTO


//  5_FINALIZAÇÃO//  5_FINALIZAÇÃO//  5_FINALIZAÇÃO//  5_FINALIZAÇÃO//  5_FINALIZAÇÃO//  5_FINALIZAÇÃO
function openNav() {
    document.getElementById("myNav").style.width = "20%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//funcão do cabeçalho para dispositivos com telas menores//

function openNav1() {
    document.getElementById("myNav1").style.width = "25%";
}

function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
}

//  6_CADASTRO//  6_CADASTRO//  6_CADASTRO//  6_CADASTRO//  6_CADASTRO//  6_CADASTRO
function comparar() {
    if (document.getElementById("pf").checked) {
        window.location.href = "./pagina-01-cadastro-cpf.html";
    }
    else {
        window.location.href = "./pagina-01-cadastro-cnpj.html";
    }
}

// product B
var minus_B = document.querySelector("#product_B_form .btn-subtract")
var add_B = document.querySelector("#product_B_form .btn-add");
var quantity_B = document.querySelector("#product_B_form .item-quantity");

// includes button minus disablement if at minimum or below
const minimum = 1;

minus_B.addEventListener("click", function(){
    if (quantity_B.value <= minimum) {
      minus_B.disabled = true;
      return; // return to avoid decrementing
    } else {
      minus_B.disabled = false;
    }
});

add_B.addEventListener("click", function() {
    if (quantity_B.value > minimum) {
      minus_B.disabled = false;
    }
});


  function remove(){
    let produto = document.getElementById("produto");
//    produto.removeAttribute("tr");
    produto.style="visibility: hidden;";
  }

  function somaitem(){
    let item = document.getElementById("item1").value;
    let valor = document.getElementById("valor1");
    let valorTotal = document.getElementById("item-total");
    let totalResumo = document.getElementById("total-h6")
    let totalResumo2 = document.getElementById("total-h5")


    //console.log(item1);

    if(item >= 1){
    }
    let total = item * 1899.00;
    //console.log(total);
    //console.log(valor)

    valorTotal.innerText = `R$ ${total},00`;
    totalResumo.innerText = `R$ ${total},00`
    totalResumo2.innerText = `R$ ${total},00`
  }

  function AumentaPerc() {
    var campo = document.getElementById("item1")
    campo.value= parseInt(campo.value) + 1;
    }

    function DiminuiPerc() {
        var campo = document.getElementById("item1")
        if(campo.value >= 1){
        campo.value= parseInt(campo.value) - 1;
        }
    }