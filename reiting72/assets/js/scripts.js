$(function(){
	$('.line-select a').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
	})
	$('#send-res').click(function(e){
		e.preventDefault();
		$('.send-respons').toggle("slow");
	})
	$('.send-req').click(function(e){
		e.preventDefault();
		$('.calc').hide('slow');
		$('.confirm').show('slow', function(){
			
			$('.meter > span').animate({
				width:"20%",
			}, 1500);
			$('.meter > span').animate({
				width:"60%",
			}, 2500);
			$('.meter > span').delay(200).animate({
				width:"100%",
			}, 4000, function(){
				$('.confirm').hide('slow');
				$('.send-data').show('slow')
			});
		});
	})
})
