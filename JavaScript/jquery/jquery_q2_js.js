$(document).ready(function() {
  $('.product').click(function() {
    $('.product').removeClass('highlighted');
    $(this).addClass('highlighted');
  });

  $('.product').hover(
    function() {
      $(this).find('.product-description').slideDown(300);
    },
    function() {
      $(this).find('.product-description').slideUp(300);
    }
  );

  $('.favorite-icon').click(function(e) {
    e.stopPropagation();
    $(this).toggleClass('selected');
  });

  $('[data-discount="true"]').css({
    'background': 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)'
  });

  $('[data-stock="out"]').each(function() {
    alert('Product "' + $(this).find('.product-name').text() + '" is out of stock!');
  });
});