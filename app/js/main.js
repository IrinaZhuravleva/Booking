$(document).ready(function(){


	$('#btn-open-form').click(function(e){
		e.preventDefault();

			$(this).hide();
			// $('.form-wrapper').show();
			// $('.form-wrapper').fadeIn(1000);

			$('.form-wrapper').slideDown(1000);
	});

// phone-mask
			$(".phone-mask").mask("+7 (999) 999-99-99");

});