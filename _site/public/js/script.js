document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper.hero', {
      direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      speed: 1000 
    });
  });
  