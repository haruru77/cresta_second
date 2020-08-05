$(function() {
    $('.c-hamburger').on('click', function() {
        $('.c-hamburger, .p-hamburger').toggleClass('show');
    });
    $('.p-hamburger__menu>li>a').on('click', function() {
        $('.c-hamburger, .p-hamburger').removeClass('show');
    });
})