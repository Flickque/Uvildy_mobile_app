;( function( $, undefined ) {
$("body").append('<div id="preloader"><div class="cssload-loader"><div class="cssload-inner cssload-one"></div><div class="cssload-inner cssload-two"></div><div class="cssload-inner cssload-three"></div></div></div>');
	$( window  ).on( 'load', function() {
		$("#preloader").remove();
    var leftmenu = function()
    {
        $('.header-burger-menu img').click(function()
        {
            $('.leftmenu').animate(
            {
                left: '0px'
            }, 400);
            $('.leftmenu').addClass("shadow");
            $('body').animate(
            {
                left: '285px'
            }, 400);
            $('.close-img').animate(
            {
                left: '300px'
            }, 400);
						$(".header-back img").css('display','none');
            return false;
        });

        $('.close-img').click(function()
        {
          $('.leftmenu').animate({
          left: '-285px'
        }, 400);
          $('body').animate({
                 left: '0px'
           }, 400);
          $('.leftmenu').removeClass("shadow");
          $('.close-img').animate(
          {
             left: '0px'
          }, 400);
					$(".header-back img").css('display','inline-block');
        });
        $('.header-back img').click(function()
        {
           window.history.back();
        });
    };
  leftmenu();

  });
})( jQuery );
