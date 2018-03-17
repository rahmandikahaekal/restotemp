/* ==============================================
 WOW plugin triggres animate.css
 =============================================== */
new WOW().init();

(function ($) { "use strict";

    $(document).ready(function () {
        
      $("#testi-carousel").owlCarousel({
          //Most important owl features
          items: 1,
          itemsCustom: false,
          itemsDesktop: [1199,1],
          itemsDesktopSmall: [980,1],
          itemsTablet: [768,1],
          itemsTabletSmall: false,
          itemsMobile: [479,1],
          singleItem: false,
          startDragging: true
      });

      if($('.menu-items-list').length){
              var defaultFilter=$('.tagsort-active')
              .attr('data-filter');

              var $grid=$('.menu-items-list')

              .isotope({itemSelector:'.menu-item',layoutMode:'fitRows',filter:defaultFilter});

              $('.menu-button-filter').on('click','li',function(){

              $('.menu-button-filter li').removeClass('tagsort-active');

              $(this).toggleClass('tagsort-active');

              var filterValue=$(this).attr('data-filter');

                $grid.isotope({filter:filterValue})
              ;}
            );
          };
        
        if($('#datepicker').length {$("#datepicker").datepicker({dateFormat:'mm/dd/yy',startDate:'0',autoclose:true,todayHighlight:true});};
        if($('#timepicker').length){$('#timepicker').clockpicker({donetext:'Done'}).find('input').change(function(){console.log(this.value);});};

    });
               
}(jQuery));