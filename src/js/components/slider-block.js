var swiperDiscount= swiperDiscount;
var swiperDiscountInit = false;


function swiperDiscountMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');
    let ryzhiy = document.querySelector('.wrp-ryzhiy');
    let sliderSpaceBetween = document.querySelector('.swiper-container-discount').getAttribute('data-spaceBetween');
    console.log(ryzhiy)
    if (desktop.matches) {
        if(swiperDiscount){
            swiperDiscount.destroy();
            swiperDiscountInit = false;
        }


    }
    else if (ryzhiy){
        if(swiperDiscount){
            swiperDiscount.destroy();
            swiperDiscountInit = false;
        }
    }

    else if (mobile.matches) {
        if (!swiperDiscountInit) {
            swiperDiscountInit = true;
            swiperDiscount = new Swiper('.swiper-container-discount', {
                slidesPerView: 'auto',
                slidesPerGroup: 2,
                slidesPerColumn: 2,
                spaceBetween: !sliderSpaceBetween ? 30 : +sliderSpaceBetween,
                freeMode: false,
                mousewheel: false,
                initialSlide: 0,
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    }
    swiperDiscount.update();
}

window.addEventListener('load', function() {
    if($('.swiper-container-discount').length){
        swiperDiscountMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swiper-container-discount').length){
        swiperDiscountMode();
    }
});
