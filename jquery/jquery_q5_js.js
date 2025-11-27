$(document).ready(function() {
  $('.manager').click(function() {
    const parent = $(this).closest('.department');
    parent.find('.member:not(.manager)').addClass('highlighted');
  });

  $('.member').hover(
    function() {
      $(this).find('.contact-info').slideDown(200);
    },
    function() {
      $(this).find('.contact-info').slideUp(200);
    }
  );

  $('.dept-header').click(function() {
    const members = $(this).next('.team-members').find('.member');
    members.css('background', 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)');
    members.css('color', 'white');
    
    setTimeout(function() {
      members.css('background', '');
      members.css('color', '');
    }, 2000);
  });

  $('#randomBtn').click(function() {
    const allMembers = $('.member');
    const randomMember = allMembers.eq(Math.floor(Math.random() * allMembers.length));
    
    allMembers.removeClass('highlighted');
    randomMember.addClass('highlighted');
    
    const siblings = randomMember.attr('data-sibling');
    if (siblings) {
      const siblingIds = siblings.split(',');
      siblingIds.forEach(function(id) {
        $('[data-id="' + id + '"]').addClass('highlighted');
      });
    }
  });

  $('#collapseBtn').click(function() {
    $('.team-members').slideUp();
  });

  $('#expandBtn').click(function() {
    $('.team-members').slideDown();
  });
});