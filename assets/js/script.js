$(document).ready(function () {
    /* SHOW NAVBARS MENU - START */
    $("#navbar_menu_show").click(function () {
        $(".navbar__menu").fadeIn();
    });

    $("#navbar_menu_close").click(function () {
        $(".navbar__menu").fadeOut();
    });
    /* SHOW NAVBARS MENU - ENDED */

    /* ABOUT US DATA COUNTER - START */
    $("[data-counter]").each(function () {
        const $this = $(this);
        const countTo = $this.attr("data-counter");
        $this.counterUp({
            delay: 16,
            time: 2048
        });
    });
    /* ABOUT US DATA COUNTER - ENDED */

    /* PARTNERS CAROUSEL - START */
    $("#partners_carousel_i").owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        center: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        autoplayHoverPause: true,
        /* responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            768: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        } */
    });

    $("#partners_carousel_ii").owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        center: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2048,
        smartSpeed: 512,
        autoplayHoverPause: true,
        /* responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            768: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        } */
    });
    /* PARTNERS CAROUSEL - ENDED */
});