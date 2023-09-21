/* global ScrollMagic, Linear */

(function($){
  "use strict";

  var $body = $('body');



  /*------------------------------------*\
    Shrink navigation.
  \*------------------------------------*/

  $(window).scroll(function(){
    if ($(document).scrollTop() > 80){
      $('.navbar').addClass('shrink');
    }
    else{
      $('.navbar').removeClass('shrink');
    }
  });

  $(document).ready(function(){

    // Section - Schedule (requires flickity)
    if ($.fn.flickity){
      var $carouselSchedule = $('.carousel-schedule');
      $carouselSchedule.flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false
      });

      $('.nav-tabs', '#schedule').children().bind('click', function(e){
        $('.carousel-schedule').flickity('select', $(this).index());
      });

      if(isMobile.any()){
        var flkty = $carouselSchedule.data('flickity');
        $carouselSchedule.on('select.flickity', function(){
          $('.nav-tabs', '#schedule').find('li:eq(' + flkty.selectedIndex + ') a').tab('show');
        });
      };
    }
    else{
      console.log('Section - Schedule: Plugin "flickity" is not loaded.');
    }

  });
})(jQuery);