(function($, undefined){


	$(document).ready(function() {
		$('.nav navbar-nav li').mouseover(function() {
			$('.nav navbar-nav li').addClass('open');
			console.log('asdasd');
		});
	});


	$(document).on('ready', function(){
		$('.lazy').css("visibility","visible");
	});
	$('body').on('click','.roll_map',function()
	{
		$('#img_gallary > div:nth-child(1)').trigger("click");
		console.log('asdasd');
	});

    var $menu = $("#menu-glav15");

    $(window).scroll(function(){

				if($("div").is(".lg-backdrop"))
				{

				}
				else{
					//$("#menu-glav15").css("display","block");
	 	   			$("#menu-glav15").fadeIn(700);
			        if ( $(this).scrollTop() > 114 && $menu.hasClass("default") ){
		            $menu.removeClass("default");
		            $menu.addClass("fixed");
		            $('.mini_basket_button').fadeIn(700);
		            $('.mini_basket_button').css("display","inline-block")
			        } else if($(this).scrollTop() <= 114 && $menu.hasClass("fixed")) {
		            $menu.removeClass("fixed").addClass("default");
		            $('.mini_basket_button').fadeOut(700);
				}

       }
    });//scroll
    $('body').on('click','.roll2_map',function()
    {
    	if ( $(this).scrollTop() < 120)
    	//$('#menu-glav15').css("display","none");
   		$('#menu-glav15').fadeOut(700);
    });

 	$('body').on('click','#order2',function()
    {
    	$('#ty_for_buy').modal("show");
    	//setTimeout(function()
    //	{
	//	    $('#ty_for_buy').modal("hide");
	  //  }, 3500);
    });
    $('body').on('click','.catalog-item .fon-icon',function()
    {
    	$('#ty_for_buy').modal("show");
    //	setTimeout(function()
    	//{
	//	    $('#ty_for_buy').modal("hide");
	 //   }, 3500);

    });



  var arrowUpShow = 600;
		$(window).scroll(function () {
			if($('.mini_basket_button').length) {
				if ($(this).scrollTop() > arrowUpShow) $('.mini_basket_button').fadeIn(500);
				else $('#arrow-up').fadeOut(1000);
			}
		});
		$('.mini_basket_button').click(function () {
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
		});
	$('body').on('click','#order22',function()
	{
		var uri;
		var k=0;
		uri = location.href;
		sub_uri = '';
		for(i=0;i<=uri.length;i++)
		{

			sub_uri = sub_uri + uri[i];


			if (uri[i]=='/')
			{
				k = k+1;
				if (k==4)
				{
					break;
				}
			}

		}
		finish = uri.replace(sub_uri,'');
		$('#f_send_feedback > div > input[type="hidden"]').val(finish.replace('.html',''));
	});


$(function() {
				$( '#mobile_menu #dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' }
				});
			});
$(function() {
				$( '#mobile_menu2 #dl-menu' ).dlmenu({
					animationClasses : { classin : 'dl-animate-in-1', classout : 'dl-animate-out-1' }
				});
			});


})(jQuery)
