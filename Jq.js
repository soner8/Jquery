$(document).ready(function(){

let slider = $('#carrousel'),
    imgSlide = $('#carrousel .slide'),
    indexImg = imgSlide.length - 1,
    i = 0,
    currentImg = imgSlide.eq(i);

imgSlide.fadeOut();
currentImg.fadeIn();

slider.append('<div class="controls"> <span class="prev"><i class="fas fa-2x fa-angle-left"></i></span> <span class="next"><i class="fas fa-2x fa-angle-right"></i></span> </div>');

$('.next').click(function(){

    i++;

    if( i <= indexImg ){
        imgSlide.fadeOut();
        currentImg = imgSlide.eq(i);
        currentImg.fadeIn();
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){

    i--;

    if( i >= 0 ){
        imgSlide.fadeOut();
        currentImg = imgSlide.eq(i);
        currentImg.fadeIn();
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){

        if(i < indexImg){
	    i++;
	}
	else{
	    i = 0;
	}

	imgSlide.fadeOut();

	currentImg = imgSlide.eq(i);
	currentImg.fadeIn();

	slideImg();

}, 3000);
}

slideImg();

});