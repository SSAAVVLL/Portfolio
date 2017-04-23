$(function(){
    //minimize header on scroll
    $(window).scroll(function(){
        //console.log($(window).scrollTop());
        if ($(window).scrollTop() > 200) {
            $('html').addClass("scrollDown");
        } else {
            $('html').removeClass("scrollDown");
        }
    });
    //slider on main page
    $('.mainBanner').bxSlider({
        pager: false
    });
    //toggle mobile menu
    $('.menuArea').click(function(ev){
        ev.preventDefault();
        //console.log($(this).data('target-menu'));
        //console.log(this.classList.length);
        var menu = $($(this).data('menu'));
        var elements = menu.data('target-toggle').split(' ');
        elements.forEach(function(cls) {
            //console.log(cls);
            $(cls).toggleClass('active');
        });
        $('html').toggleClass('openedMenu');
    });

    //toggle modal window
    $('.toggleModal').click(function(){
        //console.log($(this).data('modal'));
        //update modal data
        // console.info($(this).attr('class'));
        if ($(this).hasClass('updateModal')) {
            // console.log('startUpdate');
            var item = $(this).parent('.wrapItem');
            var modal = $($(this).data('modal'));

            //edit next with template of naming big photo
            //console.log(item.find('.picture').attr('src'));
            var bigPictureSrc = item.find('.picture').attr('src');
            modal.find('.picture').attr('src', bigPictureSrc);

            var elements = [".itemHeader", ".itemDescription", ".itemDetails", ".price", ".number"];
            elements.forEach(function (cls) {
                //console.log(item.find(cls).text());
                modal.find(cls).text(item.find(cls).text());
            });
            // console.log('finishUpdate');
        }
        // console.log('startToggle');
        $($(this).data('modal')).toggleClass('active');
        $('html').toggleClass('openedModal');
        // console.log('finishToggle');
    });

    //functions of plus and minus
    $('.count .minus').click(function() {
        var par = $(this).parents('.count');
        var num = par.find('.number');
        if (parseInt(num.text()) > 1)
            num.text(parseInt(num.text()) - 1);
    });
    $('.count .plus').click(function() {
        var par = $(this).parents('.count');
        var num = par.find('.number');
        num.text(parseInt(num.text()) + 1);
    });
    //animation add to cart
    $('.buttonAddToCart').click(function(){
        // console.log('I am here');
        $('.cartMobileButton').animate({
            top: "-10px"
        }, 300, function(){
            $('.cartMobileButton').animate({
                top: "0px"
            }, 400);
        });
    });
});
