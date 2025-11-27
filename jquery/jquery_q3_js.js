$(document).ready(function() {
  $('.question').click(function() {
    $(this).toggleClass('active');
    $(this).next('.answer').slideToggle(300);
  });

  $('.question').hover(
    function() {
      $(this).css('background-color', '#667eea');
      $(this).css('color', 'white');
    },
    function() {
      if (!$(this).hasClass('active')) {
        $(this).css('background-color', '#f5f5f5');
        $(this).css('color', '#333');
      }
    }
  );

  $('.question').dblclick(function() {
    $('.answer').slideUp(300);
    $('.question').removeClass('active');
  });

  $('.answer-input').focus(function() {
    $(this).closest('.faq-item').addClass('highlight');
    $(this).closest('.faq-item').find('.question').css('background-color', '#667eea');
    $(this).closest('.faq-item').find('.question').css('color', 'white');
  });

  $('.answer-input').blur(function() {
    $(this).closest('.faq-item').removeClass('highlight');
    if (!$(this).closest('.faq-item').find('.question').hasClass('active')) {
      $(this).closest('.faq-item').find('.question').css('background-color', '#f5f5f5');
      $(this).closest('.faq-item').find('.question').css('color', '#333');
    }
  });
});