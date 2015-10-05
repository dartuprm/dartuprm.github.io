/* ---------------------------------------------- /*
   * Preloader
  /* ---------------------------------------------- */

  $(window).load(function() {
    $('.loader').fadeOut();
    $('.page-loader').delay(500).fadeOut('slow');
  });


$(function() {
	var open = false;
	$('.burger').click(function() {
        if(!open){
          this.classList.add('burger-x');
          open = true;
        }
        else{
          this.classList.remove('burger-x');
          open = false;
        }


        if ($('body').hasClass('show-nav')) {
            $('body').removeClass('show-nav').addClass('hide-nav');
            $(".navbar-brand").show();
            //$(".navbar-inverse").css("border-color", "#ddd");

            setTimeout(function() {
                $('body').removeClass('hide-nav');
            }, 500);

        } else {
            $('body').removeClass('hide-nav').addClass('show-nav');
             $(".navbar-brand").hide();
             //$(".navbar-inverse").css("border-color", "");
        }

		return false;
	});
	
});

$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 570) {
        $(".navbar-inverse").css("background-color", "rgba(0, 0, 0, 0.5)");
        //$(".navbar-inverse").css("border-color", "#ddd");
        
        
      } else {
         $(".navbar-inverse").css("background-color", "");
         //$(".navbar-inverse").css("border-color", "");
      }
  });
});




