$(function(){
	$('.tab').hide();
	$('#tab-1').show();
	$('.ref-loc a').click(function(e){
		e.preventDefault();
		var targ = '#'+ $(this).attr('data-comp');
		$('.ref-loc a').removeClass('active')
		$(this).addClass('active');
		$('.tab').hide();
		$(targ).show();
	})
})