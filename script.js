

//////////slider/////////

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.8,
    slidesToScroll: 1,

    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 925,
            settings: {
                slidesToShow: 1.8,
            }
        },
        {
            breakpoint: 525,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});
///////img slider /////////
$('.autoplay').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});




//////// nav bar///////////
window.onscroll = function () {
    var nav = document.querySelector("nav");
    if (window.scrollY > 1) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
};


function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('nav').classList.toggle('activeNavBar');

};