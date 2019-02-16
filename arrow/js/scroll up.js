$(document).ready(function(){
      $('body').append('<div id="toTop"><span class="fa fa-angle-up" style="color: #fff; font-size:30px;" id="tpBom"></span></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
