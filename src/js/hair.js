$(function () {
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

    $('.js-idea-more').on('click', function (event) {


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
})
