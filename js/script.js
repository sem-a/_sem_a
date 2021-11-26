$(document).ready(function () {
    $('.services__items').click(function (event) {
        if ($('.services__cards').hasClass('one')) {
            $('.services__item').not($(this)).removeClass('services__des-active');
            $('.services__des').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('services__des-active').next().slideToggle(300);
    });
});