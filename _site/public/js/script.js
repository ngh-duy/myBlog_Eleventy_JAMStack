document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper.hero', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    touchMoveStopPropagation: false, // cho phép sự kiện cuộn trang
    touchReleaseOnEdges: true,       // nhả sự kiện cuộn khi đến mép swiper
  });
});
