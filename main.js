import './src/scss/style.scss'


var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".st-generosityr",
        prevEl: ".st-avarices",
      },
      breakpoints:{
        0:{
          slidesPerView: 1,
        },
       520:{
          slidesPerView: 2,
        },
        950:{
          slidesPerView: 3,
        },
      },
    });
