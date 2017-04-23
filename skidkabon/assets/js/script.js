$(function(){
	$('#acord .panel').click(function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('.arrow i').removeClass('glyphicon-menu-up');
			$(this).find('.arrow i').addClass('glyphicon-menu-down');
		} else {
			$('#acord .panel').removeClass('active');
			$('#acord .panel .arrow i').removeClass('glyphicon-menu-up');
			$('#acord .panel .arrow i').addClass('glyphicon-menu-down');
			$(this).addClass('active');
			$(this).find('.arrow i').removeClass('glyphicon-menu-down');
			$(this).find('.arrow i').addClass('glyphicon-menu-up');
		}
	})
	$('.top-bar .glyphicon').click(function(){
		$(this).parent('.top-bar').toggleClass('active');
		$('html').toggleClass('overflow');
	})
})