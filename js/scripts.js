$(document).ready(function(){

	$('.masc').hover(function(){
		$(this).animate({height:'170px'},300);
		//$(this).next('.menuSub').css('display','inline-block');
		//$(this).next().next('.menuSub2').css('display','inline-block');
	},function(){
		$(this).animate({height:'60px'},300);
		//$(this).next('.menuSub').css('display','none');
		//$(this).next().next('.menuSub2').css('display','none');
	});

});
