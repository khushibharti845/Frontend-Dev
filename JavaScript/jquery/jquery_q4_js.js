$(document).ready(function() {
  let currentIndex = 0;
  let banners = $('.banner');
  let totalBanners = banners.length;
  let autoRotate;

  function rotateBanner() {
    banners.removeClass('active').fadeOut();
    currentIndex = (currentIndex + 1) % totalBanners;
    banners.eq(currentIndex).addClass('active').fadeIn();
    $('#currentBanner').text(currentIndex + 1);
  }

  autoRotate = setInterval(rotateBanner, 5000);

  $('#hideBtn').click(function() {
    $('.banner').hide();
    clearInterval(autoRotate);
  });

  $('#showBtn').click(function() {
    banners.hide();
    banners.eq(currentIndex).show().addClass('active');
    autoRotate = setInterval(rotateBanner, 5000);
  });

  $('#slideUpBtn').click(function() {
    banners.removeClass('active').slideUp();
    currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
    banners.eq(currentIndex).addClass('active').slideDown();
    $('#currentBanner').text(currentIndex + 1);
  });

  $('#slideDownBtn').click(function() {
    banners.removeClass('active').slideUp();
    currentIndex = (currentIndex + 1) % totalBanners;
    banners.eq(currentIndex).addClass('active').slideDown();
    $('#currentBanner').text(currentIndex + 1);
  });

  $('#fadeBtn').click(function() {
    banners.removeClass('active').fadeOut();
    currentIndex = (currentIndex + 1) % totalBanners;
    banners.eq(currentIndex).addClass('active').fadeIn(1000);
    $('#currentBanner').text(currentIndex + 1);
  });
});