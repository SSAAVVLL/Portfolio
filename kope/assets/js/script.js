$(function(){
	$('.bxslider').bxSlider({
		auto: 'true',
		autoHover: 'true',
		speed: '500',
	});
	
	var dropDown = $('.dropCart');
	var targetFinalPrice = $($(dropDown).find('.edit').data('result'));
	var allPrices = $(dropDown).find('.price .number');
	var valueAllPrices = 0;
	$(allPrices).each(function(){
		valueAllPrices += Number($(this).text());
	})
	$(targetFinalPrice).text(valueAllPrices);
	
	var orderConfirm = $('#orderConfirm');
	var targetFinalPrice = $($(orderConfirm).find('.edit').data('result'));
	var allPrices = $(orderConfirm).find('.price .number');
	var valueAllPrices = 0;
	$(allPrices).each(function(){
		valueAllPrices += Number($(this).text());
	})
	$(targetFinalPrice).text(valueAllPrices);
	
	
	$('.dropDown').hover(function(){
		var target = $(this).data('target');
		//alert($(target).html());

		if ($(target).find('.itemCart').is('.itemCart')) {
			$( target ).find('.itemCart').css('display','block');
			// $( target ).find('.itemCart').css('opacity', '1');
		}
	}, function() {
		var target = $(this).data('target');
		$( target ).find('.itemCart').css('display','none');
		// $( target ).find('.itemCart').css('visibility', 'hidden');
	})
	
	// START plus,minus,delete MAIN PAGE
	$('.minus').click(function(){
		var target = $(this).siblings('.numb');
		var value = Number($(target).val()) - 1;
		
		var targetPrice = $(this).parents('.edit').find('.number');
		var valuePrice = Number($(targetPrice).text());
		var stepPrice = Number($(targetPrice).data('step'));
		
		if (value == 0) {
			$(targetPrice).text(value * stepPrice);
			$(target).val(value);
			
			var targetFinalPrice = $($(this).parents('.edit').data('result'));
			var allPrices = $(this).parent().parent().parent().find('.price .number');
			var valueAllPrices = 0;
			$(allPrices).each(function(){
				valueAllPrices += Number($(this).text());
			})
			// if (valueAllPrices == 0) {
				// $('.dropCart').css('opacity', '0');
				// $('.dropCart').css('visibility', 'hidden');
			// }
			$(targetFinalPrice).text(valueAllPrices);
			
			$(this).parent().parent().remove();
		}
		
		
	
		
		if (value > 0) {
			$(targetPrice).text(value * stepPrice);
			$(target).val(value);
			
			var targetFinalPrice = $($(this).parents('.edit').data('result'));
			var allPrices = $(this).parent().parent().parent().find('.price .number');
			var valueAllPrices = 0;
			$(allPrices).each(function(){
				valueAllPrices += Number($(this).text());
			})
			$(targetFinalPrice).text(valueAllPrices);
		}
	})
	
	$('.plus').click(function(){
		var target = $(this).siblings('.numb');
		var value = Number($(target).val()) + 1;
		$(target).val(value);
		
		var targetPrice = $(this).parents('.edit').find('.number');
		var valuePrice = Number($(targetPrice).text());
		var stepPrice = Number($(targetPrice).data('step'));
		
		$(targetPrice).text(value * stepPrice);
		$(target).val(value);
		
		var targetFinalPrice = $($(this).parents('.edit').data('result'));
		var allPrices = $(this).parent().parent().parent().find('.price .number');
		var valueAllPrices = 0;
		$(allPrices).each(function(){
			// alert(Number($(this).text()));
			valueAllPrices += Number($(this).text());
		})
		$(targetFinalPrice).text(valueAllPrices);
	})
	$('.delete').click(function(){		
		var targetPrice = $(this).parents('.edit').find('.number');
		var valuePrice = Number($(targetPrice).text());
		
		var targetFinalPrice = $($(this).parents('.edit').data('result'));
		var allPrices = $(this).parent().parent().parent().find('.price .number');
		// alert($(allPrices).attr('class'));
		var valueAllPrices = 0;
		
		$(this).parent().parent().remove();
		
		$(allPrices).each(function(){
			// alert(Number($(this).text()));
			valueAllPrices += Number($(this).text());
		})
		
		// if (valueAllPrices == 0) {
			// $('.dropCart').css('opacity', '0');
			// $('.dropCart').css('visibility', 'hidden');
		// }
		
		$(targetFinalPrice).text(valueAllPrices - valuePrice);
	})
	// END plus,minus,delete MAIN PAGE
	
	$('.popup').click(function(){
		$('body').css('overflow','hidden');
		var targetPop = ($(this).data('pop'));
		
		if ($(targetPop).attr('id') == 'detailItem') {
			$(targetPop).find('img').attr('src',$(this).data('big'));
			$(targetPop).find('.name').text($(this).siblings('.description').find('.name').text());
			$(targetPop).find('.detail').text($(this).siblings('.detailInfo').text());
			$(targetPop).find('.buy .number').text($(this).siblings('.buttonBuy').find('.number').text());
		}
		
		$(targetPop).css('visibility','visible').css('opacity','1');
	})
	$('.close').click(function(ev){
		ev.preventDefault();
		$('body').css('overflow','visible');
		$(this).parents('.backBlock').css('opacity','0').css('visibility','hidden');
	})
})

