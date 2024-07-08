
 const latest_swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Scrollbar
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar'
    },
    breakpoints: {
        // when window width is >= 320px
        520: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        765: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 640px
        990: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
});

const prevSlide = document.querySelector('.swiper-button-prev')
prevSlide.addEventListener('click', ()=>{
    latest_swiper.prevEl()
    console.log('prev')
})

const nextSlide = document.querySelector('.swiper-button-next')
nextSlide.addEventListener('click', ()=>{
    latest_swiper.nextEl()
    console.log('next')
})

console.log('-=-=-=| ', prevSlide)