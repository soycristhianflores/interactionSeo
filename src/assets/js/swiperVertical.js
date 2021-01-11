function sliderHome() {
  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 0,
    grabCursor: true,
    autoplay: {
      delay: 20000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    },
  });
}
function sliderHome2() {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

}