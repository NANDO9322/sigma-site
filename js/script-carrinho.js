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
$(document).ready(function () {
    jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">&#xf106;</button><button class="quantity-button quantity-down">&#xf107</button></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
  
      btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 2;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
      btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
  
    });
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

    console.log(item);

    let total = item * 1899.00;

    console.log(total);

    console.log(valor)
    valorTotal.innerText = `${total},00`;
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