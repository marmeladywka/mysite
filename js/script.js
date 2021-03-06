$(document).ready(function(){
	$('.info__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:4,
		slidesToScroll:1,
		speed:1000,
		easing:'ease',
		infinite:true,
		initialSlide:0,
		autoplay:true,
		autoplaySpeed:1000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:10,
		touchMove:true,
		responsive:[
		{
			breakpoint:1230,
			settings: {
				slidesToShow:3,
			}

	
		},
		{
			breakpoint:990,
			settings: {
				slidesToShow:2,
			}

	
		},
		{
			breakpoint:670,
			settings: {
				slidesToShow:1,
			}

	
		}

		]


	});
})
