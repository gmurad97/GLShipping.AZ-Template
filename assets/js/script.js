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
    $("[data-counter]").each(function(){
        const $this = $(this);
        const countTo = $this.attr("data-counter");
        $this.counterUp({
            delay: 16,
            time: 2048
        });
    });
    /* ABOUT US DATA COUNTER - ENDED */
});