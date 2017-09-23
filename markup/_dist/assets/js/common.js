
/*--------------------------------------------------------------
 # Preloader
 --------------------------------------------------------------*/

$(window).on('load',function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(300).fadeOut("slow");
});

/*--------------------------------------------------------------
 # Own Carusel
 --------------------------------------------------------------*/

$(window).on('load',function (){
    $(".owl-carousel.main-carousel").owlCarousel({
        items:1,
        loop:true,
        dots: true
    });

    $(document).ready(function(){
        $(".owl-carousel.pl-teams").owlCarousel({
            loop:true,
            nav:true,
            navText: [
                '<div class="icon-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                '<div class="icon-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
            ],
            autoWidth:true,
            margin: 25,
        });
    });
});


/*--------------------------------------------------------------
 # Fancybox Video
 --------------------------------------------------------------*/

$(function () {
    $('#video a').fancybox({ });
});

/*--------------------------------------------------------------
 # CustomScrollbar
 --------------------------------------------------------------*/

(function($){
    $(window).on("load",function(){
        //$(".table-striped").mCustomScrollbar();
    });

    var isShowPass = false;
    var options = [{'type': 'text', 'text': 'HIDE'}, {'type': 'password', 'text': 'SHOW'}];
    $('#show').on('click', function () {
        var data = options[+isShowPass];
        $(this).text(data.text).prev().attr('type', data.type).toggleClass('show-password');
        isShowPass = !isShowPass;
    });

})(jQuery);