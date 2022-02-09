$(document).ready(function() {

    $(".header__burger").click(function() {
        $(".nav").toggleClass("nav--active")
        $(this).toggleClass("header__burger--active")
        $(".nav-bg").toggleClass("nav-bg--active")
        $("body").toggleClass("body-fix")
    })

    $(".nav-bg").click(function() {
        $(this).removeClass("nav-bg--active")
        $(".nav").removeClass("nav--active")
        $(".header__burger").removeClass("header__burger--active")
        $("body").removeClass("body-fix")
    })

    $(".question__btn").click(function(e) {
        e.preventDefault();
        $(".question__thanks").addClass("question__thanks--active")
    })

    $(".nav__item").click(function() {
        $('.nav-bg').removeClass("nav-bg--active")
        $(".nav").removeClass("nav--active")
        $(".header__burger").removeClass("header__burger--active")
        $("body").removeClass("body-fix")
    })

    $(".nav__item").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 55 }, 500);

    });


    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 135;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.nav__item.nav__item--active').removeClass('nav__item--active');
                $('.nav__item[href="#' + idn + '"]').addClass('nav__item--active');
            }
        });
    });
})