$(document).ready(function () {
    $('.header-main-btn').on('click', function () {
        $('.nav').toggleClass('nav_active')
    })
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top -200 + "px"
        });
        return false;
    });
});