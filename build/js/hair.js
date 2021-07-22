var swiperDiscount= swiperDiscount;
var swiperDiscountInit = false;


function swiperDiscountMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let desktop = window.matchMedia('(min-width: 768px)');
    let sliderSpaceBetween = document.querySelector('.swiper-container-discount').getAttribute('data-spaceBetween');
    if (desktop.matches) {
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

const swiper = new Swiper('.video-slider', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 10,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 10,

        },
    },
});
jsideamore.addEventListener('click', function (event){
    let target = event.target;
    let next = target.getAttribute('data-next');
    let count = target.getAttribute('data-count');
    let ideas = document.querySelectorAll('.idea');
    for(idea of ideas){
        let ideaId = idea.getAttribute('data-id');
        if(next == ideaId){
            idea.classList.remove('more');
        }
        if (next == count){
            target.style.display = 'none'
        }
    }

    target.setAttribute('data-next', 3);
})


