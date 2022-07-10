$(function(){
	$('.carousel__row').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
			}
		}	
	]
})
});
