jQuery(document).ready(function($) {
	var video=document.getElementById("home_vid");   

	$('.bottomPlay').on("click", function(e){
		$('.toFlyTop').addClass('flyAway');
		$('.toFlyBot').addClass('flyAway');
		$('.vidBg').addClass('active');
		video.muted = false;
		video.pause();
		video.currentTime = 0;
		video.play();
		
		$(this).toggleClass('muted');
	});
	function restart(){
		$('.toFlyTop').removeClass('flyAway');
		$('.toFlyBot').removeClass('flyAway');
		$('.vidBg').removeClass('active');
		video.muted = true;
		video.pause();
		video.currentTime = 0;
		video.play();
		
		$(this).toggleClass('muted');
	};
	var winWid = $(window).width();
	var windowHeight = $(window).height();
	var skrolleerre;
	skrolleerre = skrollr.init({forceHeight: false});
	$(window).on('scroll', function() {
		if($(document).scrollTop()>windowHeight){
			$('.headerFull').addClass('whiten');
			$('.encap').addClass('inactivate');
			if (winWid>992) {
				skrolleerre.refresh();
			}
		}else {
			$('.encap').removeClass('inactivate');
			$('.headerFull').removeClass('whiten');
		}
	});
	$('.slideSlickTile').slick({
		infinite: false,
		dots: true,
		nextArrow:$('.nextBtn'),
		prevArrow:$('.prevBtn'),
	});
	$("#skrollr-body").onepage_scroll({
		sectionContainer: "section.fwh",     
		easing: "linear",                  
		animationTime: 400,             
		pagination: false,                
		updateURL: true,                
		beforeMove: function(index) {
			
		},  
		afterMove: function(index) {
			currentIndex = index;
			if (currentIndex>1) {
				$('.headerFull').addClass('whiten');
				$('.encap').addClass('inactivate');
			}else {
				$('.encap').removeClass('inactivate');
				$('.headerFull').removeClass('whiten');	
			}
		},   
		loop: false,
		keyboard: true,                  
		responsiveFallback: false,
	});
	$('.internalNav').on('click', function(event) {
		event.preventDefault();
		var index = parseInt($(this).attr('href'));
		$.fn.moveTo(index);
	});
});