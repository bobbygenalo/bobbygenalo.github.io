$(document).ready(function(){
  $('#page-nav nav a').on('click', function(event) {
      $(this).parent().find('a').removeClass('active-page-link');
      $(this).addClass('active-page-link');
  });

  $(window).on('scroll', function() {
      $('.story').each(function() {
          if($(window).scrollTop() >= $(this).offset().top - 75) {
              var id = $(this).attr('id');
              $('#page-nav nav a').removeClass('active-page-link');
              $('#page-nav nav a[href="#'+ id +'"]').addClass('active-page-link');
          }
      });
  });
});