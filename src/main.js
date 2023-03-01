// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

});

// mobile slide menu
const mobileMenu = document.querySelector('#mobile-menu')
const openSlide = document.querySelector('#open-slide')
const closeSlide = document.querySelector('#close-slide')

openSlide.addEventListener('click', () => {
    mobileMenu.style.right = "0px"
})

closeSlide.addEventListener('click', () => {
    mobileMenu.style.right = "-100%"
})

// slide close
const mobileSlideClose = document.querySelectorAll('#mobile-slide-close')
for (let i = 0; i < mobileSlideClose.length; i++) {
    mobileSlideClose[i].addEventListener('click', () => {
        mobileMenu.style.right = "-100%"
    })
}

// scroll reveal
ScrollReveal().reveal('.scroll', {
    delay: 200,
    origin: 'left',
    interval: 200,
    distance: '3px',
    reset: 'true'
});