(function ($) {
    "use strict";

    // Navbar on scrolling
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $('.navbar').fadeIn('slow').css('display', 'flex');
    //     } else {
    //         $('.navbar').fadeOut('slow').css('display', 'none');
    //     }
    // });

    $(".navbar").fadeIn("slow").css("display", "flex");

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $(this.hash).offset().top - 45,
                },
                1500,
                "easeInOutExpo"
            );

            if ($(this).parents(".navbar-nav").length) {
                $(".navbar-nav .active").removeClass("active");
                $(this).closest("a").addClass("active");
            }
        }
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $(".btn-play").click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $("#videoModal").on("shown.bs.modal", function (e) {
            $("#video").attr(
                "src",
                $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
            );
        });

        $("#videoModal").on("hide.bs.modal", function (e) {
            $("#video").attr("src", $videoSrc);
        });
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll-to-bottom").fadeOut("slow");
        } else {
            $(".scroll-to-bottom").fadeIn("slow");
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $(".portfolio-container").isotope({
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
    });
    $("#portfolio-flters li").on("click", function () {
        $("#portfolio-flters li").removeClass("active");
        $(this).addClass("active");

        portfolioIsotope.isotope({ filter: $(this).data("filter") });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    // const dDay = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
    const dDay = new Date(new Date("2024-03-20 10:30:00").getTime());

    // default example
    simplyCountdown(".simply-countdown-one", {
        year: dDay.getFullYear(),
        month: dDay.getMonth() + 1,
        day: dDay.getDate(),
    });

    $("#simply-countdown-losange").simplyCountdown({
        year: dDay.getFullYear(),
        month: dDay.getMonth() + 1,
        day: dDay.getDate(),
        enableUtc: false,
    });

    // Formulário

    // $(document).ready(function() {
    //     // Seleciona o iframe
    //     var iframe = $("iframe");

    //     // Adiciona um evento 'load' ao iframe
    //     iframe.on("load", function() {
    //         // Após o carregamento do iframe, execute o código para manipular os elementos dentro do iframe
    //         var iframeConteudo = iframe.contents(); // Seleciona o conteúdo interno do iframe
    //         var elementosDoIframe = iframeConteudo.find("form > div:nth-of-type(2) > div > div"); // Seleciona os elementos desejados dentro do iframe
    //         elementosDoIframe.css("display", "none"); // Oculta os elementos dentro do iframe
    //     });
    // });

    // $(document).ready(function() {
    //     $("form > div:nth-of-type(2) > div > div").css("display", "none");
    // });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("formulario");

    iframe.onload = function () {
        // Acessa o documento dentro do iframe
        var iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;

        // Acessa o elemento que deseja ocultar dentro do documento do iframe
        var elementoParaOcultar = iframeDocument.querySelector(
            "form > div:nth-of-type(2) > div > div"
        );

        // Oculta o elemento dentro do iframe
        if (elementoParaOcultar) {
            elementoParaOcultar.style.display = "none";
        }
    };

    // // Adicionando um ouvinte de evento 'load' ao iframe
    // iframe.addEventListener('load', function() {
    //     // Aqui você pode executar o código JavaScript após o carregamento do iframe
    //     console.log('O iframe foi carregado!');
    //     // Coloque seu código JavaScript aqui
    //     // iframe.querySelector("form > div:nth-of-type(2) > div > div").style.display = "none";
    //     console.log(iframe)
    // });
});

// Cópia QR code
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("copy-code");

    // Inicializar o Clipboard.js
    var clipboard = new ClipboardJS(btn);

    // Ao clicar no botão, copiar o texto para a área de transferência
    clipboard.on("success", function (e) {
        console.log("Texto copiado:", e.text);
        // alert("Código do QR Code copiado para a área de transferência!");
        e.clearSelection();
    });

    // Em caso de erro na cópia
    clipboard.on("error", function (e) {
        console.error("Erro ao copiar:", e.action);
        alert("Erro ao tentar copiar o código do QR Code!");
    });
});
