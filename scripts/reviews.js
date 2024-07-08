
const reviews_swiper = new Swiper('.swiper--review', {
    slidesPerView: 1,
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next--review',
      prevEl: '.swiper-button-prev--review',
    },
    // Scrollbar
    pagination: {
      el: '.swiper-pagination--review',
      clickable: true,
      type: 'progressbar'
    },
    breakpoints: {
        // when window width is >= 765px
        765: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 990px
        990: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
});

const prevSlide_rev = document.querySelector('.swiper-button-prev--review')
prevSlide_rev.addEventListener('click', ()=>{
    reviews_swiper.prevEl()
    console.log('prev')
})

const nextSlide_rev = document.querySelector('.swiper-button-next--review')
nextSlide_rev.addEventListener('click', ()=>{
    reviews_swiper.nextEl()
    console.log('next')
})

console.log('-=-=-=| ', prevSlide)