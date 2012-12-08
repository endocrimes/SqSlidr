(function($){
	var automatic = true;
	var delayInSeconds = 6;
	
	var intervalLoop = setInterval(function(){
	        $('.next').trigger('click');
        }, delayInSeconds * 1000);
	
    $('.slider').each(function(){
        var slider = $(this),
            slides = slider.find('.slide'),
            currentSlide = 0;
            
        slides.show();
        $(slides[currentSlide]).addClass('active');
        $('.next,.prev', slider).show();
            
        $('.prev', slider).on('click', function(){
            slides.removeClass('active');
            currentSlide--;
            if(currentSlide < 0) currentSlide = slides.length - 1;
            $(slides[currentSlide]).addClass('active');
            clearInterval(intervalLoop);
            intervalLoop = setInterval(function(){
	        $('.next').trigger('click');
        }, delayInSeconds * 1000);
            return false;
        });
        
        $('.next', slider).on('click', function(){
            slides.removeClass('active');
            currentSlide++;
            if(currentSlide > slides.length - 1) currentSlide = 0;
            $(slides[currentSlide]).addClass('active');
            clearInterval(intervalLoop);
            intervalLoop = setInterval(function(){
	        $('.next').trigger('click');
        }, delayInSeconds * 1000);
            return false;
        });
        
        
        
    });

})(window.jQuery);