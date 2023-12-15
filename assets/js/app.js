"use strict";

$(document).ready(function () {
    // Search Nav
    $(".nav-btns__search").on("click", function () {
        if ($(".header__search").hasClass("active")) {
            $(".header__search").removeClass("active");
        } else {
            $(".header__search").addClass("active");
        }

        // hide languages
        if ($(".header__languages").hasClass("active")) {
            $(".header__languages").removeClass("active");
        }
    });

    // Languages
    $(".nav-btns__languages").on("click", function () {
        if ($(".header__languages").hasClass("active")) {
            $(".header__languages").removeClass("active");
        } else {
            $(".header__languages").addClass("active");
        }

        // search languages
        if ($(".header__search").hasClass("active")) {
            $(".header__search").removeClass("active");
        }
    });

    // Aside Nav
    $(document).click(function (event) {
        // если мы кликнули в любом месте сайта, кроме иконки поиска (лупа)
        if (!$(event.target).closest($(".nav-btns__search")).length && !$(event.target).closest($(".header__search")).length) {
            $(".header__search").removeClass("active");
        }
        // если мы кликнули в любом месте сайта, кроме иконки текущего выбранного языка
        if (!$(event.target).closest($(".nav-btns__languages")).length) {
            $(".header__languages").removeClass("active");
        }

        // если мы кликнули в любом месте сайта, кроме бокового меню .nav-aside
        if (!$(event.target).closest($(".nav-aside")).length) {
            // console.log(event.target);
            // если aside-меню уже открыто
            if ($(".nav-aside").hasClass("active")) {
                // закрываем aside-меню
                $(".nav-aside").removeClass("active");
                $(".header").removeClass("shadow-active");
                $("body").removeClass("modal-open");
            } else {
                // если мы кликнули по кнопке .nav-btns__aside
                // console.log($(event.target).closest('.nav-btns__aside').length);
                if ($(event.target).closest(".nav-btns__aside").length) {
                    $(".nav-aside").addClass("active");
                    $(".header").addClass("shadow-active");
                    $("body").addClass("modal-open");
                }
            }
        }
    });

    $(".nav-aside__close").on("click", function () {
        $(".nav-aside").removeClass("active");
        $(".header").removeClass("shadow-active");
        $("body").removeClass("modal-open");
    });

    $(".aside-catalog__chevron").on("click", function () {
        let $thisArrow = $(this);
        let $parentLi = $(this).parent();
        // let $prevLink = $(this).prev('.link');
        // let $childIcon = $(this).find('.icon');

        // если список есть
        if ($(this).next("ul").length == 1) {
            $(this).next("ul").slideToggle();
            // $prevLink.toggleClass('active');
            $(this).parent("li").toggleClass("active");
        }
    });

    // basic carousel
    const carousel__swiper = new Swiper(".carousel__swiper", {
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // type: "progressbar",
        },
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true, // безконечный слайдер
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, // отключить после ручной прокрутки
            pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        centeredSlides: true,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            360: {
                slidesPerView: "auto",
            },
            // when window width is >= 320px
            768: {
                slidesPerView: "auto",
            },
            // when window width is >= 640px
            992: {
                // slidesPerView: "auto",
                slidesPerView: 5,
            },
        },
    });

    // video slider
    const videocarousel__swiper = new Swiper(".videocarousel__swiper", {
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // type: "progressbar",
        },
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true, // безконечный слайдер
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true, // отключить после ручной прокрутки
        //     pauseOnMouseEnter: true, // When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.
        // },
        // loopedSlides: 1,
        touchAngle: 10, // Allowable angle (in degrees) to trigger touch move
        // slidesPerView: 'auto',
        centeredSlides: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            360: {
                slidesPerView: "auto",
            },
            // when window width is >= 320px
            768: {
                slidesPerView: "auto",
            },
            // when window width is >= 640px
            992: {
                // slidesPerView: "auto",
                slidesPerView: 5,
            },
        },
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});
