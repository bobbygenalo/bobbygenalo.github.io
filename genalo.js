$(document).ready(function(){
  
  $('.project').hover(function(){
      $(this).css({
          'background-color': 'rgba(255, 255, 255, 0.35)',
          'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.1)'
      });
      $(this).find('h1').css('opacity', '1');
  }, function(){
      $(this).css({
          'background-color': 'rgba(255, 255, 255, 0)',
          'box-shadow': 'none'
      });
      $(this).find('h1').css('opacity', '.4');
  });

  

});