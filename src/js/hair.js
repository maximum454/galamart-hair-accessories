$(function () {
    const swiper = new Swiper('.video-slider', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: false,
        slidesPerView: 2,
        coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})
