$(document).ready(function(){
  
    $('.project').hover(function(){
        $(this).css({
            'background-color': 'rgba(255, 255, 255, 0.35)',
            'box-shadow': '0px 2px 15px rgba(0, 0, 0, 0.1)'
        });
        // $(this).find('h1').css('opacity', '1');
        $(this).find('.blurb_sm').css('color', '#000');
        }, function(){
            $(this).css({
                'background-color': 'rgba(255, 255, 255, 0)',
                'box-shadow': 'none'
            });
            // $(this).find('h1').css('opacity', '.4');
            $(this).find('.blurb_sm').css('color', '#999');
    });

    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        // Calculate the percentage of the scroll
        var scrollPercent = scrollPosition / (documentHeight - windowHeight);

        // Focus on the first 10% of the scroll
        var animationPercent = Math.min(scrollPercent / 0.1, 1); // Divide by 0.1 to focus on the first 10% of scroll, and cap at 1

        // Calculate the new color value
        var colorValue = Math.floor(animationPercent * 240); // 136 is the difference between 0 and 136 (0x88 in hex)

        // Set the new color for each paragraph
        var newColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

        $('.content p').css('color', newColor);
        $('.content p a').css('color', newColor);
    });



});