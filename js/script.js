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

    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
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
