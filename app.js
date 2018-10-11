$(function () {
    $('#navi-toggle').click(function () {
        $('.header').toggleClass('active');
    });


    $('.navigation__item a').on('click', function () {
        $('#navi-toggle').click();
    });
});


