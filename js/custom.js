/*-----------------------------------------------------------
* Template Name    : Frank | Reach Initiative Template
* Author           : Frank Arinze
* Version          : 1.0.0
* Created          : November 2019
* Descripting      : js main
*------------------------------------------------------------
*/

// Preloader Main
$('#status').fadeOut();
$('#preloader').delay(350).fadeOut('slow');
$('body').delay(350).css({
    'overflow': ' '
});

// Yummy sticky Header

$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
    } else {
        $(".sticky").removeClass("stickyadd");
    }
});

$('.navbar-nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

$("#navbarCollapse").scrollspy({
    offset:20
});

$(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000
    });
});
$(window).on('load', function () {
    var $container = $('.work-filter');
    var $filter = $('#menu-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    $filter.find('a').on("click",function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});

$('.img-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

$("#owl-demo").owlCarousel({
    autoPlay: 7000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
});

// Upload image Function
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});

// campaign support type

// $('.dummy-checkbox.multiple li').click(function() {
//     multi_hidden = '';
//     $(this).toggleClass('checked');
//     if($(this).hasClass('checked')) {
//         $('#single').val(1);
//     } else  {
//         $('#single').val(0);
//     }
//     $('.dummy-checkbox.multiple li').each(function() {
//         if($(this).hasClass('checked')) {
//             var value = $(this).attr('data-value');
//             multi_hidden += '<input type="radio" '+value+' name="multi&#91;&#93;" style=" color:red">';
//         }
//     });
//     $('.multi-inputs').html(multi_hidden);
// });


// $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 

