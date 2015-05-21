$(document).ready(function () {
    $('.slider-home').slick({
        infinite: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        prevArrow: "<a class='nav-arrow-left'><img src='assets/img/arrow-left.png' /></a>",
        nextArrow: "<a class='nav-arrow-right'><img src='assets/img/arrow-right.png' /></a>"
    });
});